declare module org {
  export module nativescript {
    export module plugins {
      export module payments {
        export class Payments {
          public static class: java.lang.Class<org.nativescript.plugins.payments.Payments>;
          public getBilling$payments_release(): com.android.billingclient.api.BillingClient;

          public setOnReadyListener(value: any): void;
          public setOnPurchaseUpdateListener(value: any): void;
          public isFeatureSupported(feature: org.nativescript.plugins.payments.Payments.Features): boolean;
          public fetchProducts(it: androidNative.Array<string>, type: org.nativescript.plugins.payments.Product.Type, $i$f$mapTo: any): void;
          public restartConnection(): void;
          public constructor(pendingParams: globalAndroid.content.Context);
          public fetchPurchases(callback: any): void;
          public canMakePayments(): boolean;
          public static isSupported(context: globalAndroid.content.Context): boolean;
          public purchaseProduct($this$purchaseProduct_u24lambda_u248: globalAndroid.app.Activity, product: org.nativescript.plugins.payments.Product, id: org.nativescript.plugins.payments.Payments.PurchaseOptions): org.nativescript.plugins.payments.Payments.BillingResponse;
          public getOnPurchaseUpdateListener(): any;
          public getOnReadyListener(): any;
          public purchaseProduct(activity: globalAndroid.app.Activity, product: org.nativescript.plugins.payments.Product): org.nativescript.plugins.payments.Payments.BillingResponse;
          public setBilling$payments_release(value: com.android.billingclient.api.BillingClient): void;
          public static mapResponseCode$payments_release(code: number): org.nativescript.plugins.payments.Payments.BillingResponse;
        }
        export module Payments {
          export class BillingResponse {
            public static class: java.lang.Class<org.nativescript.plugins.payments.Payments.BillingResponse>;
            public getMessage(): string;
            public constructor(code: number, message: string, resolution: string);
            public getCode(): number;
            public getResolution(): string;
          }
          export class Companion {
            public static class: java.lang.Class<org.nativescript.plugins.payments.Payments.Companion>;
            public isSupported($this$isSupported_u24lambda_u240: globalAndroid.content.Context): boolean;
            public mapResponseCode$payments_release(code: number): org.nativescript.plugins.payments.Payments.BillingResponse;
          }
          export class Features {
            public static class: java.lang.Class<org.nativescript.plugins.payments.Payments.Features>;
            public static Subscriptions: org.nativescript.plugins.payments.Payments.Features;
            public static SubscriptionsUpdate: org.nativescript.plugins.payments.Payments.Features;
            public static PriceChangeConfirmation: org.nativescript.plugins.payments.Payments.Features;
            public static InAppMessaging: org.nativescript.plugins.payments.Payments.Features;
            public static ProductDetails: org.nativescript.plugins.payments.Payments.Features;
            public static BillingConfig: org.nativescript.plugins.payments.Payments.Features;
            public static AlternativeBillingOnly: org.nativescript.plugins.payments.Payments.Features;
            public static ExternalOffer: org.nativescript.plugins.payments.Payments.Features;
            public static valueOf(value: string): org.nativescript.plugins.payments.Payments.Features;
            public getValue(): string;
            public static values(): androidNative.Array<org.nativescript.plugins.payments.Payments.Features>;
            public static getEntries(): any;
          }
          export class PurchaseOptions {
            public static class: java.lang.Class<org.nativescript.plugins.payments.Payments.PurchaseOptions>;
            public constructor();
            public getAccountId(): string;
            public setAccountId(value: string): void;
            public setProfileId(value: string): void;
            public getProfileId(): string;
            public getSetIsOfferPersonalized(): boolean;
            public setSetIsOfferPersonalized(value: boolean): void;
          }
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module plugins {
      export module payments {
        export class Product {
          public static class: java.lang.Class<org.nativescript.plugins.payments.Product>;
          public getTitle(): string;
          public getProduct(): com.android.billingclient.api.ProductDetails;
          public getId(): string;
          public getName(): string;
          public getType(): org.nativescript.plugins.payments.Product.Type;
          public constructor(product: com.android.billingclient.api.ProductDetails);
          public getDescription(): string;
          public getPriceAmountMicros(): number | null;
          public getPriceFormatted(): string | null;
        }
        export module Product {
          export class Type {
            public static class: java.lang.Class<org.nativescript.plugins.payments.Product.Type>;
            public static InApp: org.nativescript.plugins.payments.Product.Type;
            public static Subs: org.nativescript.plugins.payments.Product.Type;
            public getToType$payments_release(): string;
            public static valueOf(value: string): org.nativescript.plugins.payments.Product.Type;
            public static values(): androidNative.Array<org.nativescript.plugins.payments.Product.Type>;
            public static getEntries(): any;
            public getValue(): number;
          }
          export module Type {
            export class WhenMappings {
              public static class: java.lang.Class<org.nativescript.plugins.payments.Product.Type.WhenMappings>;
            }
          }
        }
      }
    }
  }
}

declare module org {
  export module nativescript {
    export module plugins {
      export module payments {
        export class Transaction {
          public static class: java.lang.Class<org.nativescript.plugins.payments.Transaction>;
          public getOriginalJson(): org.json.JSONObject;
          public getProductId(): string;
          public getOrderId(): string;
          public getOrderDate(): number;
          public finish(params: any): void;
          public getToken(): string;
          public constructor(purchase: com.android.billingclient.api.Purchase, type: org.nativescript.plugins.payments.Product.Type, payments: org.nativescript.plugins.payments.Payments);
          public getQuantity(): number;
          public isSubscription(): boolean;
          public getPurchase(): com.android.billingclient.api.Purchase;
          public getSignature(): string;
          public getType(): org.nativescript.plugins.payments.Product.Type;
          public getState(): org.nativescript.plugins.payments.Transaction.State;
          public getDeveloperPayload(): string;
          public getOriginalJsonString(): string;
          public getProducts(): java.util.List<string>;
          public isAcknowledged(): boolean;
        }
        export module Transaction {
          export class State {
            public static class: java.lang.Class<org.nativescript.plugins.payments.Transaction.State>;
            public static Unknown: org.nativescript.plugins.payments.Transaction.State;
            public static Purchased: org.nativescript.plugins.payments.Transaction.State;
            public static Pending: org.nativescript.plugins.payments.Transaction.State;
            public static getEntries(): any;
            public static valueOf(value: string): org.nativescript.plugins.payments.Transaction.State;
            public static values(): androidNative.Array<org.nativescript.plugins.payments.Transaction.State>;
            public getValue(): number;
          }
        }
      }
    }
  }
}

//Generics information:
