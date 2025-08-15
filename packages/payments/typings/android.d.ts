declare module org {
  export module nativescript {
    export module plugins {
      export module payments {
        export class Payments {
          public static class: java.lang.Class<org.nativescript.plugins.payments.Payments>;
          public showInAppMessaging(activity: globalAndroid.app.Activity): void;
          public setOnPurchaseUpdateListener(value: any): void;
          public isFeatureSupported(feature: org.nativescript.plugins.payments.Payments.Features): boolean;
          public static showManageSubscriptions(context: globalAndroid.content.Context, packageName: string): void;
          public static getEnableDebug(): boolean;
          public static showManageSubscriptions(context: globalAndroid.content.Context): void;
          public fetchPurchases(callback: any): void;
          public canMakePayments(): boolean;
          public static setEnableDebug(value: boolean): void;
          public connect(): void;
          public setOnReadyListener(value: any): void;
          public getOnPurchaseUpdateListener(): any;
          public disconnect(): void;
          public static mapResponseCode$payments_release(code: number): org.nativescript.plugins.payments.Payments.BillingResponse;
          public getBilling$payments_release(): com.android.billingclient.api.BillingClient;
          public fetchProducts(it: androidNative.Array<string>, item$iv$iv: org.nativescript.plugins.payments.Product.Type, $i$f$mapTo: any): void;
          public static showManageSubscriptions(context: globalAndroid.content.Context, packageName: string, productId: string): void;
          public purchaseProduct(activity: globalAndroid.app.Activity, product: org.nativescript.plugins.payments.Product, callback: any): void;
          public static isSupported(context: globalAndroid.content.Context): boolean;
          public getOnReadyListener(): any;
          public constructor(context: globalAndroid.content.Context);
          public purchaseProduct(it: globalAndroid.app.Activity, product: org.nativescript.plugins.payments.Product, $this$purchaseProduct_u24lambda_u2422: org.nativescript.plugins.payments.Payments.PurchaseOptions, callback: any): void;
          public setBilling$payments_release(value: com.android.billingclient.api.BillingClient): void;
        }
        export module Payments {
          export class BillingResponse {
            public static class: java.lang.Class<org.nativescript.plugins.payments.Payments.BillingResponse>;
            public getMessage(): string;
            public constructor(code: number, message: string, resolution: string, subCode: number);
            public getRaw(): string;
            public getCode(): number;
            public getResolution(): string;
            public getSubCode(): number;
          }
          export class Companion {
            public static class: java.lang.Class<org.nativescript.plugins.payments.Payments.Companion>;
            public isSupported($this$isSupported_u24lambda_u240: globalAndroid.content.Context): boolean;
            public showManageSubscriptions(context: globalAndroid.content.Context): void;
            public showManageSubscriptions(id: globalAndroid.content.Context, url: string, uri: string): void;
            public getEnableDebug(): boolean;
            public mapResponseCode$payments_release(code: number): org.nativescript.plugins.payments.Payments.BillingResponse;
            public setEnableDebug(value: boolean): void;
            public showManageSubscriptions(context: globalAndroid.content.Context, packageName: string): void;
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
            public getSubscriptionUpdateReplacementMode(): org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode;
            public constructor();
            public getAccountId(): string;
            public setAccountId(value: string): void;
            public setSubscriptionUpdateToken(value: string): void;
            public setSubscriptionUpdateReplacementMode(value: org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode): void;
            public getSubscriptionUpdateToken(): string;
            public setProfileId(value: string): void;
            public getProfileId(): string;
            public getSetIsOfferPersonalized(): boolean;
            public setSetIsOfferPersonalized(value: boolean): void;
          }
          export module PurchaseOptions {
            export class ReplacementMode {
              public static class: java.lang.Class<org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode>;
              public static Unknown: org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode;
              public static WithTimeProration: org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode;
              public static ChargeProratedPrice: org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode;
              public static WithoutProration: org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode;
              public static ChargeFullPrice: org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode;
              public static Deferred: org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode;
              public static values(): androidNative.Array<org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode>;
              public static valueOf(value: string): org.nativescript.plugins.payments.Payments.PurchaseOptions.ReplacementMode;
              public static getEntries(): any;
              public getValue(): number;
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
        export class Product {
          public static class: java.lang.Class<org.nativescript.plugins.payments.Product>;
          public getTitle(): string;
          public getProduct(): com.android.billingclient.api.ProductDetails;
          public getId(): string;
          public getName(): string;
          public getType(): org.nativescript.plugins.payments.Product.Type;
          public constructor(product: com.android.billingclient.api.ProductDetails);
          public getPriceAmountMicros(): java.lang.Long;
          public getPriceFormatted(): string;
          public getDescription(): string;
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
          public getOrderId(): string;
          public getOriginalJson(): org.json.JSONObject;
          public finish(params: any): void;
          public isExpired(): boolean;
          public getToken(): string;
          public isAcknowledged(): boolean;
          public constructor(purchase: com.android.billingclient.api.Purchase, type: org.nativescript.plugins.payments.Product.Type, payments: org.nativescript.plugins.payments.Payments);
          public getQuantity(): number;
          public getOrderDate(): number;
          public getPurchase(): com.android.billingclient.api.Purchase;
          public getProductId(): string;
          public getSignature(): string;
          public getType(): org.nativescript.plugins.payments.Product.Type;
          public isAutoRenewing(): boolean;
          public getState(): org.nativescript.plugins.payments.Transaction.State;
          public getDeveloperPayload(): string;
          public getOriginalJsonString(): string;
          public getProducts(): java.util.List<string>;
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
