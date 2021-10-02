/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module android {
    export module billingclient {
      export class BuildConfig {
        public static class: java.lang.Class<com.android.billingclient.BuildConfig>;
        public static APPLICATION_ID: string;
        public static VERSION_NAME: string;
        public constructor();
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class AccountIdentifiers {
          public static class: java.lang.Class<com.android.billingclient.api.AccountIdentifiers>;
          public getObfuscatedAccountId(): string;
          public getObfuscatedProfileId(): string;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class AcknowledgePurchaseParams {
          public static class: java.lang.Class<com.android.billingclient.api.AcknowledgePurchaseParams>;
          public static newBuilder(): com.android.billingclient.api.AcknowledgePurchaseParams.Builder;
          public getPurchaseToken(): string;
        }
        export module AcknowledgePurchaseParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.AcknowledgePurchaseParams.Builder>;
            public setPurchaseToken(param0: string): com.android.billingclient.api.AcknowledgePurchaseParams.Builder;
            public build(): com.android.billingclient.api.AcknowledgePurchaseParams;
          }
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class AcknowledgePurchaseResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.AcknowledgePurchaseResponseListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.AcknowledgePurchaseResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onAcknowledgePurchaseResponse(param0: com.android.billingclient.api.BillingResult): void;
          });
          public constructor();
          public onAcknowledgePurchaseResponse(param0: com.android.billingclient.api.BillingResult): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export abstract class BillingClient {
          public static class: java.lang.Class<com.android.billingclient.api.BillingClient>;
          public isReady(): boolean;
          public launchBillingFlow(
            param0: globalAndroid.app.Activity,
            param1: com.android.billingclient.api.BillingFlowParams,
          ): com.android.billingclient.api.BillingResult;
          public endConnection(): void;
          public acknowledgePurchase(
            param0: com.android.billingclient.api.AcknowledgePurchaseParams,
            param1: com.android.billingclient.api.AcknowledgePurchaseResponseListener,
          ): void;
          public querySkuDetailsAsync(
            param0: com.android.billingclient.api.SkuDetailsParams,
            param1: com.android.billingclient.api.SkuDetailsResponseListener,
          ): void;
          /** @deprecated */
          public queryPurchases(param0: string): com.android.billingclient.api.Purchase.PurchasesResult;
          public queryPurchaseHistoryAsync(
            param0: string,
            param1: com.android.billingclient.api.PurchaseHistoryResponseListener,
          ): void;
          public queryPurchasesAsync(
            param0: string,
            param1: com.android.billingclient.api.PurchasesResponseListener,
          ): void;
          public getConnectionState(): number;
          public static newBuilder(
            param0: globalAndroid.content.Context,
          ): com.android.billingclient.api.BillingClient.Builder;
          public isFeatureSupported(param0: string): com.android.billingclient.api.BillingResult;
          public startConnection(param0: com.android.billingclient.api.BillingClientStateListener): void;
          public constructor();
          public launchPriceChangeConfirmationFlow(
            param0: globalAndroid.app.Activity,
            param1: com.android.billingclient.api.PriceChangeFlowParams,
            param2: com.android.billingclient.api.PriceChangeConfirmationListener,
          ): void;
          public consumeAsync(
            param0: com.android.billingclient.api.ConsumeParams,
            param1: com.android.billingclient.api.ConsumeResponseListener,
          ): void;
        }
        export module BillingClient {
          export class BillingResponseCode {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.BillingResponseCode>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$BillingResponseCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static ITEM_UNAVAILABLE: number;
            public static ITEM_ALREADY_OWNED: number;
            public static SERVICE_TIMEOUT: number;
            public static USER_CANCELED: number;
            public static SERVICE_UNAVAILABLE: number;
            public static ERROR: number;
            public static OK: number;
            public static BILLING_UNAVAILABLE: number;
            public static FEATURE_NOT_SUPPORTED: number;
            public static SERVICE_DISCONNECTED: number;
            public static DEVELOPER_ERROR: number;
            public static ITEM_NOT_OWNED: number;
          }
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.Builder>;
            public build(): com.android.billingclient.api.BillingClient;
            public setListener(
              param0: com.android.billingclient.api.PurchasesUpdatedListener,
            ): com.android.billingclient.api.BillingClient.Builder;
            public enablePendingPurchases(): com.android.billingclient.api.BillingClient.Builder;
          }
          export class ConnectionState {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.ConnectionState>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$ConnectionState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static CONNECTED: number;
            public static DISCONNECTED: number;
            public static CLOSED: number;
            public static CONNECTING: number;
          }
          export class FeatureType {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.FeatureType>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$FeatureType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static SUBSCRIPTIONS_ON_VR: string;
            public static SUBSCRIPTIONS: string;
            public static IN_APP_ITEMS_ON_VR: string;
            public static SUBSCRIPTIONS_UPDATE: string;
            public static PRICE_CHANGE_CONFIRMATION: string;
          }
          export class SkuType {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.SkuType>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$SkuType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static INAPP: string;
            public static SUBS: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class BillingClientImpl extends com.android.billingclient.api.BillingClient {
          public static class: java.lang.Class<com.android.billingclient.api.BillingClientImpl>;
          public isReady(): boolean;
          public queryPurchases(param0: string): com.android.billingclient.api.Purchase.PurchasesResult;
          public launchBillingFlow(
            param0: globalAndroid.app.Activity,
            param1: com.android.billingclient.api.BillingFlowParams,
          ): com.android.billingclient.api.BillingResult;
          public endConnection(): void;
          public acknowledgePurchase(
            param0: com.android.billingclient.api.AcknowledgePurchaseParams,
            param1: com.android.billingclient.api.AcknowledgePurchaseResponseListener,
          ): void;
          public querySkuDetailsAsync(
            param0: com.android.billingclient.api.SkuDetailsParams,
            param1: com.android.billingclient.api.SkuDetailsResponseListener,
          ): void;
          /** @deprecated */
          public queryPurchases(param0: string): com.android.billingclient.api.Purchase.PurchasesResult;
          public queryPurchaseHistoryAsync(
            param0: string,
            param1: com.android.billingclient.api.PurchaseHistoryResponseListener,
          ): void;
          public queryPurchasesAsync(
            param0: string,
            param1: com.android.billingclient.api.PurchasesResponseListener,
          ): void;
          public getConnectionState(): number;
          public isFeatureSupported(param0: string): com.android.billingclient.api.BillingResult;
          public startConnection(param0: com.android.billingclient.api.BillingClientStateListener): void;
          public launchPriceChangeConfirmationFlow(
            param0: globalAndroid.app.Activity,
            param1: com.android.billingclient.api.PriceChangeFlowParams,
            param2: com.android.billingclient.api.PriceChangeConfirmationListener,
          ): void;
          public consumeAsync(
            param0: com.android.billingclient.api.ConsumeParams,
            param1: com.android.billingclient.api.ConsumeResponseListener,
          ): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class BillingClientStateListener {
          public static class: java.lang.Class<com.android.billingclient.api.BillingClientStateListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.BillingClientStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onBillingServiceDisconnected(): void;
            onBillingSetupFinished(param0: com.android.billingclient.api.BillingResult): void;
          });
          public constructor();
          public onBillingSetupFinished(param0: com.android.billingclient.api.BillingResult): void;
          public onBillingServiceDisconnected(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class BillingFlowParams {
          public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams>;
          public static EXTRA_PARAM_KEY_ACCOUNT_ID: string;
          public static EXTRA_PARAM_KEY_REPLACE_SKUS_PRORATION_MODE: string;
          public static EXTRA_PARAM_KEY_VR: string;
          public static EXTRA_PARAM_KEY_OLD_SKUS: string;
          public static EXTRA_PARAM_KEY_OLD_SKU_PURCHASE_TOKEN: string;
          public getVrPurchaseFlow(): boolean;
          public static newBuilder(): com.android.billingclient.api.BillingFlowParams.Builder;
        }
        export module BillingFlowParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.Builder>;
            public setVrPurchaseFlow(param0: boolean): com.android.billingclient.api.BillingFlowParams.Builder;
            public setObfuscatedProfileId(param0: string): com.android.billingclient.api.BillingFlowParams.Builder;
            public setSkuDetails(
              param0: com.android.billingclient.api.SkuDetails,
            ): com.android.billingclient.api.BillingFlowParams.Builder;
            public setObfuscatedAccountId(param0: string): com.android.billingclient.api.BillingFlowParams.Builder;
            public build(): com.android.billingclient.api.BillingFlowParams;
            public setSubscriptionUpdateParams(
              param0: com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams,
            ): com.android.billingclient.api.BillingFlowParams.Builder;
          }
          export class ProrationMode {
            public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.ProrationMode>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingFlowParams$ProrationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static IMMEDIATE_WITH_TIME_PRORATION: number;
            public static DEFERRED: number;
            public static UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY: number;
            public static IMMEDIATE_AND_CHARGE_PRORATED_PRICE: number;
            public static IMMEDIATE_AND_CHARGE_FULL_PRICE: number;
            public static IMMEDIATE_WITHOUT_PRORATION: number;
          }
          export class SubscriptionUpdateParams {
            public static class: java.lang.Class<
              com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams
            >;
            public static newBuilder(): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
          }
          export module SubscriptionUpdateParams {
            export class Builder {
              public static class: java.lang.Class<
                com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder
              >;
              public build(): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams;
              public setOldSkuPurchaseToken(
                param0: string,
              ): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
              public setReplaceSkusProrationMode(
                param0: number,
              ): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class BillingResult {
          public static class: java.lang.Class<com.android.billingclient.api.BillingResult>;
          public getResponseCode(): number;
          public constructor();
          public static newBuilder(): com.android.billingclient.api.BillingResult.Builder;
          public getDebugMessage(): string;
        }
        export module BillingResult {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.BillingResult.Builder>;
            public build(): com.android.billingclient.api.BillingResult;
            public setDebugMessage(param0: string): com.android.billingclient.api.BillingResult.Builder;
            public setResponseCode(param0: number): com.android.billingclient.api.BillingResult.Builder;
          }
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class ConsumeParams {
          public static class: java.lang.Class<com.android.billingclient.api.ConsumeParams>;
          public static newBuilder(): com.android.billingclient.api.ConsumeParams.Builder;
          public getPurchaseToken(): string;
        }
        export module ConsumeParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.ConsumeParams.Builder>;
            public setPurchaseToken(param0: string): com.android.billingclient.api.ConsumeParams.Builder;
            public build(): com.android.billingclient.api.ConsumeParams;
          }
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class ConsumeResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.ConsumeResponseListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.ConsumeResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onConsumeResponse(param0: com.android.billingclient.api.BillingResult, param1: string): void;
          });
          public constructor();
          public onConsumeResponse(param0: com.android.billingclient.api.BillingResult, param1: string): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class PriceChangeConfirmationListener {
          public static class: java.lang.Class<com.android.billingclient.api.PriceChangeConfirmationListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.PriceChangeConfirmationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onPriceChangeConfirmationResult(param0: com.android.billingclient.api.BillingResult): void;
          });
          public constructor();
          public onPriceChangeConfirmationResult(param0: com.android.billingclient.api.BillingResult): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class PriceChangeFlowParams {
          public static class: java.lang.Class<com.android.billingclient.api.PriceChangeFlowParams>;
          public getSkuDetails(): com.android.billingclient.api.SkuDetails;
          public constructor();
          public static newBuilder(): com.android.billingclient.api.PriceChangeFlowParams.Builder;
        }
        export module PriceChangeFlowParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.PriceChangeFlowParams.Builder>;
            public build(): com.android.billingclient.api.PriceChangeFlowParams;
            public constructor();
            public setSkuDetails(
              param0: com.android.billingclient.api.SkuDetails,
            ): com.android.billingclient.api.PriceChangeFlowParams.Builder;
          }
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class ProxyBillingActivity {
          public static class: java.lang.Class<com.android.billingclient.api.ProxyBillingActivity>;
          public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
          public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
          public onCreate(param0: globalAndroid.os.Bundle): void;
          public constructor();
          public onDestroy(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class Purchase {
          public static class: java.lang.Class<com.android.billingclient.api.Purchase>;
          public getOrderId(): string;
          public getPurchaseState(): number;
          public getSkus(): java.util.ArrayList<string>;
          public getPackageName(): string;
          public isAcknowledged(): boolean;
          public getQuantity(): number;
          public getPurchaseToken(): string;
          public constructor(param0: string, param1: string);
          public equals(param0: any): boolean;
          public toString(): string;
          public getSignature(): string;
          public getPurchaseTime(): number;
          public getOriginalJson(): string;
          public getDeveloperPayload(): string;
          public isAutoRenewing(): boolean;
          public hashCode(): number;
          public getAccountIdentifiers(): com.android.billingclient.api.AccountIdentifiers;
        }
        export module Purchase {
          export class PurchaseState {
            public static class: java.lang.Class<com.android.billingclient.api.Purchase.PurchaseState>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.Purchase$PurchaseState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static PENDING: number;
            public static PURCHASED: number;
            public static UNSPECIFIED_STATE: number;
          }
          export class PurchasesResult {
            public static class: java.lang.Class<com.android.billingclient.api.Purchase.PurchasesResult>;
            public constructor(
              param0: com.android.billingclient.api.BillingResult,
              param1: java.util.List<com.android.billingclient.api.Purchase>,
            );
            public getResponseCode(): number;
            public getPurchasesList(): java.util.List<com.android.billingclient.api.Purchase>;
            public getBillingResult(): com.android.billingclient.api.BillingResult;
          }
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class PurchaseHistoryRecord {
          public static class: java.lang.Class<com.android.billingclient.api.PurchaseHistoryRecord>;
          public constructor(param0: string, param1: string);
          public equals(param0: any): boolean;
          public toString(): string;
          public getSignature(): string;
          public getSkus(): java.util.ArrayList<string>;
          public getPurchaseTime(): number;
          public getOriginalJson(): string;
          public getDeveloperPayload(): string;
          public hashCode(): number;
          public getQuantity(): number;
          public getPurchaseToken(): string;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class PurchaseHistoryResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.PurchaseHistoryResponseListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.PurchaseHistoryResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onPurchaseHistoryResponse(
              param0: com.android.billingclient.api.BillingResult,
              param1: java.util.List<com.android.billingclient.api.PurchaseHistoryRecord>,
            ): void;
          });
          public constructor();
          public onPurchaseHistoryResponse(
            param0: com.android.billingclient.api.BillingResult,
            param1: java.util.List<com.android.billingclient.api.PurchaseHistoryRecord>,
          ): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class PurchasesResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.PurchasesResponseListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.PurchasesResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onQueryPurchasesResponse(
              param0: com.android.billingclient.api.BillingResult,
              param1: java.util.List<com.android.billingclient.api.Purchase>,
            ): void;
          });
          public constructor();
          public onQueryPurchasesResponse(
            param0: com.android.billingclient.api.BillingResult,
            param1: java.util.List<com.android.billingclient.api.Purchase>,
          ): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class PurchasesUpdatedListener {
          public static class: java.lang.Class<com.android.billingclient.api.PurchasesUpdatedListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.PurchasesUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onPurchasesUpdated(
              param0: com.android.billingclient.api.BillingResult,
              param1: java.util.List<com.android.billingclient.api.Purchase>,
            ): void;
          });
          public constructor();
          public onPurchasesUpdated(
            param0: com.android.billingclient.api.BillingResult,
            param1: java.util.List<com.android.billingclient.api.Purchase>,
          ): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class SkuDetails {
          public static class: java.lang.Class<com.android.billingclient.api.SkuDetails>;
          public getTitle(): string;
          public constructor(param0: string);
          public getPriceCurrencyCode(): string;
          public getIntroductoryPriceCycles(): number;
          public equals(param0: any): boolean;
          public toString(): string;
          public getIntroductoryPrice(): string;
          public getSubscriptionPeriod(): string;
          public getPriceAmountMicros(): number;
          public getOriginalJson(): string;
          public getIntroductoryPricePeriod(): string;
          public getSku(): string;
          public getIntroductoryPriceAmountMicros(): number;
          public getOriginalPriceAmountMicros(): number;
          public hashCode(): number;
          public getDescription(): string;
          public getType(): string;
          public getIconUrl(): string;
          public getOriginalPrice(): string;
          public getPrice(): string;
          public getFreeTrialPeriod(): string;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class SkuDetailsParams {
          public static class: java.lang.Class<com.android.billingclient.api.SkuDetailsParams>;
          public getSkusList(): java.util.List<string>;
          public constructor();
          public static newBuilder(): com.android.billingclient.api.SkuDetailsParams.Builder;
          public getSkuType(): string;
        }
        export module SkuDetailsParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.SkuDetailsParams.Builder>;
            public setType(param0: string): com.android.billingclient.api.SkuDetailsParams.Builder;
            public setSkusList(param0: java.util.List<string>): com.android.billingclient.api.SkuDetailsParams.Builder;
            public build(): com.android.billingclient.api.SkuDetailsParams;
          }
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class SkuDetailsResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.SkuDetailsResponseListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.SkuDetailsResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onSkuDetailsResponse(
              param0: com.android.billingclient.api.BillingResult,
              param1: java.util.List<com.android.billingclient.api.SkuDetails>,
            ): void;
          });
          public constructor();
          public onSkuDetailsResponse(
            param0: com.android.billingclient.api.BillingResult,
            param1: java.util.List<com.android.billingclient.api.SkuDetails>,
          ): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zza {
          public static class: java.lang.Class<com.android.billingclient.api.zza>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzaa extends java.util.concurrent.Callable<java.lang.Void> {
          public static class: java.lang.Class<com.android.billingclient.api.zzaa>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzab extends java.util.concurrent.Callable<java.lang.Void> {
          public static class: java.lang.Class<com.android.billingclient.api.zzab>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzac {
          public static class: java.lang.Class<com.android.billingclient.api.zzac>;
          public newThread(param0: java.lang.Runnable): java.lang.Thread;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzad {
          public static class: java.lang.Class<com.android.billingclient.api.zzad>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzae {
          public static class: java.lang.Class<com.android.billingclient.api.zzae>;
          public call(): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzaf {
          public static class: java.lang.Class<com.android.billingclient.api.zzaf>;
          public onServiceConnected(
            param0: globalAndroid.content.ComponentName,
            param1: globalAndroid.os.IBinder,
          ): void;
          public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzag {
          public static class: java.lang.Class<com.android.billingclient.api.zzag>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzah
          implements
            com.android.billingclient.api.AcknowledgePurchaseResponseListener,
            com.android.billingclient.api.BillingClientStateListener,
            com.android.billingclient.api.ConsumeResponseListener,
            com.android.billingclient.api.PriceChangeConfirmationListener,
            com.android.billingclient.api.PurchaseHistoryResponseListener,
            com.android.billingclient.api.PurchasesResponseListener,
            com.android.billingclient.api.PurchasesUpdatedListener,
            com.android.billingclient.api.SkuDetailsResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.zzah>;
          public onBillingSetupFinished(param0: com.android.billingclient.api.BillingResult): void;
          public onQueryPurchasesResponse(
            param0: com.android.billingclient.api.BillingResult,
            param1: java.util.List<com.android.billingclient.api.Purchase>,
          ): void;
          public static nativeOnAcknowledgePurchaseResponse(param0: number, param1: string, param2: number): void;
          public static nativeOnPurchaseHistoryResponse(
            param0: number,
            param1: string,
            param2: native.Array<com.android.billingclient.api.PurchaseHistoryRecord>,
            param3: number,
          ): void;
          public onSkuDetailsResponse(
            param0: com.android.billingclient.api.BillingResult,
            param1: java.util.List<com.android.billingclient.api.SkuDetails>,
          ): void;
          public static nativeOnBillingSetupFinished(param0: number, param1: string, param2: number): void;
          public static nativeOnPriceChangeConfirmationResult(param0: number, param1: string, param2: number): void;
          public static nativeOnPurchasesUpdated(
            param0: number,
            param1: string,
            param2: native.Array<com.android.billingclient.api.Purchase>,
          ): void;
          public onConsumeResponse(param0: com.android.billingclient.api.BillingResult, param1: string): void;
          public static nativeOnConsumePurchaseResponse(
            param0: number,
            param1: string,
            param2: string,
            param3: number,
          ): void;
          public static nativeOnBillingServiceDisconnected(): void;
          public static nativeOnSkuDetailsResponse(
            param0: number,
            param1: string,
            param2: native.Array<com.android.billingclient.api.SkuDetails>,
            param3: number,
          ): void;
          public onPriceChangeConfirmationResult(param0: com.android.billingclient.api.BillingResult): void;
          public onPurchasesUpdated(
            param0: com.android.billingclient.api.BillingResult,
            param1: java.util.List<com.android.billingclient.api.Purchase>,
          ): void;
          public static nativeOnQueryPurchasesResponse(
            param0: number,
            param1: string,
            param2: native.Array<com.android.billingclient.api.Purchase>,
            param3: number,
          ): void;
          public onBillingServiceDisconnected(): void;
          public onAcknowledgePurchaseResponse(param0: com.android.billingclient.api.BillingResult): void;
          public onPurchaseHistoryResponse(
            param0: com.android.billingclient.api.BillingResult,
            param1: java.util.List<com.android.billingclient.api.PurchaseHistoryRecord>,
          ): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzai {
          public static class: java.lang.Class<com.android.billingclient.api.zzai>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzaj {
          public static class: java.lang.Class<com.android.billingclient.api.zzaj>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzak {
          public static class: java.lang.Class<com.android.billingclient.api.zzak>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzal {
          public static class: java.lang.Class<com.android.billingclient.api.zzal>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzam {
          public static class: java.lang.Class<com.android.billingclient.api.zzam>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzan {
          public static class: java.lang.Class<com.android.billingclient.api.zzan>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzao {
          public static class: java.lang.Class<com.android.billingclient.api.zzao>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzap {
          public static class: java.lang.Class<com.android.billingclient.api.zzap>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzaq {
          public static class: java.lang.Class<com.android.billingclient.api.zzaq>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzb {
          public static class: java.lang.Class<com.android.billingclient.api.zzb>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzc {
          public static class: java.lang.Class<com.android.billingclient.api.zzc>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzd {
          public static class: java.lang.Class<com.android.billingclient.api.zzd>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zze {
          public static class: java.lang.Class<com.android.billingclient.api.zze>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzf {
          public static class: java.lang.Class<com.android.billingclient.api.zzf>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzg {
          public static class: java.lang.Class<com.android.billingclient.api.zzg>;
          public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzh {
          public static class: java.lang.Class<com.android.billingclient.api.zzh>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzi {
          public static class: java.lang.Class<com.android.billingclient.api.zzi>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzj {
          public static class: java.lang.Class<com.android.billingclient.api.zzj>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzk {
          public static class: java.lang.Class<com.android.billingclient.api.zzk>;
          public call(): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzl {
          public static class: java.lang.Class<com.android.billingclient.api.zzl>;
          public call(): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzm {
          public static class: java.lang.Class<com.android.billingclient.api.zzm>;
          public call(): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzn {
          public static class: java.lang.Class<com.android.billingclient.api.zzn>;
          public call(): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzo {
          public static class: java.lang.Class<com.android.billingclient.api.zzo>;
          public call(): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzp {
          public static class: java.lang.Class<com.android.billingclient.api.zzp>;
          public call(): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzq {
          public static class: java.lang.Class<com.android.billingclient.api.zzq>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzr {
          public static class: java.lang.Class<com.android.billingclient.api.zzr>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzs {
          public static class: java.lang.Class<com.android.billingclient.api.zzs>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzt {
          public static class: java.lang.Class<com.android.billingclient.api.zzt>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzu {
          public static class: java.lang.Class<com.android.billingclient.api.zzu>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzv {
          public static class: java.lang.Class<com.android.billingclient.api.zzv>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzw {
          public static class: java.lang.Class<com.android.billingclient.api.zzw>;
          public run(): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzx {
          public static class: java.lang.Class<com.android.billingclient.api.zzx>;
          public call(): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzy {
          public static class: java.lang.Class<com.android.billingclient.api.zzy>;
          public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzz extends java.util.concurrent.Callable<com.android.billingclient.api.Purchase.PurchasesResult> {
          public static class: java.lang.Class<com.android.billingclient.api.zzz>;
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zza>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzb extends com.google.android.gms.internal.play_billing.zze
              implements com.google.android.gms.internal.play_billing.zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export abstract class zzc extends com.google.android.gms.internal.play_billing.zzf
              implements com.google.android.gms.internal.play_billing.zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzd>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(param0: number, param1: string, param2: string): number;
                zzb(param0: number, param1: string, param2: string): number;
                zzc(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle): number;
                zzd(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: globalAndroid.os.Bundle,
                ): globalAndroid.os.Bundle;
                zze(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: globalAndroid.os.Bundle,
                ): globalAndroid.os.Bundle;
                zzf(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: string,
                  param4: string,
                ): globalAndroid.os.Bundle;
                zzg(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: string,
                  param4: string,
                  param5: globalAndroid.os.Bundle,
                ): globalAndroid.os.Bundle;
                zzh(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: string,
                  param4: globalAndroid.os.Bundle,
                ): globalAndroid.os.Bundle;
                zzi(param0: number, param1: string, param2: string, param3: string): globalAndroid.os.Bundle;
                zzj(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: string,
                  param4: globalAndroid.os.Bundle,
                ): globalAndroid.os.Bundle;
                zzk(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: globalAndroid.os.Bundle,
                ): globalAndroid.os.Bundle;
                zzl(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: globalAndroid.os.Bundle,
                  param4: globalAndroid.os.Bundle,
                ): globalAndroid.os.Bundle;
                zzm(
                  param0: number,
                  param1: string,
                  param2: string,
                  param3: string,
                  param4: globalAndroid.os.Bundle,
                ): globalAndroid.os.Bundle;
              });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zze {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zze>;
              public constructor(param0: globalAndroid.os.IBinder, param1: string);
              public asBinder(): globalAndroid.os.IBinder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzf {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzf>;
              public asBinder(): globalAndroid.os.IBinder;
              public onTransact(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number,
              ): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzg {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzh {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzi extends com.google.android.gms.internal.play_billing.zzh {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzj {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzk {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export abstract class zzl<E> extends java.lang
              .Object /* com.google.android.gms.internal.play_billing.zzs<any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzl<any>>;
              public constructor();
              public previousIndex(): number;
              public previous(): any;
              public constructor(param0: number, param1: number);
              public nextIndex(): number;
              public hasNext(): boolean;
              public hasPrevious(): boolean;
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export abstract class zzm<E> extends java.util.AbstractCollection<any> implements java.io.Serializable {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzm<any>>;
              /** @deprecated */
              public addAll(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public add(param0: any): boolean;
              /** @deprecated */
              public remove(param0: any): boolean;
              /** @deprecated */
              public clear(): void;
              public toArray(param0: native.Array<any>): native.Array<any>;
              public toArray(): native.Array<any>;
              /** @deprecated */
              public retainAll(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public removeAll(param0: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzn<E> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzl<any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzn<any>>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzo extends com.google.android.gms.internal.play_billing.zzp<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzo>;
              public size(): number;
              public get(param0: number): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export abstract class zzp<E> extends java.lang
              .Object /* com.google.android.gms.internal.play_billing.zzm<any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzp<any>>;
              public contains(param0: any): boolean;
              /** @deprecated */
              public addAll(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public add(param0: any): boolean;
              public hashCode(): number;
              public lastIndexOf(param0: any): number;
              /** @deprecated */
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
              /** @deprecated */
              public remove(param0: any): boolean;
              /** @deprecated */
              public remove(param0: number): any;
              public indexOf(param0: any): number;
              /** @deprecated */
              public add(param0: number, param1: any): void;
              public equals(param0: any): boolean;
              /** @deprecated */
              public set(param0: number, param1: any): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export class zzq<E> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzp<any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzq<any>>;
              public size(): number;
              public get(param0: number): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export abstract class zzr<E> extends java.util.Iterator<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzr<any>>;
              public constructor();
              /** @deprecated */
              public remove(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export abstract class zzs<E>
              extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzr<any>*/
              implements java.util.ListIterator<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzs<any>>;
              public constructor();
              /** @deprecated */
              public add(param0: any): void;
              /** @deprecated */
              public set(param0: any): void;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.google.android.gms.internal.play_billing.zzl:1
//com.google.android.gms.internal.play_billing.zzm:1
//com.google.android.gms.internal.play_billing.zzn:1
//com.google.android.gms.internal.play_billing.zzp:1
//com.google.android.gms.internal.play_billing.zzq:1
//com.google.android.gms.internal.play_billing.zzr:1
//com.google.android.gms.internal.play_billing.zzs:1
