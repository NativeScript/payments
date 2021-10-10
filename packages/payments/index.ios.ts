import { BuyItemOptions, PaymentEvent, _payments$ } from './common';
import { Failure } from './failure';
import { Item } from './item';
import { Order, OrderState } from './order';

export { PaymentEvent, paymentEvents, payments$, toMainThread } from './common';
export * from './failure';
export * from './item';
export * from './order';

let _productRequest: SKProductsRequest | null;
let _productRequestDelegate: SKProductRequestDelegateImpl | null;
let _paymentTransactionObserver: SKPaymentTransactionObserverImpl | null;

export function init(): void {
  if (!_paymentTransactionObserver) {
    _payments$.next({
      context: PaymentEvent.Context.CONNECTING_STORE,
      result: PaymentEvent.Result.STARTED,
      payload: null,
    });
    _paymentTransactionObserver = new SKPaymentTransactionObserverImpl();
    _payments$.next({
      context: PaymentEvent.Context.CONNECTING_STORE,
      result: PaymentEvent.Result.PENDING,
      payload: null,
    });
    try {
      SKPaymentQueue.defaultQueue().addTransactionObserver(_paymentTransactionObserver);
      _payments$.next({
        context: PaymentEvent.Context.CONNECTING_STORE,
        result: PaymentEvent.Result.SUCCESS,
        payload: null,
      });
    } catch (e) {
      const errorPayload = typeof e === 'object' ? e.message : e;
      console.error(new Error(`Init failed: ${errorPayload}`));
      _payments$.next({
        context: PaymentEvent.Context.CONNECTING_STORE,
        result: PaymentEvent.Result.FAILURE,
        payload: new Failure(null),
      });
    }
  }
}

export function tearDown(): void {
  if (_paymentTransactionObserver) {
    SKPaymentQueue.defaultQueue().removeTransactionObserver(_paymentTransactionObserver);
  }
  _paymentTransactionObserver = null;
}

export function fetchItems(itemIds: Array<string>): void {
  _payments$.next({
    context: PaymentEvent.Context.RETRIEVING_ITEMS,
    result: PaymentEvent.Result.STARTED,
    payload: itemIds,
  });
  const productIds: NSMutableSet<string> = NSMutableSet.alloc<string>().init();
  itemIds.forEach((value: string) => productIds.addObject(value));
  _productRequest = SKProductsRequest.alloc().initWithProductIdentifiers(productIds);
  _productRequestDelegate = new SKProductRequestDelegateImpl();
  _productRequest.delegate = _productRequestDelegate;
  _productRequest.start();
  _payments$.next({
    context: PaymentEvent.Context.RETRIEVING_ITEMS,
    result: PaymentEvent.Result.PENDING,
    payload: itemIds,
  });
}

export function buyItem(item: Item, buyItemOptions: BuyItemOptions): void {
  if (SKPaymentQueue.defaultQueue().transactions) {
    const pendingCount = SKPaymentQueue.defaultQueue().transactions.count;
    if (!pendingCount) {
      _payments$.next({
        context: PaymentEvent.Context.PROCESSING_ORDER,
        result: PaymentEvent.Result.PENDING,
        payload: pendingCount + 1,
      });
      const payment = SKMutablePayment.paymentWithProduct(<SKProduct>item.nativeValue);
      if (buyItemOptions) {
        payment.applicationUsername = buyItemOptions?.accountUserName || '';
        payment.simulatesAskToBuyInSandbox = buyItemOptions.ios?.simulatesAskToBuyInSandbox || false;
        payment.quantity = buyItemOptions.ios?.quantity || 1;
      }
      try {
        SKPaymentQueue.defaultQueue().addPayment(payment);
        _payments$.next({
          context: PaymentEvent.Context.PROCESSING_ORDER,
          result: PaymentEvent.Result.STARTED,
          payload: item,
        });
      } catch (e) {
        const errorPayload = typeof e === 'object' ? e.message : e;
        console.error(new Error(`Error while adding payment: ${errorPayload}`));
        _payments$.next({
          context: PaymentEvent.Context.PROCESSING_ORDER,
          result: PaymentEvent.Result.FAILURE,
          payload: new Failure(null),
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
    console.error(new Error('SKPaymentQueue.defaultQueue().transactions missing.'));
  }
}

export function finalizeOrder(order: Order): void {
  _payments$.next({
    context: PaymentEvent.Context.FINALIZING_ORDER,
    result: PaymentEvent.Result.STARTED,
    payload: order,
  });
  if (order.state === OrderState.VALID && !order.restored) {
    try {
      SKPaymentQueue.defaultQueue().finishTransaction(<SKPaymentTransaction>order.nativeValue);
      _payments$.next({
        context: PaymentEvent.Context.FINALIZING_ORDER,
        result: PaymentEvent.Result.PENDING,
        payload: order,
      });
    } catch (e) {
      const errorPayload = typeof e === 'object' ? e.message : e;
      console.error(new Error(`Error while finalizing order: ${errorPayload}`));
      _payments$.next({
        context: PaymentEvent.Context.FINALIZING_ORDER,
        result: PaymentEvent.Result.FAILURE,
        payload: new Failure(null),
      });
    }
  } else {
    _payments$.next({
      context: PaymentEvent.Context.FINALIZING_ORDER,
      result: PaymentEvent.Result.FAILURE,
      payload: new Failure(999),
    });
  }
}

export function restoreOrders(): void {
  _payments$.next({
    context: PaymentEvent.Context.RESTORING_ORDERS,
    result: PaymentEvent.Result.STARTED,
    payload: null,
  });
  try {
    SKPaymentQueue.defaultQueue().restoreCompletedTransactions();
  } catch (e) {
    const errorPayload = typeof e === 'object' ? e.message : e;
    console.error(new Error(`Error while restoring order: ${errorPayload}`));
    _payments$.next({
      context: PaymentEvent.Context.RESTORING_ORDERS,
      result: PaymentEvent.Result.FAILURE,
      payload: new Failure(null),
    });
  }
}

export function canMakePayments(): boolean {
  // TODO ?
  return SKPaymentQueue.canMakePayments();
}

@NativeClass
class SKProductRequestDelegateImpl extends NSObject implements SKProductsRequestDelegate {
  public static ObjCProtocols = [SKProductsRequestDelegate];

  public productsRequestDidReceiveResponse(request: SKProductsRequest, response: SKProductsResponse) {
    const products: NSArray<SKProduct> = response.products;

    // log the invalid IDs if any
    if (response.invalidProductIdentifiers.count >= 1) {
      console.log('Invalid product identifiers: ' + JSON.stringify(response.invalidProductIdentifiers.componentsJoinedByString(', ')));
    }

    const result: Array<Item> = [];
    for (let i = 0; i < products.count; i++) {
      result.push(new Item(products.objectAtIndex(i)));
    }

    _payments$.next({
      context: PaymentEvent.Context.RETRIEVING_ITEMS,
      result: PaymentEvent.Result.SUCCESS,
      payload: result,
    });

    this._cleanup();
  }

  public requestDidFailWithError(request: SKRequest, error: NSError) {
    _payments$.next({
      context: PaymentEvent.Context.RETRIEVING_ITEMS,
      result: PaymentEvent.Result.FAILURE,
      payload: new Failure(error.code),
    });
    this._cleanup();
  }

  private _cleanup() {
    _productRequestDelegate = null;
    _productRequest = null;
  }
}

@NativeClass
class SKPaymentTransactionObserverImpl extends NSObject implements SKPaymentTransactionObserver {
  public static ObjCProtocols = [SKPaymentTransactionObserver];

  public paymentQueueUpdatedTransactions(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction>): void {
    _transactionHandler(queue, transactions);
  }

  public paymentQueueRestoreCompletedTransactionsFinished(queue: SKPaymentQueue): void {
    _payments$.next({
      context: PaymentEvent.Context.RESTORING_ORDERS,
      result: PaymentEvent.Result.SUCCESS,
      payload: null,
    });
  }

  public paymentQueueRestoreCompletedTransactionsFailedWithError(queue: SKPaymentQueue, error: NSError): void {
    _payments$.next({
      context: PaymentEvent.Context.RESTORING_ORDERS,
      result: PaymentEvent.Result.FAILURE,
      payload: new Failure(error.code),
    });
  }

  public paymentQueueRemovedTransactions(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction>): void {
    if (transactions && transactions.count) {
      for (let i = 0; i < transactions.count; i++) {
        const transaction: SKPaymentTransaction = transactions.objectAtIndex(i);
        if (transaction.transactionState === SKPaymentTransactionState.Purchased) {
          _payments$.next({
            context: PaymentEvent.Context.FINALIZING_ORDER,
            result: PaymentEvent.Result.SUCCESS,
            payload: new Order(transaction),
          });
        }
      }
    }
    _payments$.next({
      context: PaymentEvent.Context.PROCESSING_ORDER,
      result: PaymentEvent.Result.PENDING,
      payload: queue.transactions ? queue.transactions.count : 0,
    });
  }

  public paymentQueueShouldAddStorePaymentForProduct(queue: SKPaymentQueue, payment: SKPayment, product: SKProduct): boolean {
    return true;
  }

  public paymentQueueUpdatedDownloads(queue: SKPaymentQueue, downloads: NSArray<SKDownload>): void {
    console.log('paymentQueueUpdatedDownloads called. Not implemented.');
  }
}

function _transactionHandler(queue: SKPaymentQueue, transactions: NSArray<SKPaymentTransaction>): void {
  _payments$.next({
    context: PaymentEvent.Context.PROCESSING_ORDER,
    result: PaymentEvent.Result.PENDING,
    payload: queue.transactions ? queue.transactions.count : 0,
  });
  if (transactions && transactions.count) {
    for (let i = 0; i < transactions.count; i++) {
      const transaction: SKPaymentTransaction = transactions.objectAtIndex(i);

      switch (transaction.transactionState) {
        case SKPaymentTransactionState.Purchased:
          _payments$.next({
            context: PaymentEvent.Context.PROCESSING_ORDER,
            result: PaymentEvent.Result.SUCCESS,
            payload: new Order(transaction),
          });
          break;
        case SKPaymentTransactionState.Failed:
          _payments$.next({
            context: PaymentEvent.Context.PROCESSING_ORDER,
            result: PaymentEvent.Result.FAILURE,
            payload: new Failure(transaction.error.code),
          });
          try {
            queue.finishTransaction(transaction);
          } catch (e) {
            const errorPayload = typeof e === 'object' ? e.message : e;
            console.error(new Error(`Error while finalizing failed order: ${errorPayload}`));
          }
          break;
        case SKPaymentTransactionState.Restored:
          _payments$.next({
            context: PaymentEvent.Context.PROCESSING_ORDER,
            result: PaymentEvent.Result.SUCCESS,
            payload: new Order(transaction.originalTransaction, true),
          });
          _payments$.next({
            context: PaymentEvent.Context.RESTORING_ORDERS,
            result: PaymentEvent.Result.PENDING,
            payload: new Order(transaction.originalTransaction, true),
          });
          try {
            queue.finishTransaction(transaction);
          } catch (e) {
            const errorPayload = typeof e === 'object' ? e.message : e;
            console.error(new Error(`Error while finalizing restored order: ${errorPayload}`));
          }
          break;
        case SKPaymentTransactionState.Purchasing:
        case SKPaymentTransactionState.Deferred: // TODO ?
          break;
        default:
          console.error(new Error('Missing or unknown transaction state.'));
          break;
      }
    }
  }
  _payments$.next({
    context: PaymentEvent.Context.PROCESSING_ORDER,
    result: PaymentEvent.Result.PENDING,
    payload: queue.transactions ? queue.transactions.count : 0,
  });
}
