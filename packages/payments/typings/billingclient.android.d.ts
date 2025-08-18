declare module com {
  export module android {
    export module billingclient {
      export class BuildConfig {
        public static class: java.lang.Class<com.android.billingclient.BuildConfig>;
        public static APPLICATION_ID: string = 'com.android.billingclient';
        public static VERSION_NAME: string = '8.0.0';
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
            public setPurchaseToken(purchaseToken: string): com.android.billingclient.api.AcknowledgePurchaseParams.Builder;
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
          public constructor(implementation: { onAcknowledgePurchaseResponse(param0: com.android.billingclient.api.BillingResult): void });
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
        export class AlternativeBillingOnlyAvailabilityListener {
          public static class: java.lang.Class<com.android.billingclient.api.AlternativeBillingOnlyAvailabilityListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.AlternativeBillingOnlyAvailabilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onAlternativeBillingOnlyAvailabilityResponse(param0: com.android.billingclient.api.BillingResult): void });
          public constructor();
          public onAlternativeBillingOnlyAvailabilityResponse(param0: com.android.billingclient.api.BillingResult): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class AlternativeBillingOnlyInformationDialogListener {
          public static class: java.lang.Class<com.android.billingclient.api.AlternativeBillingOnlyInformationDialogListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.AlternativeBillingOnlyInformationDialogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onAlternativeBillingOnlyInformationDialogResponse(param0: com.android.billingclient.api.BillingResult): void });
          public constructor();
          public onAlternativeBillingOnlyInformationDialogResponse(param0: com.android.billingclient.api.BillingResult): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class AlternativeBillingOnlyReportingDetails {
          public static class: java.lang.Class<com.android.billingclient.api.AlternativeBillingOnlyReportingDetails>;
          public getExternalTransactionToken(): string;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class AlternativeBillingOnlyReportingDetailsListener {
          public static class: java.lang.Class<com.android.billingclient.api.AlternativeBillingOnlyReportingDetailsListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.AlternativeBillingOnlyReportingDetailsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onAlternativeBillingOnlyTokenResponse(param0: com.android.billingclient.api.BillingResult, param1: com.android.billingclient.api.AlternativeBillingOnlyReportingDetails): void });
          public constructor();
          public onAlternativeBillingOnlyTokenResponse(param0: com.android.billingclient.api.BillingResult, param1: com.android.billingclient.api.AlternativeBillingOnlyReportingDetails): void;
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
          public launchBillingFlow(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.BillingFlowParams): com.android.billingclient.api.BillingResult;
          public endConnection(): void;
          public acknowledgePurchase(param0: com.android.billingclient.api.AcknowledgePurchaseParams, param1: com.android.billingclient.api.AcknowledgePurchaseResponseListener): void;
          public isExternalOfferAvailableAsync(param0: com.android.billingclient.api.ExternalOfferAvailabilityListener): void;
          public showInAppMessages(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.InAppMessageParams, param2: com.android.billingclient.api.InAppMessageResponseListener): com.android.billingclient.api.BillingResult;
          public showAlternativeBillingOnlyInformationDialog(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.AlternativeBillingOnlyInformationDialogListener): com.android.billingclient.api.BillingResult;
          public createAlternativeBillingOnlyReportingDetailsAsync(param0: com.android.billingclient.api.AlternativeBillingOnlyReportingDetailsListener): void;
          public static newBuilder(context: globalAndroid.content.Context): com.android.billingclient.api.BillingClient.Builder;
          public showExternalOfferInformationDialog(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.ExternalOfferInformationDialogListener): com.android.billingclient.api.BillingResult;
          public getConnectionState(): number;
          public isFeatureSupported(param0: string): com.android.billingclient.api.BillingResult;
          public startConnection(param0: com.android.billingclient.api.BillingClientStateListener): void;
          public constructor();
          public getBillingConfigAsync(param0: com.android.billingclient.api.GetBillingConfigParams, param1: com.android.billingclient.api.BillingConfigResponseListener): void;
          public queryPurchasesAsync(param0: com.android.billingclient.api.QueryPurchasesParams, param1: com.android.billingclient.api.PurchasesResponseListener): void;
          public queryProductDetailsAsync(param0: com.android.billingclient.api.QueryProductDetailsParams, param1: com.android.billingclient.api.ProductDetailsResponseListener): void;
          public isAlternativeBillingOnlyAvailableAsync(param0: com.android.billingclient.api.AlternativeBillingOnlyAvailabilityListener): void;
          public createExternalOfferReportingDetailsAsync(param0: com.android.billingclient.api.ExternalOfferReportingDetailsListener): void;
          public consumeAsync(param0: com.android.billingclient.api.ConsumeParams, param1: com.android.billingclient.api.ConsumeResponseListener): void;
        }
        export module BillingClient {
          export class BillingResponseCode {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.BillingResponseCode>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$BillingResponseCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static ITEM_UNAVAILABLE: number = 4;
            public static NETWORK_ERROR: number = 12;
            public static SERVICE_UNAVAILABLE: number = 2;
            public static FEATURE_NOT_SUPPORTED: number = -2;
            public static ITEM_NOT_OWNED: number = 8;
            public static DEVELOPER_ERROR: number = 5;
            public static ITEM_ALREADY_OWNED: number = 7;
            public static USER_CANCELED: number = 1;
            public static ERROR: number = 6;
            public static SERVICE_TIMEOUT: number = -3;
            public static OK: number = 0;
            public static BILLING_UNAVAILABLE: number = 3;
            public static SERVICE_DISCONNECTED: number = -1;
          }
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.Builder>;
            public build(): com.android.billingclient.api.BillingClient;
            public enableExternalOffer(): com.android.billingclient.api.BillingClient.Builder;
            public enableUserChoiceBilling(userChoiceBillingListener: com.android.billingclient.api.UserChoiceBillingListener): com.android.billingclient.api.BillingClient.Builder;
            public enableAlternativeBillingOnly(): com.android.billingclient.api.BillingClient.Builder;
            public enablePendingPurchases(pendingPurchasesParams: com.android.billingclient.api.PendingPurchasesParams): com.android.billingclient.api.BillingClient.Builder;
            public setListener(listener: com.android.billingclient.api.PurchasesUpdatedListener): com.android.billingclient.api.BillingClient.Builder;
            public enableAutoServiceReconnection(): com.android.billingclient.api.BillingClient.Builder;
          }
          export class ConnectionState {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.ConnectionState>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$ConnectionState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static CONNECTED: number = 2;
            public static DISCONNECTED: number = 0;
            public static CLOSED: number = 3;
            public static CONNECTING: number = 1;
          }
          export class FeatureType {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.FeatureType>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$FeatureType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static EXTERNAL_OFFER: string = 'kkk';
            public static SUBSCRIPTIONS_UPDATE: string = 'subscriptionsUpdate';
            public static PRICE_CHANGE_CONFIRMATION: string = 'priceChangeConfirmation';
            public static BILLING_CONFIG: string = 'ggg';
            public static ALTERNATIVE_BILLING_ONLY: string = 'jjj';
            public static IN_APP_MESSAGING: string = 'bbb';
            public static PRODUCT_DETAILS: string = 'fff';
            public static SUBSCRIPTIONS: string = 'subscriptions';
          }
          export class OnPurchasesUpdatedSubResponseCode {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.OnPurchasesUpdatedSubResponseCode>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$OnPurchasesUpdatedSubResponseCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static USER_INELIGIBLE: number = 2;
            public static NO_APPLICABLE_SUB_RESPONSE_CODE: number = 0;
            public static PAYMENT_DECLINED_DUE_TO_INSUFFICIENT_FUNDS: number = 1;
          }
          export class ProductType {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.ProductType>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$ProductType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static SUBS: string = 'subs';
            public static INAPP: string = 'inapp';
          }
          export class SkuType {
            public static class: java.lang.Class<com.android.billingclient.api.BillingClient.SkuType>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.BillingClient$SkuType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static SUBS: string = 'subs';
            public static INAPP: string = 'inapp';
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
          public createExternalOfferReportingDetailsAsync(listener: com.android.billingclient.api.ExternalOfferReportingDetailsListener): void;
          public launchBillingFlow(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.BillingFlowParams): com.android.billingclient.api.BillingResult;
          public showAlternativeBillingOnlyInformationDialog(activity: globalAndroid.app.Activity, listener: com.android.billingclient.api.AlternativeBillingOnlyInformationDialogListener): com.android.billingclient.api.BillingResult;
          public endConnection(): void;
          public acknowledgePurchase(param0: com.android.billingclient.api.AcknowledgePurchaseParams, param1: com.android.billingclient.api.AcknowledgePurchaseResponseListener): void;
          public isExternalOfferAvailableAsync(listener: com.android.billingclient.api.ExternalOfferAvailabilityListener): void;
          public showInAppMessages(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.InAppMessageParams, param2: com.android.billingclient.api.InAppMessageResponseListener): com.android.billingclient.api.BillingResult;
          public isAlternativeBillingOnlyAvailableAsync(listener: com.android.billingclient.api.AlternativeBillingOnlyAvailabilityListener): void;
          public getConnectionState(): number;
          public isFeatureSupported(param0: string): com.android.billingclient.api.BillingResult;
          public startConnection(param0: com.android.billingclient.api.BillingClientStateListener): void;
          public queryPurchasesAsync(param0: com.android.billingclient.api.QueryPurchasesParams, param1: com.android.billingclient.api.PurchasesResponseListener): void;
          public queryProductDetailsAsync(param0: com.android.billingclient.api.QueryProductDetailsParams, param1: com.android.billingclient.api.ProductDetailsResponseListener): void;
          public showExternalOfferInformationDialog(activity: globalAndroid.app.Activity, listener: com.android.billingclient.api.ExternalOfferInformationDialogListener): com.android.billingclient.api.BillingResult;
          public consumeAsync(param0: com.android.billingclient.api.ConsumeParams, param1: com.android.billingclient.api.ConsumeResponseListener): void;
          public createAlternativeBillingOnlyReportingDetailsAsync(listener: com.android.billingclient.api.AlternativeBillingOnlyReportingDetailsListener): void;
          public getBillingConfigAsync(listener: com.android.billingclient.api.GetBillingConfigParams, param1: com.android.billingclient.api.BillingConfigResponseListener): void;
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
          public constructor(implementation: { onBillingServiceDisconnected(): void; onBillingSetupFinished(param0: com.android.billingclient.api.BillingResult): void });
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
        export class BillingConfig {
          public static class: java.lang.Class<com.android.billingclient.api.BillingConfig>;
          public getCountryCode(): string;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class BillingConfigResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.BillingConfigResponseListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.BillingConfigResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onBillingConfigResponse(param0: com.android.billingclient.api.BillingResult, param1: com.android.billingclient.api.BillingConfig): void });
          public constructor();
          public onBillingConfigResponse(param0: com.android.billingclient.api.BillingResult, param1: com.android.billingclient.api.BillingConfig): void;
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
          public static newBuilder(): com.android.billingclient.api.BillingFlowParams.Builder;
        }
        export module BillingFlowParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.Builder>;
            public setIsOfferPersonalized(isOfferPersonalized: boolean): com.android.billingclient.api.BillingFlowParams.Builder;
            public setProductDetailsParamsList(productDetailsParamsList: java.util.List<com.android.billingclient.api.BillingFlowParams.ProductDetailsParams>): com.android.billingclient.api.BillingFlowParams.Builder;
            public setObfuscatedProfileId(obfuscatedProfileId: string): com.android.billingclient.api.BillingFlowParams.Builder;
            public setSubscriptionUpdateParams(subscriptionUpdateParams: com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams): com.android.billingclient.api.BillingFlowParams.Builder;
            public setObfuscatedAccountId(obfuscatedAccountid: string): com.android.billingclient.api.BillingFlowParams.Builder;
            public build(): com.android.billingclient.api.BillingFlowParams;
            /** @deprecated */
            public setSkuDetails(skuDetails: com.android.billingclient.api.SkuDetails): com.android.billingclient.api.BillingFlowParams.Builder;
          }
          export class ProductDetailsParams {
            public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.ProductDetailsParams>;
            public static newBuilder(): com.android.billingclient.api.BillingFlowParams.ProductDetailsParams.Builder;
          }
          export module ProductDetailsParams {
            export class Builder {
              public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.ProductDetailsParams.Builder>;
              public build(): com.android.billingclient.api.BillingFlowParams.ProductDetailsParams;
              public setProductDetails(productDetails: com.android.billingclient.api.ProductDetails): com.android.billingclient.api.BillingFlowParams.ProductDetailsParams.Builder;
              public setOfferToken(offerToken: string): com.android.billingclient.api.BillingFlowParams.ProductDetailsParams.Builder;
            }
          }
          export class SubscriptionUpdateParams {
            public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams>;
            public static newBuilder(): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
          }
          export module SubscriptionUpdateParams {
            export class Builder {
              public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder>;
              public build(): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams;
              public setOldPurchaseToken(purchaseToken: string): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
              public setOriginalExternalTransactionId(externalTransactionId: string): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
              public setSubscriptionReplacementMode(subscriptionReplacementMode: number): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
            }
            export class ReplacementMode {
              public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.ReplacementMode>;
              /**
               * Constructs a new instance of the com.android.billingclient.api.BillingFlowParams$SubscriptionUpdateParams$ReplacementMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
              public static WITH_TIME_PRORATION: number = 1;
              public static WITHOUT_PRORATION: number = 3;
              public static CHARGE_FULL_PRICE: number = 5;
              public static DEFERRED: number = 6;
              public static UNKNOWN_REPLACEMENT_MODE: number = 0;
              public static CHARGE_PRORATED_PRICE: number = 2;
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
          public toString(): string;
          public getResponseCode(): number;
          public constructor();
          public static newBuilder(): com.android.billingclient.api.BillingResult.Builder;
          public getOnPurchasesUpdatedSubResponseCode(): number;
          public getDebugMessage(): string;
        }
        export module BillingResult {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.BillingResult.Builder>;
            public setDebugMessage(debugMessage: string): com.android.billingclient.api.BillingResult.Builder;
            public build(): com.android.billingclient.api.BillingResult;
            public setOnPurchasesUpdatedSubResponseCode(onPurchasesUpdatedSubResponseCode: number): com.android.billingclient.api.BillingResult.Builder;
            public setResponseCode(responseCode: number): com.android.billingclient.api.BillingResult.Builder;
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
            public setPurchaseToken(purchaseToken: string): com.android.billingclient.api.ConsumeParams.Builder;
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
          public constructor(implementation: { onConsumeResponse(param0: com.android.billingclient.api.BillingResult, param1: string): void });
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
        export class ExternalOfferAvailabilityListener {
          public static class: java.lang.Class<com.android.billingclient.api.ExternalOfferAvailabilityListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.ExternalOfferAvailabilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onExternalOfferAvailabilityResponse(param0: com.android.billingclient.api.BillingResult): void });
          public constructor();
          public onExternalOfferAvailabilityResponse(param0: com.android.billingclient.api.BillingResult): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class ExternalOfferInformationDialogListener {
          public static class: java.lang.Class<com.android.billingclient.api.ExternalOfferInformationDialogListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.ExternalOfferInformationDialogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onExternalOfferInformationDialogResponse(param0: com.android.billingclient.api.BillingResult): void });
          public constructor();
          public onExternalOfferInformationDialogResponse(param0: com.android.billingclient.api.BillingResult): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class ExternalOfferReportingDetails {
          public static class: java.lang.Class<com.android.billingclient.api.ExternalOfferReportingDetails>;
          public getExternalTransactionToken(): string;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class ExternalOfferReportingDetailsListener {
          public static class: java.lang.Class<com.android.billingclient.api.ExternalOfferReportingDetailsListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.ExternalOfferReportingDetailsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onExternalOfferReportingDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: com.android.billingclient.api.ExternalOfferReportingDetails): void });
          public constructor();
          public onExternalOfferReportingDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: com.android.billingclient.api.ExternalOfferReportingDetails): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class GetBillingConfigParams {
          public static class: java.lang.Class<com.android.billingclient.api.GetBillingConfigParams>;
          public static newBuilder(): com.android.billingclient.api.GetBillingConfigParams.Builder;
        }
        export module GetBillingConfigParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.GetBillingConfigParams.Builder>;
            public build(): com.android.billingclient.api.GetBillingConfigParams;
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
        export class InAppMessageParams {
          public static class: java.lang.Class<com.android.billingclient.api.InAppMessageParams>;
          public static newBuilder(): com.android.billingclient.api.InAppMessageParams.Builder;
        }
        export module InAppMessageParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.InAppMessageParams.Builder>;
            public constructor();
            public addAllInAppMessageCategoriesToShow(): com.android.billingclient.api.InAppMessageParams.Builder;
            public addInAppMessageCategoryToShow(inAppMessageCategoryId: number): com.android.billingclient.api.InAppMessageParams.Builder;
            public build(): com.android.billingclient.api.InAppMessageParams;
          }
          export class InAppMessageCategoryId {
            public static class: java.lang.Class<com.android.billingclient.api.InAppMessageParams.InAppMessageCategoryId>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.InAppMessageParams$InAppMessageCategoryId interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static TRANSACTIONAL: number = 2;
            public static UNKNOWN_IN_APP_MESSAGE_CATEGORY_ID: number = 0;
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
        export class InAppMessageResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.InAppMessageResponseListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.InAppMessageResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onInAppMessageResponse(param0: com.android.billingclient.api.InAppMessageResult): void });
          public constructor();
          public onInAppMessageResponse(param0: com.android.billingclient.api.InAppMessageResult): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class InAppMessageResult {
          public static class: java.lang.Class<com.android.billingclient.api.InAppMessageResult>;
          public getResponseCode(): number;
          public constructor(param0: number, param1: string);
          public getPurchaseToken(): string;
        }
        export module InAppMessageResult {
          export class InAppMessageResponseCode {
            public static class: java.lang.Class<com.android.billingclient.api.InAppMessageResult.InAppMessageResponseCode>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.InAppMessageResult$InAppMessageResponseCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static NO_ACTION_NEEDED: number = 0;
            public static SUBSCRIPTION_STATUS_UPDATED: number = 1;
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
        export class PendingPurchasesParams {
          public static class: java.lang.Class<com.android.billingclient.api.PendingPurchasesParams>;
          public static newBuilder(): com.android.billingclient.api.PendingPurchasesParams.Builder;
        }
        export module PendingPurchasesParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.PendingPurchasesParams.Builder>;
            public enablePrepaidPlans(): com.android.billingclient.api.PendingPurchasesParams.Builder;
            public build(): com.android.billingclient.api.PendingPurchasesParams;
            public enableOneTimeProducts(): com.android.billingclient.api.PendingPurchasesParams.Builder;
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
        export class ProductDetails {
          public static class: java.lang.Class<com.android.billingclient.api.ProductDetails>;
          public getTitle(): string;
          public getProductId(): string;
          public toString(): string;
          public getName(): string;
          public getProductType(): string;
          public getSubscriptionOfferDetails(): java.util.List<com.android.billingclient.api.ProductDetails.SubscriptionOfferDetails>;
          public hashCode(): number;
          public getOneTimePurchaseOfferDetails(): com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails;
          public getDescription(): string;
          public equals(o: any): boolean;
          public getOneTimePurchaseOfferDetailsList(): java.util.List<com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails>;
        }
        export module ProductDetails {
          export class InstallmentPlanDetails {
            public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.InstallmentPlanDetails>;
            public getSubsequentInstallmentPlanCommitmentPaymentsCount(): number;
            public getInstallmentPlanCommitmentPaymentsCount(): number;
          }
          export class OneTimePurchaseOfferDetails {
            public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails>;
            public getOfferToken(): string;
            public getLimitedQuantityInfo(): com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.LimitedQuantityInfo;
            public getFormattedPrice(): string;
            public getPurchaseOptionId(): string;
            public getOfferId(): string;
            public getPriceCurrencyCode(): string;
            public getRentalDetails(): com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.RentalDetails;
            public getDiscountDisplayInfo(): com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.DiscountDisplayInfo;
            public getValidTimeWindow(): com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.ValidTimeWindow;
            public getFullPriceMicros(): java.lang.Long;
            public getOfferTags(): java.util.List<string>;
            public getPriceAmountMicros(): number;
          }
          export module OneTimePurchaseOfferDetails {
            export class DiscountDisplayInfo {
              public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.DiscountDisplayInfo>;
              public getDiscountAmount(): com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.DiscountDisplayInfo.DiscountAmount;
              public getPercentageDiscount(): java.lang.Integer;
            }
            export module DiscountDisplayInfo {
              export class DiscountAmount {
                public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.DiscountDisplayInfo.DiscountAmount>;
                public getDiscountAmountCurrencyCode(): string;
                public getDiscountAmountMicros(): number;
                public getFormattedDiscountAmount(): string;
              }
            }
            export class LimitedQuantityInfo {
              public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.LimitedQuantityInfo>;
              public getRemainingQuantity(): number;
              public getMaximumQuantity(): number;
            }
            export class RentalDetails {
              public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.RentalDetails>;
              public getRentalExpirationPeriod(): string;
              public getRentalPeriod(): string;
            }
            export class ValidTimeWindow {
              public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails.ValidTimeWindow>;
              public getEndTimeMillis(): java.lang.Long;
              public getStartTimeMillis(): java.lang.Long;
            }
          }
          export class PricingPhase {
            public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.PricingPhase>;
            public getFormattedPrice(): string;
            public getPriceCurrencyCode(): string;
            public getRecurrenceMode(): number;
            public getPriceAmountMicros(): number;
            public getBillingPeriod(): string;
            public getBillingCycleCount(): number;
          }
          export class PricingPhases {
            public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.PricingPhases>;
            public getPricingPhaseList(): java.util.List<com.android.billingclient.api.ProductDetails.PricingPhase>;
          }
          export class RecurrenceMode {
            public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.RecurrenceMode>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.ProductDetails$RecurrenceMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static FINITE_RECURRING: number = 2;
            public static NON_RECURRING: number = 3;
            public static INFINITE_RECURRING: number = 1;
          }
          export class SubscriptionOfferDetails {
            public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.SubscriptionOfferDetails>;
            public getOfferToken(): string;
            public getOfferId(): string;
            public getPricingPhases(): com.android.billingclient.api.ProductDetails.PricingPhases;
            public getOfferTags(): java.util.List<string>;
            public getInstallmentPlanDetails(): com.android.billingclient.api.ProductDetails.InstallmentPlanDetails;
            public getBasePlanId(): string;
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
        export class ProductDetailsResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.ProductDetailsResponseListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.ProductDetailsResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onProductDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: com.android.billingclient.api.QueryProductDetailsResult): void });
          public constructor();
          public onProductDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: com.android.billingclient.api.QueryProductDetailsResult): void;
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
          public constructor();
          public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
          public onDestroy(): void;
          public onActivityResult(requestCode: number, resultCode: number, data: globalAndroid.content.Intent): void;
          public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class ProxyBillingActivityV2 {
          public static class: java.lang.Class<com.android.billingclient.api.ProxyBillingActivityV2>;
          public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
          public onCreate(param0: globalAndroid.os.Bundle): void;
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
        export class Purchase {
          public static class: java.lang.Class<com.android.billingclient.api.Purchase>;
          public getOrderId(): string;
          /** @deprecated */
          public getSkus(): java.util.ArrayList<string>;
          public getPurchaseState(): number;
          public getPackageName(): string;
          public constructor(jsonPurchaseInfo: string, signature: string);
          public isAcknowledged(): boolean;
          public equals(o: any): boolean;
          public getQuantity(): number;
          public getPurchaseToken(): string;
          public toString(): string;
          public getSignature(): string;
          public getPurchaseTime(): number;
          public getOriginalJson(): string;
          public getDeveloperPayload(): string;
          public isAutoRenewing(): boolean;
          public hashCode(): number;
          public getPendingPurchaseUpdate(): com.android.billingclient.api.Purchase.PendingPurchaseUpdate;
          public getAccountIdentifiers(): com.android.billingclient.api.AccountIdentifiers;
          public getProducts(): java.util.List<string>;
        }
        export module Purchase {
          export class PendingPurchaseUpdate {
            public static class: java.lang.Class<com.android.billingclient.api.Purchase.PendingPurchaseUpdate>;
            public getPurchaseToken(): string;
            public getProducts(): java.util.List<string>;
          }
          export class PurchaseState {
            public static class: java.lang.Class<com.android.billingclient.api.Purchase.PurchaseState>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.Purchase$PurchaseState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static PENDING: number = 2;
            public static PURCHASED: number = 1;
            public static UNSPECIFIED_STATE: number = 0;
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
          public toString(): string;
          public getSignature(): string;
          /** @deprecated */
          public getSkus(): java.util.ArrayList<string>;
          public getPurchaseTime(): number;
          public getOriginalJson(): string;
          public constructor(jsonPurchaseInfo: string, signature: string);
          public getDeveloperPayload(): string;
          public hashCode(): number;
          public equals(o: any): boolean;
          public getQuantity(): number;
          public getPurchaseToken(): string;
          public getProducts(): java.util.List<string>;
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
          public constructor(implementation: { onPurchaseHistoryResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.PurchaseHistoryRecord>): void });
          public constructor();
          public onPurchaseHistoryResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.PurchaseHistoryRecord>): void;
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
          public constructor(implementation: { onQueryPurchasesResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.Purchase>): void });
          public constructor();
          public onQueryPurchasesResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.Purchase>): void;
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
          public constructor(implementation: { onPurchasesUpdated(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.Purchase>): void });
          public constructor();
          public onPurchasesUpdated(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.Purchase>): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class QueryProductDetailsParams {
          public static class: java.lang.Class<com.android.billingclient.api.QueryProductDetailsParams>;
          public static newBuilder(): com.android.billingclient.api.QueryProductDetailsParams.Builder;
        }
        export module QueryProductDetailsParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.QueryProductDetailsParams.Builder>;
            public setProductList(productList: java.util.List<com.android.billingclient.api.QueryProductDetailsParams.Product>): com.android.billingclient.api.QueryProductDetailsParams.Builder;
            public build(): com.android.billingclient.api.QueryProductDetailsParams;
          }
          export class Product {
            public static class: java.lang.Class<com.android.billingclient.api.QueryProductDetailsParams.Product>;
            public static newBuilder(): com.android.billingclient.api.QueryProductDetailsParams.Product.Builder;
          }
          export module Product {
            export class Builder {
              public static class: java.lang.Class<com.android.billingclient.api.QueryProductDetailsParams.Product.Builder>;
              public build(): com.android.billingclient.api.QueryProductDetailsParams.Product;
              public setProductType(productType: string): com.android.billingclient.api.QueryProductDetailsParams.Product.Builder;
              public setProductId(productId: string): com.android.billingclient.api.QueryProductDetailsParams.Product.Builder;
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
        export class QueryProductDetailsResult {
          public static class: java.lang.Class<com.android.billingclient.api.QueryProductDetailsResult>;
          public static create(productDetailsList: java.util.List<com.android.billingclient.api.ProductDetails>, unfetchedProductList: java.util.List<com.android.billingclient.api.UnfetchedProduct>): com.android.billingclient.api.QueryProductDetailsResult;
          public getUnfetchedProductList(): java.util.List<com.android.billingclient.api.UnfetchedProduct>;
          public getProductDetailsList(): java.util.List<com.android.billingclient.api.ProductDetails>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class QueryPurchaseHistoryParams {
          public static class: java.lang.Class<com.android.billingclient.api.QueryPurchaseHistoryParams>;
          public static newBuilder(): com.android.billingclient.api.QueryPurchaseHistoryParams.Builder;
        }
        export module QueryPurchaseHistoryParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.QueryPurchaseHistoryParams.Builder>;
            public build(): com.android.billingclient.api.QueryPurchaseHistoryParams;
            public setProductType(productType: string): com.android.billingclient.api.QueryPurchaseHistoryParams.Builder;
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
        export class QueryPurchasesParams {
          public static class: java.lang.Class<com.android.billingclient.api.QueryPurchasesParams>;
          public static newBuilder(): com.android.billingclient.api.QueryPurchasesParams.Builder;
        }
        export module QueryPurchasesParams {
          export class Builder {
            public static class: java.lang.Class<com.android.billingclient.api.QueryPurchasesParams.Builder>;
            public setProductType(productType: string): com.android.billingclient.api.QueryPurchasesParams.Builder;
            public build(): com.android.billingclient.api.QueryPurchasesParams;
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
        export class SkuDetails {
          public static class: java.lang.Class<com.android.billingclient.api.SkuDetails>;
          public getTitle(): string;
          public constructor(jsonSkuDetails: string);
          public getPriceCurrencyCode(): string;
          public equals(o: any): boolean;
          public getIntroductoryPriceCycles(): number;
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
            public setSkusList(skusList: java.util.List<string>): com.android.billingclient.api.SkuDetailsParams.Builder;
            public setType(type: string): com.android.billingclient.api.SkuDetailsParams.Builder;
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
          public constructor(implementation: { onSkuDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.SkuDetails>): void });
          public constructor();
          public onSkuDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.SkuDetails>): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class UnfetchedProduct {
          public static class: java.lang.Class<com.android.billingclient.api.UnfetchedProduct>;
          public getStatusCode(): number;
          public getProductId(): string;
          public toString(): string;
          public static fromJson(jsonString: string): com.android.billingclient.api.UnfetchedProduct;
          public getProductType(): string;
          public getSerializedDocid(): string;
          public hashCode(): number;
          public equals(o: any): boolean;
        }
        export module UnfetchedProduct {
          export class StatusCode {
            public static class: java.lang.Class<com.android.billingclient.api.UnfetchedProduct.StatusCode>;
            /**
             * Constructs a new instance of the com.android.billingclient.api.UnfetchedProduct$StatusCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static NO_ELIGIBLE_OFFER: number = 4;
            public static UNKNOWN: number = 0;
            public static PRODUCT_NOT_FOUND: number = 3;
            public static INVALID_PRODUCT_ID_FORMAT: number = 2;
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
        export class UserChoiceBillingListener {
          public static class: java.lang.Class<com.android.billingclient.api.UserChoiceBillingListener>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.UserChoiceBillingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { userSelectedAlternativeBilling(param0: com.android.billingclient.api.UserChoiceDetails): void });
          public constructor();
          public userSelectedAlternativeBilling(param0: com.android.billingclient.api.UserChoiceDetails): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class UserChoiceDetails {
          public static class: java.lang.Class<com.android.billingclient.api.UserChoiceDetails>;
          public getExternalTransactionToken(): string;
          public getOriginalExternalTransactionId(): string;
          public getProducts(): java.util.List<com.android.billingclient.api.UserChoiceDetails.Product>;
        }
        export module UserChoiceDetails {
          export class Product {
            public static class: java.lang.Class<com.android.billingclient.api.UserChoiceDetails.Product>;
            public getOfferToken(): string;
            public getType(): string;
            public hashCode(): number;
            public getId(): string;
            public equals(o: any): boolean;
            public toString(): string;
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
        export class zzaa {
          public static class: java.lang.Class<com.android.billingclient.api.zzaa>;
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
        export class zzab {
          public static class: java.lang.Class<com.android.billingclient.api.zzab>;
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
        export class zzac {
          public static class: java.lang.Class<com.android.billingclient.api.zzac>;
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
        export class zzad {
          public static class: java.lang.Class<com.android.billingclient.api.zzad>;
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
        export class zzae {
          public static class: java.lang.Class<com.android.billingclient.api.zzae>;
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
        export class zzaf {
          public static class: java.lang.Class<com.android.billingclient.api.zzaf>;
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
        export class zzag {
          public static class: java.lang.Class<com.android.billingclient.api.zzag>;
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
        export class zzah {
          public static class: java.lang.Class<com.android.billingclient.api.zzah>;
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
        export class zzai {
          public static class: java.lang.Class<com.android.billingclient.api.zzai>;
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
        export class zzaj {
          public static class: java.lang.Class<com.android.billingclient.api.zzaj>;
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
        export class zzak {
          public static class: java.lang.Class<com.android.billingclient.api.zzak>;
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
        export class zzal {
          public static class: java.lang.Class<com.android.billingclient.api.zzal>;
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
        export class zzam {
          public static class: java.lang.Class<com.android.billingclient.api.zzam>;
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
        export class zzan {
          public static class: java.lang.Class<com.android.billingclient.api.zzan>;
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
        export class zzao {
          public static class: java.lang.Class<com.android.billingclient.api.zzao>;
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
        export class zzap {
          public static class: java.lang.Class<com.android.billingclient.api.zzap>;
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
        export class zzaq {
          public static class: java.lang.Class<com.android.billingclient.api.zzaq>;
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
        export class zzar {
          public static class: java.lang.Class<com.android.billingclient.api.zzar>;
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
        export class zzas {
          public static class: java.lang.Class<com.android.billingclient.api.zzas>;
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
        export class zzat {
          public static class: java.lang.Class<com.android.billingclient.api.zzat>;
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
        export class zzau {
          public static class: java.lang.Class<com.android.billingclient.api.zzau>;
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
        export class zzav {
          public static class: java.lang.Class<com.android.billingclient.api.zzav>;
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
        export class zzaw {
          public static class: java.lang.Class<com.android.billingclient.api.zzaw>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzax {
          public static class: java.lang.Class<com.android.billingclient.api.zzax>;
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
        export class zzay {
          public static class: java.lang.Class<com.android.billingclient.api.zzay>;
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
        export class zzaz {
          public static class: java.lang.Class<com.android.billingclient.api.zzaz>;
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
        export class zzb {
          public static class: java.lang.Class<com.android.billingclient.api.zzb>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { zza(): void });
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
        export class zzba {
          public static class: java.lang.Class<com.android.billingclient.api.zzba>;
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
        export class zzbb {
          public static class: java.lang.Class<com.android.billingclient.api.zzbb>;
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
        export class zzbc extends com.android.billingclient.api.BillingClientStateListener {
          public static class: java.lang.Class<com.android.billingclient.api.zzbc>;
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
        export class zzbd {
          public static class: java.lang.Class<com.android.billingclient.api.zzbd>;
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
        export class zzbe {
          public static class: java.lang.Class<com.android.billingclient.api.zzbe>;
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
        export class zzbf {
          public static class: java.lang.Class<com.android.billingclient.api.zzbf>;
          public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
          public onBindingDied(param0: globalAndroid.content.ComponentName): void;
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
        export class zzbg extends com.google.android.gms.internal.play_billing.zzw {
          public static class: java.lang.Class<com.android.billingclient.api.zzbg>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbh extends com.google.android.gms.internal.play_billing.zzy {
          public static class: java.lang.Class<com.android.billingclient.api.zzbh>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbi extends com.google.android.gms.internal.play_billing.zzaa {
          public static class: java.lang.Class<com.android.billingclient.api.zzbi>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbj extends com.google.android.gms.internal.play_billing.zzac {
          public static class: java.lang.Class<com.android.billingclient.api.zzbj>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbk extends com.google.android.gms.internal.play_billing.zzae {
          public static class: java.lang.Class<com.android.billingclient.api.zzbk>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbl extends com.google.android.gms.internal.play_billing.zzag {
          public static class: java.lang.Class<com.android.billingclient.api.zzbl>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbm extends com.google.android.gms.internal.play_billing.zzai {
          public static class: java.lang.Class<com.android.billingclient.api.zzbm>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbn extends com.google.android.gms.internal.play_billing.zzan {
          public static class: java.lang.Class<com.android.billingclient.api.zzbn>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbo {
          public static class: java.lang.Class<com.android.billingclient.api.zzbo>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbp {
          public static class: java.lang.Class<com.android.billingclient.api.zzbp>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbq implements com.android.billingclient.api.AcknowledgePurchaseResponseListener, com.android.billingclient.api.BillingClientStateListener, com.android.billingclient.api.ConsumeResponseListener, com.android.billingclient.api.PurchaseHistoryResponseListener, com.android.billingclient.api.PurchasesResponseListener, com.android.billingclient.api.PurchasesUpdatedListener, com.android.billingclient.api.SkuDetailsResponseListener {
          public static class: java.lang.Class<com.android.billingclient.api.zzbq>;
          public onBillingSetupFinished(param0: com.android.billingclient.api.BillingResult): void;
          public onQueryPurchasesResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.Purchase>): void;
          public static nativeOnAcknowledgePurchaseResponse(param0: number, param1: string, param2: number): void;
          public onSkuDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.SkuDetails>): void;
          public static nativeOnBillingSetupFinished(param0: number, param1: string, param2: number): void;
          public static nativeOnPriceChangeConfirmationResult(param0: number, param1: string, param2: number): void;
          public onConsumeResponse(param0: com.android.billingclient.api.BillingResult, param1: string): void;
          public static nativeOnPurchasesUpdated(param0: number, param1: string, param2: androidNative.Array<com.android.billingclient.api.Purchase>): void;
          public static nativeOnConsumePurchaseResponse(param0: number, param1: string, param2: string, param3: number): void;
          public static nativeOnQueryPurchasesResponse(param0: number, param1: string, param2: androidNative.Array<com.android.billingclient.api.Purchase>, param3: number): void;
          public static nativeOnBillingServiceDisconnected(): void;
          public static nativeOnSkuDetailsResponse(param0: number, param1: string, param2: androidNative.Array<com.android.billingclient.api.SkuDetails>, param3: number): void;
          public static nativeOnPurchaseHistoryResponse(param0: number, param1: string, param2: androidNative.Array<com.android.billingclient.api.PurchaseHistoryRecord>, param3: number): void;
          public onPurchasesUpdated(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.Purchase>): void;
          public onBillingServiceDisconnected(): void;
          public onAcknowledgePurchaseResponse(param0: com.android.billingclient.api.BillingResult): void;
          public onPurchaseHistoryResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.PurchaseHistoryRecord>): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbr {
          public static class: java.lang.Class<com.android.billingclient.api.zzbr>;
          public accept(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbs {
          public static class: java.lang.Class<com.android.billingclient.api.zzbs>;
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
        export class zzbt {
          public static class: java.lang.Class<com.android.billingclient.api.zzbt>;
          public accept(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbu {
          public static class: java.lang.Class<com.android.billingclient.api.zzbu>;
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
        export class zzbv extends com.google.android.gms.internal.play_billing.zzr {
          public static class: java.lang.Class<com.android.billingclient.api.zzbv>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbw {
          public static class: java.lang.Class<com.android.billingclient.api.zzbw>;
          public accept(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbx {
          public static class: java.lang.Class<com.android.billingclient.api.zzbx>;
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
        export class zzby {
          public static class: java.lang.Class<com.android.billingclient.api.zzby>;
          public accept(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzbz {
          public static class: java.lang.Class<com.android.billingclient.api.zzbz>;
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
        export class zzc {
          public static class: java.lang.Class<com.android.billingclient.api.zzc>;
          public equals(param0: any): boolean;
          public toString(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzca extends com.google.android.gms.internal.play_billing.zzcs {
          public static class: java.lang.Class<com.android.billingclient.api.zzca>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcb extends com.google.android.gms.internal.play_billing.zzav {
          public static class: java.lang.Class<com.android.billingclient.api.zzcb>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcc {
          public static class: java.lang.Class<com.android.billingclient.api.zzcc>;
          public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
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
        export class zzcd {
          public static class: java.lang.Class<com.android.billingclient.api.zzcd>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzce extends com.android.billingclient.api.BillingClientImpl {
          public static class: java.lang.Class<com.android.billingclient.api.zzce>;
          public launchBillingFlow(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.BillingFlowParams): com.android.billingclient.api.BillingResult;
          public endConnection(): void;
          public startConnection(param0: com.android.billingclient.api.BillingClientStateListener): void;
          public acknowledgePurchase(param0: com.android.billingclient.api.AcknowledgePurchaseParams, param1: com.android.billingclient.api.AcknowledgePurchaseResponseListener): void;
          public queryProductDetailsAsync(param0: com.android.billingclient.api.QueryProductDetailsParams, param1: com.android.billingclient.api.ProductDetailsResponseListener): void;
          public consumeAsync(param0: com.android.billingclient.api.ConsumeParams, param1: com.android.billingclient.api.ConsumeResponseListener): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcf {
          public static class: java.lang.Class<com.android.billingclient.api.zzcf>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcg {
          public static class: java.lang.Class<com.android.billingclient.api.zzcg>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzch {
          public static class: java.lang.Class<com.android.billingclient.api.zzch>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzch interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            '<clinit>'(): void;
            zza(param0: any /* com.google.android.gms.internal.play_billing.zzhx*/): void;
            zzb(param0: any /* com.google.android.gms.internal.play_billing.zzhx*/, param1: number): void;
            zzc(param0: any /* com.google.android.gms.internal.play_billing.zzhx*/, param1: number, param2: number): void;
            zzd(param0: any /* com.google.android.gms.internal.play_billing.zzhx*/, param1: number, param2: boolean): void;
            zze(param0: any /* com.google.android.gms.internal.play_billing.zzhx*/, param1: number, param2: number, param3: boolean): void;
            zzf(param0: any /* com.google.android.gms.internal.play_billing.zzib*/): void;
            zzg(param0: any /* com.google.android.gms.internal.play_billing.zzib*/, param1: number): void;
            zzh(param0: any /* com.google.android.gms.internal.play_billing.zzib*/, param1: number, param2: boolean): void;
            zzi(param0: any /* com.google.android.gms.internal.play_billing.zzij*/): void;
            zzj(param0: any /* com.google.android.gms.internal.play_billing.zzjo*/): void;
            zzk(param0: any /* com.google.android.gms.internal.play_billing.zzjs*/): void;
          });
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
        export class zzci {
          public static class: java.lang.Class<com.android.billingclient.api.zzci>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcj {
          public static class: java.lang.Class<com.android.billingclient.api.zzcj>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzck {
          public static class: java.lang.Class<com.android.billingclient.api.zzck>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcl extends com.android.billingclient.api.zzch {
          public static class: java.lang.Class<com.android.billingclient.api.zzcl>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcm {
          public static class: java.lang.Class<com.android.billingclient.api.zzcm>;
          public apply(param0: any): any;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcn {
          public static class: java.lang.Class<com.android.billingclient.api.zzcn>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzco {
          public static class: java.lang.Class<com.android.billingclient.api.zzco>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzco interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzcp {
          public static class: java.lang.Class<com.android.billingclient.api.zzcp>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcq {
          public static class: java.lang.Class<com.android.billingclient.api.zzcq>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcr {
          public static class: java.lang.Class<com.android.billingclient.api.zzcr>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcs {
          public static class: java.lang.Class<com.android.billingclient.api.zzcs>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzct {
          public static class: java.lang.Class<com.android.billingclient.api.zzct>;
          public onActivityResult(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcu {
          public static class: java.lang.Class<com.android.billingclient.api.zzcu>;
          public onActivityResult(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcv {
          public static class: java.lang.Class<com.android.billingclient.api.zzcv>;
          public onActivityResult(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcw {
          public static class: java.lang.Class<com.android.billingclient.api.zzcw>;
          public constructor(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<any>);
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcx {
          public static class: java.lang.Class<com.android.billingclient.api.zzcx>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcy {
          public static class: java.lang.Class<com.android.billingclient.api.zzcy>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzcz {
          public static class: java.lang.Class<com.android.billingclient.api.zzcz>;
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
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzda {
          public static class: java.lang.Class<com.android.billingclient.api.zzda>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzdb {
          public static class: java.lang.Class<com.android.billingclient.api.zzdb>;
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzdc {
          public static class: java.lang.Class<com.android.billingclient.api.zzdc>;
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
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzg {
          public static class: java.lang.Class<com.android.billingclient.api.zzg>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzh {
          public static class: java.lang.Class<com.android.billingclient.api.zzh>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzi {
          public static class: java.lang.Class<com.android.billingclient.api.zzi>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzj {
          public static class: java.lang.Class<com.android.billingclient.api.zzj>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzk {
          public static class: java.lang.Class<com.android.billingclient.api.zzk>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzl {
          public static class: java.lang.Class<com.android.billingclient.api.zzl>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzm {
          public static class: java.lang.Class<com.android.billingclient.api.zzm>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzn {
          public static class: java.lang.Class<com.android.billingclient.api.zzn>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzo {
          public static class: java.lang.Class<com.android.billingclient.api.zzo>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzp {
          public static class: java.lang.Class<com.android.billingclient.api.zzp>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzq {
          public static class: java.lang.Class<com.android.billingclient.api.zzq>;
          /**
           * Constructs a new instance of the com.android.billingclient.api.zzq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export class zzr {
          public static class: java.lang.Class<com.android.billingclient.api.zzr>;
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
        export class zzs {
          public static class: java.lang.Class<com.android.billingclient.api.zzs>;
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
        }
      }
    }
  }
}

declare module com {
  export module android {
    export module billingclient {
      export module api {
        export class zzu extends com.google.android.gms.internal.play_billing.zzr {
          public static class: java.lang.Class<com.android.billingclient.api.zzu>;
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
        export class zzz {
          public static class: java.lang.Class<com.android.billingclient.api.zzz>;
          public run(): void;
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
            export abstract class zzaa extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzab {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaa>;
              public constructor();
              public constructor(param0: string);
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
            export class zzab {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzab>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.os.Bundle): void });
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
            export abstract class zzac extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzad {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzac>;
              public constructor();
              public constructor(param0: string);
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
            export class zzad {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzad>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.os.Bundle): void });
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
            export abstract class zzae extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzaf {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzae>;
              public constructor();
              public constructor(param0: string);
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
            export class zzaf {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaf>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.os.Bundle): void });
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
            export abstract class zzag extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzah {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzag>;
              public constructor();
              public constructor(param0: string);
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
            export class zzah {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzah>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.os.Bundle): void });
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
            export abstract class zzai extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzaj {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzai>;
              public constructor();
              public constructor(param0: string);
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
            export class zzaj {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaj>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.os.Bundle): void });
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
            export class zzak extends com.google.android.gms.internal.play_billing.zzap implements com.google.android.gms.internal.play_billing.zzam {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzak>;
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
            export abstract class zzal extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzam {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzal>;
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
            export class zzam {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzam>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(param0: number, param1: string, param2: string): number;
                zzw(param0: number, param1: string, param2: string): number;
                zzc(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle): number;
                zzd(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
                zze(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
                zzf(param0: number, param1: string, param2: string, param3: string, param4: string): globalAndroid.os.Bundle;
                zzg(param0: number, param1: string, param2: string, param3: string, param4: string, param5: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
                zzh(param0: number, param1: string, param2: string, param3: string): globalAndroid.os.Bundle;
                zzi(param0: number, param1: string, param2: string, param3: string, param4: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
                zzj(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
                zzk(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzx*/): void;
                zzl(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzz*/): void;
                zzm(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzab*/): void;
                zzn(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzad*/): void;
                zzo(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzaf*/): void;
                zzp(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzah*/): void;
                zzq(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzaj*/): void;
                zzr(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzao*/): void;
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
            export abstract class zzan extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzao {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzan>;
              public constructor();
              public constructor(param0: string);
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
            export class zzao {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzao>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.os.Bundle): void });
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
            export class zzap {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzap>;
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
            export class zzaq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaq>;
              public asBinder(): globalAndroid.os.IBinder;
              public constructor(param0: string);
              public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
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
            export class zzar {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzar>;
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
            export class zzas extends com.google.android.gms.internal.play_billing.zzap implements com.google.android.gms.internal.play_billing.zzau {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzas>;
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
            export abstract class zzat extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzau {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzat>;
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
            export class zzau {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzau>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzau interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: string, param1: string, param2: any /* com.google.android.gms.internal.play_billing.zzaw*/): void });
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
            export abstract class zzav extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzaw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzav>;
              public constructor();
              public constructor(param0: string);
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
            export class zzaw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaw>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzaw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: number): void });
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
            export class zzax extends com.google.android.gms.internal.play_billing.zzbl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzax>;
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
            export class zzay extends com.google.android.gms.internal.play_billing.zzbl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzay>;
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
            export class zzaz {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaz>;
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
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzb>;
              public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzb>*/;
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
            export class zzba {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzba>;
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
            export class zzbb {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbb>;
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
            export class zzbc {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbc>;
              public toString(): string;
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
            export class zzbd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbd>;
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
            export class zzbe {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbe>;
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
            export class zzbf extends com.google.android.gms.internal.play_billing.zzba {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbf>;
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
            export class zzbg {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbg>;
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
            export class zzbh {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbh>;
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
            export class zzbi {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbi>;
              public toString(): string;
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
            export class zzbj {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbj>;
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
            export class zzbk extends com.google.android.gms.internal.play_billing.zzbl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbk>;
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
            export abstract class zzbl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbl>;
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
            export class zzbm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbm>;
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
            export abstract class zzbn extends com.google.android.gms.internal.play_billing.zzci {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbn>;
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
            export class zzbo {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbo>;
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
            export class zzbp {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbp>;
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
            export abstract class zzbq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbq>;
              public contains(param0: any): boolean;
              /** @deprecated */
              public addAll(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public add(param0: any): boolean;
              /** @deprecated */
              public remove(param0: any): boolean;
              public spliterator(): java.util.Spliterator;
              /** @deprecated */
              public clear(): void;
              public toArray(): androidNative.Array<any>;
              /** @deprecated */
              public removeAll(param0: java.util.Collection<any>): boolean;
              public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
              /** @deprecated */
              public retainAll(param0: java.util.Collection<any>): boolean;
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
            export class zzbr extends com.google.android.gms.internal.play_billing.zzbn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbr>;
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
            export class zzbs extends com.google.android.gms.internal.play_billing.zzbt {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbs>;
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
            export abstract class zzbt extends com.google.android.gms.internal.play_billing.zzbq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbt>;
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
            export class zzbu {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbu>;
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
            export class zzbv {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbv>;
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
            export abstract class zzbw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbw>;
              public get(param0: any): any;
              public hashCode(): number;
              public containsKey(param0: any): boolean;
              public getOrDefault(param0: any, param1: any): any;
              /** @deprecated */
              public put(param0: any, param1: any): any;
              /** @deprecated */
              public remove(param0: any): any;
              /** @deprecated */
              public clear(): void;
              public toString(): string;
              /** @deprecated */
              public putAll(param0: java.util.Map<any, any>): void;
              public equals(param0: any): boolean;
              public isEmpty(): boolean;
              public containsValue(param0: any): boolean;
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
            export abstract class zzbx extends com.google.android.gms.internal.play_billing.zzbq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbx>;
              public hashCode(): number;
              public equals(param0: any): boolean;
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
            export class zzby {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzby>;
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
            export class zzbz {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbz>;
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
            export class zzc {
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
            export class zzca extends com.google.android.gms.internal.play_billing.zzbt {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzca>;
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
            export class zzcb extends com.google.android.gms.internal.play_billing.zzbt {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcb>;
              public size(): number;
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
            export class zzcc extends com.google.android.gms.internal.play_billing.zzbx {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcc>;
              public contains(param0: any): boolean;
              public size(): number;
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
            export class zzcd extends com.google.android.gms.internal.play_billing.zzbx {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcd>;
              public contains(param0: any): boolean;
              public size(): number;
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
            export class zzce extends com.google.android.gms.internal.play_billing.zzbt {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzce>;
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
            export class zzcf extends com.google.android.gms.internal.play_billing.zzbw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcf>;
              public get(param0: any): any;
              public size(): number;
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
            export class zzcg {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcg>;
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
            export abstract class zzch {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzch>;
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
            export abstract class zzci extends com.google.android.gms.internal.play_billing.zzch {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzci>;
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

declare module com {
  export module google {
    export module android {
      export module gms {
        export module internal {
          export module play_billing {
            export abstract class zzcj<V> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzck<any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcj<any>>;
              public get(): any;
              public constructor();
              public cancel(param0: boolean): boolean;
              public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              public isCancelled(): boolean;
              public isDone(): boolean;
              public toString(): string;
            }
            export module zzcj {
              export class zza {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcj.zza>;
              }
              export class zzb<V> extends java.lang.Runnable {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcj.zzb<any>>;
                public run(): void;
              }
              export class zzc {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcj.zzc>;
              }
              export class zzd {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcj.zzd>;
              }
              export class zze<V> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzcz<any>*/ {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcj.zze<any>>;
                /**
                 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzcj$zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zzb(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void });
                public constructor();
              }
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
            export abstract class zzck<V> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzdf*/ implements any /* com.google.android.gms.internal.play_billing.zzcz<any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzck<any>>;
            }
            export module zzck {
              export abstract class zza {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzck.zza>;
              }
              export class zzb extends com.google.android.gms.internal.play_billing.zzck.zza {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzck.zzb>;
              }
              export class zzc extends com.google.android.gms.internal.play_billing.zzck.zza {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzck.zzc>;
              }
              export class zzd extends com.google.android.gms.internal.play_billing.zzck.zza {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzck.zzd>;
              }
              export class zze {
                public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzck.zze>;
              }
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
            export class zzcl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcl>;
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
            export class zzcm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcm>;
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
            export class zzcn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcn>;
              public run(): any;
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
            export class zzco {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzco>;
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
            export class zzcp {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcp>;
              public execute(param0: java.lang.Runnable): void;
              public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzcp>*/;
              public toString(): string;
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
            export class zzcq extends com.google.android.gms.internal.play_billing.zzcr implements com.google.android.gms.internal.play_billing.zzcj.zze<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcq>;
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
            export class zzcr extends com.google.android.gms.internal.play_billing.zzcv {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcr>;
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
            export class zzcs {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcs>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzcs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: java.lang.Throwable): void; zzb(param0: any): void });
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
            export class zzct {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzct>;
              public toString(): string;
              public run(): void;
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
            export class zzcu extends com.google.android.gms.internal.play_billing.zzcw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcu>;
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
            export class zzcv extends com.google.android.gms.internal.play_billing.zzcj<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcv>;
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
            export class zzcw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcw>;
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
            export class zzcx extends com.google.android.gms.internal.play_billing.zzcz<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcx>;
              public get(): any;
              public cancel(param0: boolean): boolean;
              public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              public isCancelled(): boolean;
              public isDone(): boolean;
              public toString(): string;
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
            export class zzcy {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcy>;
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
            export class zzcz<V> extends java.util.concurrent.Future<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcz<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzcz<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzb(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void });
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
            export abstract class zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzd>;
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
            export class zzda {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzda>;
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
            export class zzdb {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdb>;
              public run(): void;
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
            export class zzdc {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdc>;
              public fillInStackTrace(): java.lang.Throwable;
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
            export class zzdd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdd>;
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
            export class zzde extends com.google.android.gms.internal.play_billing.zzcq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzde>;
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
            export abstract class zzdf {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdf>;
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
            export class zzdg {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdg>;
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
            export class zzdh extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdh>;
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
            export class zzdi extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdi>;
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
            export class zzdj extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdj>;
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
            export class zzdk extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdk>;
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
            export class zzdl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdl>;
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
            export class zzdm extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdm>;
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
            export class zzdn extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdn>;
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
            export class zzdo {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdo>;
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
            export class zzdp extends com.google.android.gms.internal.play_billing.zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdp>;
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
            export class zzdq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdq>;
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
            export abstract class zzdr<MessageType, BuilderType> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzgk*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdr<any, any>>;
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
            export abstract class zzds<MessageType, BuilderType> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzgl*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzds<any, any>>;
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
            export abstract class zzdt extends com.google.android.gms.internal.play_billing.zzgl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdt>;
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
            export abstract class zzdu implements com.google.android.gms.internal.play_billing.zzfn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdu>;
              public remove(param0: number): any;
              public set(param0: number, param1: any): any;
              public removeAll(param0: java.util.Collection<any>): boolean;
              public add(param0: any): boolean;
              public hashCode(): number;
              public remove(param0: any): boolean;
              public add(param0: number, param1: any): void;
              public retainAll(param0: java.util.Collection<any>): boolean;
              public clear(): void;
              public equals(param0: any): boolean;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
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
            export class zzdv {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdv>;
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
            export class zzdw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdw>;
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
            export class zzdx {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdx>;
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
            export class zzdy extends com.google.android.gms.internal.play_billing.zzdu implements com.google.android.gms.internal.play_billing.zzfn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdy>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public indexOf(param0: any): number;
              public equals(param0: any): boolean;
              public removeRange(param0: number, param1: number): void;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
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
            export class zzdz {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdz>;
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
            export class zzea extends com.google.android.gms.internal.play_billing.zzeb {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzea>;
              public hasNext(): boolean;
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
            export abstract class zzeb extends com.google.android.gms.internal.play_billing.zzed {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzeb>;
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
            export class zzec extends com.google.android.gms.internal.play_billing.zzeg {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzec>;
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
            export class zzed {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzed>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzed interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): number });
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
            export class zzee {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzee>;
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
            export abstract class zzef extends com.google.android.gms.internal.play_billing.zzei {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzef>;
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
            export class zzeg extends com.google.android.gms.internal.play_billing.zzef {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzeg>;
              public equals(param0: any): boolean;
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
            export class zzeh {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzeh>;
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
            export abstract class zzei {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzei>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
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
            export class zzej extends com.google.android.gms.internal.play_billing.zzel {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzej>;
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
            export class zzek {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzek>;
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
            export class zzel {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzel>;
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
            export class zzem extends com.google.android.gms.internal.play_billing.zzep {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzem>;
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
            export class zzen {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzen>;
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
            export class zzeo {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzeo>;
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
            export abstract class zzep extends com.google.android.gms.internal.play_billing.zzdz {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzep>;
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
            export class zzeq extends com.google.android.gms.internal.play_billing.zzhu {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzeq>;
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
            export class zzer extends com.google.android.gms.internal.play_billing.zzdu implements com.google.android.gms.internal.play_billing.zzfn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzer>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public indexOf(param0: any): number;
              public equals(param0: any): boolean;
              public removeRange(param0: number, param1: number): void;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
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
            export class zzes {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzes>;
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
            export class zzet {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzet>;
              public hashCode(): number;
              public equals(param0: any): boolean;
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
            export class zzeu {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzeu>;
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
            export abstract class zzev {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzev>;
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
            export class zzew extends com.google.android.gms.internal.play_billing.zzev {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzew>;
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
            export class zzex {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzex>;
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
            export class zzey {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzey>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): number; zzb(): any /* com.google.android.gms.internal.play_billing.zzhs*/; zzc(): any /* com.google.android.gms.internal.play_billing.zzht*/; zzd(): boolean; zze(): boolean });
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
            export class zzez {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzez>;
              public hashCode(): number;
              public equals(param0: any): boolean;
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
              public fillInStackTrace(): java.lang.Throwable;
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
            export class zzfa {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfa>;
              public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzfa>*/;
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
            export class zzfb extends com.google.android.gms.internal.play_billing.zzdu implements com.google.android.gms.internal.play_billing.zzfn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfb>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public indexOf(param0: any): number;
              public equals(param0: any): boolean;
              public removeRange(param0: number, param1: number): void;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
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
            export abstract class zzfc {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfc>;
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
            export class zzfd extends com.google.android.gms.internal.play_billing.zzgj {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfd>;
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
            export class zzfe<MessageType, BuilderType> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzdr<any,any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfe<any, any>>;
              public constructor();
              public constructor(param0: any);
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
            export abstract class zzff extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzff>;
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
            export class zzfg extends com.google.android.gms.internal.play_billing.zzey {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfg>;
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
            export class zzfh extends com.google.android.gms.internal.play_billing.zzes {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfh>;
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
            export abstract class zzfi<MessageType, BuilderType> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzds<any,any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfi<any, any>>;
              public constructor();
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
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
            export class zzfj extends com.google.android.gms.internal.play_billing.zzdu implements com.google.android.gms.internal.play_billing.zzfm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfj>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public indexOf(param0: any): number;
              public equals(param0: any): boolean;
              public removeRange(param0: number, param1: number): void;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
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
            export class zzfk {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfk>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzfk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): number });
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
            export class zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfl>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzfl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: number): boolean });
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
            export class zzfm extends com.google.android.gms.internal.play_billing.zzfn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfm>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzfm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzd(param0: number): any /* com.google.android.gms.internal.play_billing.zzfn*/; zzb(): void; zzc(): boolean });
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
            export class zzfn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfn>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzfn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzd(param0: number): any /* com.google.android.gms.internal.play_billing.zzfn*/; zzb(): void; zzc(): boolean });
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
            export class zzfo {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfo>;
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
            export class zzfp extends com.google.android.gms.internal.play_billing.zzfq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfp>;
              public constructor(param0: string);
              public constructor(param0: java.io.IOException);
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
            export class zzfq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfq>;
              public constructor(param0: string);
              public constructor(param0: java.io.IOException);
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
            export class zzfr {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfr>;
              public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzfr>*/;
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
            export class zzfs {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfs>;
              public getValue(): any;
              public getKey(): any;
              public setValue(param0: any): any;
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
            export class zzft {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzft>;
              public remove(): void;
              public hasNext(): boolean;
              public constructor(param0: java.util.Iterator<any>);
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
            export class zzfu {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfu>;
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
            export class zzfv extends com.google.android.gms.internal.play_billing.zzfw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfv>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
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
            export class zzfw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfw>;
              public constructor();
              public hashCode(): number;
              public equals(param0: any): boolean;
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
            export class zzfx {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfx>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzfx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): any });
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
            export class zzfy {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfy>;
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
            export class zzfz {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfz>;
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
            export class zzga extends com.google.android.gms.internal.play_billing.zzdu implements com.google.android.gms.internal.play_billing.zzfn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzga>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public indexOf(param0: any): number;
              public equals(param0: any): boolean;
              public removeRange(param0: number, param1: number): void;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
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
            export class zzgb extends com.google.android.gms.internal.play_billing.zzgj {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgb>;
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
            export class zzgc extends com.google.android.gms.internal.play_billing.zzgj {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgc>;
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
            export class zzgd extends com.google.android.gms.internal.play_billing.zzgw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgd>;
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
            export class zzge {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzge>;
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
            export class zzgf {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgf>;
              public hashCode(): number;
              public remove(param0: any): any;
              public entrySet(): java.util.Set<any>;
              public putAll(param0: java.util.Map<any, any>): void;
              public clear(): void;
              public put(param0: any, param1: any): any;
              public equals(param0: any): boolean;
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
            export class zzgg {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgg>;
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
            export class zzgh {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgh>;
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
            export class zzgi {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgi>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzgi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): any /* com.google.android.gms.internal.play_billing.zzgl*/; zzb(): boolean; zzc(): number });
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
            export class zzgj {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgj>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzgj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzb(param0: java.lang.Class<any>): any /* com.google.android.gms.internal.play_billing.zzgi*/; zzc(param0: java.lang.Class<any>): boolean });
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
            export class zzgk extends com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgk>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzgk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzg(): any /* com.google.android.gms.internal.play_billing.zzgl*/; zzh(): any /* com.google.android.gms.internal.play_billing.zzgl*/; zzk(): boolean });
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
            export class zzgl extends com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgl>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzgl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzj(): number; zzf(): any /* com.google.android.gms.internal.play_billing.zzei*/; zzK(): any /* com.google.android.gms.internal.play_billing.zzgk*/; zzL(param0: any /* com.google.android.gms.internal.play_billing.zzep*/): void; zzh(): any /* com.google.android.gms.internal.play_billing.zzgl*/; zzk(): boolean });
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
            export class zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgm>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzgm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzh(): any /* com.google.android.gms.internal.play_billing.zzgl*/; zzk(): boolean });
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
            export class zzgn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgn>;
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
            export class zzgo<T> extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzgv<any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgo<any>>;
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
            export class zzgp extends com.google.android.gms.internal.play_billing.zzgv<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgp>;
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
            export class zzgq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgq>;
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
            export class zzgr {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgr>;
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
            export class zzgs {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgs>;
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
            export class zzgt extends com.google.android.gms.internal.play_billing.zzdu {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgt>;
              public remove(param0: number): any;
              public set(param0: number, param1: any): any;
              public size(): number;
              public add(param0: any): boolean;
              public remove(param0: any): boolean;
              public add(param0: number, param1: any): void;
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
            export class zzgu extends com.google.android.gms.internal.play_billing.zzgi {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgu>;
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
            export class zzgv<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgv<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzgv<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: any): number; zzb(param0: any): number; zze(): any; zzf(param0: any): void; zzg(param0: any, param1: any): void; zzh(param0: any, param1: androidNative.Array<number>, param2: number, param3: number, param4: any /* com.google.android.gms.internal.play_billing.zzdw*/): void; zzi(param0: any, param1: any /* com.google.android.gms.internal.play_billing.zzhu*/): void; zzj(param0: any, param1: any): boolean; zzk(param0: any): boolean });
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
            export class zzgw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgw>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzgw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: java.lang.Class<any>): any /* com.google.android.gms.internal.play_billing.zzgv<any>*/ });
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
            export class zzgx {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgx>;
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
            export class zzgy extends com.google.android.gms.internal.play_billing.zzhd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgy>;
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
            export class zzgz {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgz>;
              public getValue(): any;
              public hashCode(): number;
              public toString(): string;
              public setValue(param0: any): any;
              public equals(param0: any): boolean;
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
            export class zzha {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzha>;
              public remove(): void;
              public hasNext(): boolean;
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
            export class zzhb {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhb>;
              public contains(param0: any): boolean;
              public size(): number;
              public remove(param0: any): boolean;
              public clear(): void;
              public iterator(): java.util.Iterator<any>;
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
            export class zzhc {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhc>;
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
            export class zzhd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhd>;
              public get(param0: any): any;
              public size(): number;
              public hashCode(): number;
              public remove(param0: any): any;
              public entrySet(): java.util.Set<any>;
              public containsKey(param0: any): boolean;
              public clear(): void;
              public equals(param0: any): boolean;
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
            export class zzhe extends com.google.android.gms.internal.play_billing.zzgi {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhe>;
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
            export class zzhf {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhf>;
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
            export class zzhg {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhg>;
              public constructor(param0: any /* com.google.android.gms.internal.play_billing.zzgl*/);
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
            export abstract class zzhh {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhh>;
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
            export class zzhi {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhi>;
              public hashCode(): number;
              public equals(param0: any): boolean;
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
            export class zzhj extends com.google.android.gms.internal.play_billing.zzhh {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhj>;
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
            export class zzhk {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhk>;
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
            export class zzhl extends com.google.android.gms.internal.play_billing.zzhn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhl>;
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
            export class zzhm extends com.google.android.gms.internal.play_billing.zzhn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhm>;
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
            export abstract class zzhn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhn>;
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
            export class zzho {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzho>;
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
            export class zzhp {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhp>;
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
            export class zzhq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhq>;
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
            export class zzhr {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhr>;
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
            export class zzhs {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhs>;
              public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzhs>*/;
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
            export class zzht {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzht>;
              public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzht>*/;
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
            export class zzhu {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhu>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzhu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzb(param0: number, param1: boolean): void;
                zzc(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzd(param0: number, param1: any /* com.google.android.gms.internal.play_billing.zzei*/): void;
                zze(param0: number, param1: java.util.List<any>): void;
                zzf(param0: number, param1: number): void;
                zzg(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzh(param0: number): void;
                zzi(param0: number, param1: number): void;
                zzj(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzk(param0: number, param1: number): void;
                zzl(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzm(param0: number, param1: number): void;
                zzn(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzo(param0: number, param1: number): void;
                zzp(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzq(param0: number, param1: any, param2: any /* com.google.android.gms.internal.play_billing.zzgv<any>*/): void;
                zzr(param0: number, param1: number): void;
                zzs(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzt(param0: number, param1: number): void;
                zzu(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzv(param0: number, param1: any, param2: any /* com.google.android.gms.internal.play_billing.zzgv<any>*/): void;
                zzw(param0: number, param1: any): void;
                zzx(param0: number, param1: number): void;
                zzy(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzz(param0: number, param1: number): void;
                zzA(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzB(param0: number, param1: number): void;
                zzC(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzD(param0: number, param1: number): void;
                zzE(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzF(param0: number): void;
                zzG(param0: number, param1: string): void;
                zzH(param0: number, param1: java.util.List<any>): void;
                zzI(param0: number, param1: number): void;
                zzJ(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzK(param0: number, param1: number): void;
                zzL(param0: number, param1: java.util.List<any>, param2: boolean): void;
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
            export class zzhv extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhv>;
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
            export class zzhw {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhw>;
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
            export class zzhx extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhx>;
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
            export class zzhy extends com.google.android.gms.internal.play_billing.zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhy>;
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
            export class zzhz extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzhz>;
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
            export class zzi {
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
            export class zzia {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzia>;
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
            export class zzib extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzib>;
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
            export class zzic extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzic>;
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
            export class zzid extends com.google.android.gms.internal.play_billing.zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzid>;
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
            export class zzie implements com.google.android.gms.internal.play_billing.zzfk {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzie>;
              public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzie>*/;
              public toString(): string;
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
            export class zzif {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzif>;
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
            export class zzig extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzig>;
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
            export class zzih extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzih>;
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
            export class zzii {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzii>;
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
            export class zzij extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzij>;
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
            export class zzik extends com.google.android.gms.internal.play_billing.zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzik>;
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
            export class zzil implements com.google.android.gms.internal.play_billing.zzfk {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzil>;
              public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzil>*/;
              public toString(): string;
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
            export class zzim extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzim>;
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
            export class zzin extends com.google.android.gms.internal.play_billing.zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzin>;
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
            export class zzio {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzio>;
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
            export class zzip extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzip>;
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
            export class zziq extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zziq>;
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
            export class zzir {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzir>;
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
            export class zzis extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzis>;
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
            export class zzit extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzit>;
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
            export class zziu {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zziu>;
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
            export class zziv extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zziv>;
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
            export class zziw extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zziw>;
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
            export class zzix extends com.google.android.gms.internal.play_billing.zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzix>;
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
            export class zziy {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zziy>;
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
            export class zziz extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zziz>;
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
            export class zzj extends com.google.android.gms.internal.play_billing.zzd {
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
            export class zzja extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzja>;
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
            export class zzjb extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjb>;
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
            export class zzjc extends com.google.android.gms.internal.play_billing.zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjc>;
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
            export class zzjd extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjd>;
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
            export class zzje {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzje>;
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
            export class zzjf extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjf>;
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
            export class zzjg extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjg>;
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
            export class zzjh {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjh>;
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
            export class zzji extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzji>;
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
            export class zzjj extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjj>;
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
            export class zzjk {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjk>;
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
            export class zzjl extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjl>;
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
            export class zzjm extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjm>;
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
            export class zzjn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjn>;
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
            export class zzjo extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjo>;
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
            export class zzjp extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjp>;
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
            export class zzjq extends com.google.android.gms.internal.play_billing.zzfl {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjq>;
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
            export class zzjr {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjr>;
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
            export class zzjs extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjs>;
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
            export class zzjt extends com.google.android.gms.internal.play_billing.zzfe<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjt>;
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
            export class zzju {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzju>;
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
            export class zzjv extends com.google.android.gms.internal.play_billing.zzfi<any, any> implements com.google.android.gms.internal.play_billing.zzgm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzjv>;
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
              public run(): void;
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
            export class zzl extends com.google.android.gms.internal.play_billing.zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzl>;
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
            export class zzm {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzm>;
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
            export class zzn {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzn>;
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
            export class zzo extends com.google.android.gms.internal.play_billing.zzcz<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzo>;
              public get(): any;
              public constructor();
              public cancel(param0: boolean): boolean;
              public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              public isCancelled(): boolean;
              public isDone(): boolean;
              public toString(): string;
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
            export class zzp {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzp>;
              public finalize(): void;
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
            export class zzq {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzq>;
              public fillInStackTrace(): java.lang.Throwable;
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
            export class zzr {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzr>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: any /* com.google.android.gms.internal.play_billing.zzp*/): any });
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
            export class zzs extends com.google.android.gms.internal.play_billing.zzo {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzs>;
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
            export class zzt extends com.google.android.gms.internal.play_billing.zzcz<any> {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzt>;
              public get(): any;
              public cancel(param0: boolean): boolean;
              public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
              public isCancelled(): boolean;
              public isDone(): boolean;
              public toString(): string;
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
            export class zzu {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzu>;
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
            export class zzv extends com.google.android.gms.internal.play_billing.zzo {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzv>;
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
            export abstract class zzw extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzx {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzw>;
              public constructor();
              public constructor(param0: string);
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
            export class zzx {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzx>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.os.Bundle): void });
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
            export abstract class zzy extends com.google.android.gms.internal.play_billing.zzaq implements com.google.android.gms.internal.play_billing.zzz {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzy>;
              public constructor();
              public constructor(param0: string);
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
            export class zzz {
              public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzz>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.os.Bundle): void });
              public constructor();
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.google.android.gms.internal.play_billing.zzcj:1
//com.google.android.gms.internal.play_billing.zzcj.zzb:1
//com.google.android.gms.internal.play_billing.zzcj.zze:1
//com.google.android.gms.internal.play_billing.zzck:1
//com.google.android.gms.internal.play_billing.zzcz:1
//com.google.android.gms.internal.play_billing.zzdr:2
//com.google.android.gms.internal.play_billing.zzds:2
//com.google.android.gms.internal.play_billing.zzfe:2
//com.google.android.gms.internal.play_billing.zzfi:2
//com.google.android.gms.internal.play_billing.zzgo:1
//com.google.android.gms.internal.play_billing.zzgv:1
