// tslint:disable: no-unsafe-any
import { Application as TnsApplication } from '@nativescript/core';
import { Failure } from './failure';
import { Item } from './item';
import { Order, OrderState } from './order';
import { _payments$, EventContext, EventResult, PaymentEvent } from './common';
export * from './failure';
export * from './item';
export * from './order';
// java
type List<T> = java.util.List<T>;
// android
type Context = android.content.Context;
// android billing
type Purchase = com.android.billingclient.api.Purchase;
type BillingClient = com.android.billingclient.api.BillingClient;
type SkuDetails = com.android.billingclient.api.SkuDetails;
type PurchasesResult = com.android.billingclient.api.Purchase.PurchasesResult;

export { EventContext, EventResult, IPaymentEvent, PaymentEvent, payments$ } from './common';

let _billingClient: BillingClient | null;

export function init(): void {
  if (!_billingClient) {
    _payments$.next({
      context: PaymentEvent.Context.CONNECTING_STORE,
      result: PaymentEvent.Result.STARTED,
      payload: null,
    });
    if (TnsApplication.android && <Context>TnsApplication.android.context) {
      _billingClient = com.android.billingclient.api.BillingClient.newBuilder(TnsApplication.android.context)
        .enablePendingPurchases()
        .setListener(
          new com.android.billingclient.api.PurchasesUpdatedListener({
            onPurchasesUpdated(result, purchases: List<Purchase>): void {
              _purchaseHandler(result.getResponseCode(), purchases);
            },
          }),
        )
        .build();
      _payments$.next({
        context: PaymentEvent.Context.CONNECTING_STORE,
        result: PaymentEvent.Result.PENDING,
        payload: null,
      });
      _billingClient.startConnection(
        new com.android.billingclient.api.BillingClientStateListener({
          onBillingSetupFinished(result: com.android.billingclient.api.BillingResult): void {
            const resultCode = result.getResponseCode();
            if (_billingClient) {
              if (resultCode === com.android.billingclient.api.BillingClient.BillingResponseCode.OK) {
                _billingClient.queryPurchaseHistoryAsync(
                  com.android.billingclient.api.BillingClient.SkuType.INAPP,
                  new com.android.billingclient.api.PurchaseHistoryResponseListener({
                    onPurchaseHistoryResponse: (historyResult, purchaseList) => {
                      const responseCode = historyResult.getResponseCode();
                      _purchaseHandler(
                        responseCode,
                        purchaseList,
                        com.android.billingclient.api.BillingClient.SkuType.INAPP,
                      );
                      _payments$.next({
                        context: PaymentEvent.Context.CONNECTING_STORE,
                        result: PaymentEvent.Result.SUCCESS,
                        payload: null,
                      });
                    },
                  }),
                );
                _billingClient.queryPurchaseHistoryAsync(
                  com.android.billingclient.api.BillingClient.SkuType.SUBS,
                  new com.android.billingclient.api.PurchaseHistoryResponseListener({
                    onPurchaseHistoryResponse: (historyResult, purchaseList) => {
                      const responseCode = historyResult.getResponseCode();
                      _purchaseHandler(
                        responseCode,
                        purchaseList,
                        com.android.billingclient.api.BillingClient.SkuType.SUBS,
                      );
                      _payments$.next({
                        context: PaymentEvent.Context.CONNECTING_STORE,
                        result: PaymentEvent.Result.SUCCESS,
                        payload: null,
                      });
                    },
                  }),
                );
              } else {
                console.error(new Error('Init failed with code: ' + resultCode));
                _payments$.next({
                  context: PaymentEvent.Context.CONNECTING_STORE,
                  result: PaymentEvent.Result.FAILURE,
                  payload: new Failure(resultCode),
                });
              }
            } else {
              console.error(new Error('BillingClient missing.'));
            }
          },
          onBillingServiceDisconnected(): void {
            console.log('Billing Service disconnected.');
            // .startConnection // TODO Handle retrying connection ?
          },
        }),
      );
    } else {
      console.error(new Error('Application context missing.'));
    }
  }
}

export function tearDown() {
  if (_billingClient) {
    _billingClient.endConnection();
  }
  _billingClient = null;
}

export function fetchItems(itemIds: Array<string>): void {
  fetchProducts(itemIds, com.android.billingclient.api.BillingClient.SkuType.INAPP);
}

export function fetchSubscriptions(itemIds: Array<string>): void {
  fetchProducts(itemIds, com.android.billingclient.api.BillingClient.SkuType.SUBS);
}

export function fetchProducts(itemIds: Array<string>, skuType: string) {
  if (_billingClient) {
    _payments$.next({
      context: PaymentEvent.Context.RETRIEVING_ITEMS,
      result: PaymentEvent.Result.STARTED,
      payload: itemIds,
    });
    const skuList = new java.util.ArrayList();
    itemIds.forEach(value => {
      return skuList.add(value);
    });
    const params = com.android.billingclient.api.SkuDetailsParams.newBuilder();
    params.setSkusList(skuList).setType(skuType);
    _billingClient.querySkuDetailsAsync(
      params.build(),
      new com.android.billingclient.api.SkuDetailsResponseListener({
        onSkuDetailsResponse: (result, skuDetailsList) => {
          const responseCode = result.getResponseCode();
          if (responseCode === com.android.billingclient.api.BillingClient.BillingResponseCode.OK) {
            const products = [];
            for (let i = 0; i < skuDetailsList.size(); i++) {
              products.push(new Item(skuDetailsList.get(i)));
            }
            _payments$.next({
              context: PaymentEvent.Context.RETRIEVING_ITEMS,
              result: PaymentEvent.Result.SUCCESS,
              payload: products,
            });
          } else {
            _payments$.next({
              context: PaymentEvent.Context.RETRIEVING_ITEMS,
              result: PaymentEvent.Result.FAILURE,
              payload: new Failure(responseCode),
            });
          }
        },
      }),
    );
    _payments$.next({
      context: PaymentEvent.Context.RETRIEVING_ITEMS,
      result: PaymentEvent.Result.PENDING,
      payload: itemIds,
    });
  } else {
    console.error(new Error('BillingClient missing.'));
  }
}

export function buyItem(item: Item, userData?: string): void {
  startOrder(item, com.android.billingclient.api.BillingClient.SkuType.INAPP, userData);
}
export function startSubscription(item: Item, userData?: string) {
  startOrder(item, com.android.billingclient.api.BillingClient.SkuType.SUBS, userData);
}

export function startOrder(item: Item, skuType: string, userData?: string) {
  if (_billingClient) {
    let pendingCount = 0;
    const pending = _billingClient.queryPurchases(skuType).getPurchasesList();
    if (pending) {
      pendingCount = pending.size();
    }
    if (!pendingCount) {
      _payments$.next({
        context: PaymentEvent.Context.PROCESSING_ORDER,
        result: PaymentEvent.Result.PENDING,
        payload: pendingCount + 1,
      });
      const paramsBuilder = com.android.billingclient.api.BillingFlowParams.newBuilder().setSkuDetails(
        item.nativeValue as SkuDetails,
      );
      if (userData) {
        paramsBuilder.setObfuscatedAccountId(userData);
      }
      const result = _billingClient.launchBillingFlow(TnsApplication.android.foregroundActivity, paramsBuilder.build());
      const responseCode = result.getResponseCode();
      if (responseCode === com.android.billingclient.api.BillingClient.BillingResponseCode.OK) {
        _payments$.next({
          context: PaymentEvent.Context.PROCESSING_ORDER,
          result: PaymentEvent.Result.STARTED,
          payload: item,
        });
      } else {
        _payments$.next({
          context: PaymentEvent.Context.PROCESSING_ORDER,
          result: PaymentEvent.Result.FAILURE,
          payload: new Failure(responseCode),
        });
      }
    } else {
      _payments$.next({
        context: PaymentEvent.Context.PROCESSING_ORDER,
        result: PaymentEvent.Result.PENDING,
        payload: pendingCount,
      });
    }
  } else {
    console.error(new Error('BillingClient missing.'));
  }
}

export function finalizeOrder(order: Order): void {
  if (_billingClient) {
    if (order.isSubscription) {
      if (order.acknowledged) {
        _payments$.next({
          context: PaymentEvent.Context.FINALIZING_ORDER,
          result: PaymentEvent.Result.SUCCESS,
          payload: new Order(order.nativeValue, order.restored),
        });

        return;
      }

      const params = com.android.billingclient.api.AcknowledgePurchaseParams.newBuilder()
        .setPurchaseToken(order.receiptToken)
        .build();

      _billingClient.acknowledgePurchase(
        params,
        new com.android.billingclient.api.AcknowledgePurchaseResponseListener({
          onAcknowledgePurchaseResponse: result => {
            if (result.getResponseCode() === com.android.billingclient.api.BillingClient.BillingResponseCode.OK) {
              _payments$.next({
                context: PaymentEvent.Context.FINALIZING_ORDER,
                result: PaymentEvent.Result.SUCCESS,
                payload: new Order(order.nativeValue, order.restored),
              });
            } else {
              _payments$.next({
                context: PaymentEvent.Context.FINALIZING_ORDER,
                result: PaymentEvent.Result.FAILURE,
                payload: new Failure(result.getResponseCode()),
              });
            }
          },
        }),
      );
      _payments$.next({
        context: PaymentEvent.Context.FINALIZING_ORDER,
        result: PaymentEvent.Result.SUCCESS,
        payload: new Order(order.nativeValue, order.restored),
      });
    } else {
      _payments$.next({
        context: PaymentEvent.Context.FINALIZING_ORDER,
        result: PaymentEvent.Result.STARTED,
        payload: order,
      });
      if (order.state === OrderState.VALID && !order.restored) {
        const consumeParams = com.android.billingclient.api.ConsumeParams.newBuilder()
          .setPurchaseToken(order.receiptToken)
          .build();
        _billingClient.consumeAsync(
          consumeParams,
          new com.android.billingclient.api.ConsumeResponseListener({
            onConsumeResponse: (result, purchaseToken) => {
              const responseCode = result.getResponseCode();
              if (_billingClient) {
                if (responseCode === com.android.billingclient.api.BillingClient.BillingResponseCode.OK) {
                  _payments$.next({
                    context: PaymentEvent.Context.FINALIZING_ORDER,
                    result: PaymentEvent.Result.SUCCESS,
                    payload: new Order(order.nativeValue, order.restored),
                  });
                } else {
                  _payments$.next({
                    context: PaymentEvent.Context.FINALIZING_ORDER,
                    result: PaymentEvent.Result.FAILURE,
                    payload: new Failure(responseCode),
                  });
                }
                const pending = _billingClient
                  .queryPurchases(com.android.billingclient.api.BillingClient.SkuType.INAPP)
                  .getPurchasesList();
                _payments$.next({
                  context: PaymentEvent.Context.PROCESSING_ORDER,
                  result: PaymentEvent.Result.PENDING,
                  payload: pending ? pending.size() : 0,
                });
              } else {
                console.error(new Error('BillingClient missing.'));
              }
            },
          }),
        );
        _payments$.next({
          context: PaymentEvent.Context.FINALIZING_ORDER,
          result: PaymentEvent.Result.PENDING,
          payload: order,
        });
      } else {
        _payments$.next({
          context: PaymentEvent.Context.FINALIZING_ORDER,
          result: PaymentEvent.Result.FAILURE,
          payload: new Failure(8),
        });
      }
    }
  } else {
    console.error(new Error('BillingClient missing.'));
  }
}

export function restoreOrders(skuType?: string): void {
  if (_billingClient) {
    _payments$.next({
      context: PaymentEvent.Context.RESTORING_ORDERS,
      result: PaymentEvent.Result.STARTED,
      payload: null,
    });
    if (skuType === 'sub') {
      skuType = com.android.billingclient.api.BillingClient.SkuType.SUBS;
    } else {
      skuType = com.android.billingclient.api.BillingClient.SkuType.INAPP;
    }
    _billingClient.queryPurchaseHistoryAsync(
      skuType,
      new com.android.billingclient.api.PurchaseHistoryResponseListener({
        onPurchaseHistoryResponse: (result, purchasesList) => {
          const responseCode = result.getResponseCode();
          if (responseCode === com.android.billingclient.api.BillingClient.BillingResponseCode.OK) {
            for (let i = 0; i < purchasesList.size(); i++) {
              const purchase: com.android.billingclient.api.PurchaseHistoryRecord = purchasesList.get(i);
              if (purchase) {
                _payments$.next({
                  context: PaymentEvent.Context.PROCESSING_ORDER,
                  result: PaymentEvent.Result.SUCCESS,
                  payload: new Order(purchase, true),
                });
                _payments$.next({
                  context: PaymentEvent.Context.RESTORING_ORDERS,
                  result: PaymentEvent.Result.PENDING,
                  payload: new Order(purchase, true),
                });
              }
            }
            _payments$.next({
              context: PaymentEvent.Context.RESTORING_ORDERS,
              result: PaymentEvent.Result.SUCCESS,
              payload: null,
            });
          } else {
            _payments$.next({
              context: PaymentEvent.Context.RESTORING_ORDERS,
              result: PaymentEvent.Result.FAILURE,
              payload: new Failure(responseCode),
            });
          }
        },
      }),
    );
  } else {
    console.error(new Error('BillingClient missing.'));
  }
}

export function canMakePayments(/*types*/): boolean {
  return true; // TODO isReady?
}

function _purchaseHandler(responseCode: number, purchases: List<Purchase>, skuType?: string) {
  if (_billingClient) {
    let pending = purchases;
    if (!skuType) {
      pending = _billingClient
        .queryPurchases(com.android.billingclient.api.BillingClient.SkuType.INAPP)
        .getPurchasesList();
    }
    // var isSubscription = skuType === com.android.billingclient.api.BillingClient.SkuType.SUBS;
    _payments$.next({
      context: PaymentEvent.Context.PROCESSING_ORDER,
      result: PaymentEvent.Result.PENDING,
      payload: pending ? pending.size() : 0,
    });
    if (responseCode === com.android.billingclient.api.BillingClient.BillingResponseCode.OK) {
      if (purchases && purchases.size()) {
        for (let i = 0; i < purchases.size(); i++) {
          const purchase: com.android.billingclient.api.Purchase = purchases.get(i);
          if (purchase) {
            const order = new Order(purchase, false);
            // order.isSubscription = isSubscription;
            _payments$.next({
              context: PaymentEvent.Context.PROCESSING_ORDER,
              result: PaymentEvent.Result.SUCCESS,
              payload: order,
            });
          }
        }
      }
    } else {
      _payments$.next({
        context: PaymentEvent.Context.PROCESSING_ORDER,
        result: PaymentEvent.Result.FAILURE,
        payload: new Failure(responseCode),
      });
    }
  } else {
    console.error(new Error('BillingClient missing.'));
  }
}
