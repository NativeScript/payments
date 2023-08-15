/* eslint-disable @typescript-eslint/prefer-namespace-keyword */

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
				export class AlternativeBillingListener {
					public static class: java.lang.Class<com.android.billingclient.api.AlternativeBillingListener>;
					/**
					 * Constructs a new instance of the com.android.billingclient.api.AlternativeBillingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						userSelectedAlternativeBilling(param0: com.android.billingclient.api.AlternativeChoiceDetails): void;
					});
					public constructor();
					public userSelectedAlternativeBilling(param0: com.android.billingclient.api.AlternativeChoiceDetails): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module billingclient {
			export module api {
				export class AlternativeChoiceDetails {
					public static class: java.lang.Class<com.android.billingclient.api.AlternativeChoiceDetails>;
					public getProducts(): java.util.List<com.android.billingclient.api.AlternativeChoiceDetails.Product>;
					public getExternalTransactionToken(): string;
					public getOriginalExternalTransactionId(): string;
				}
				export module AlternativeChoiceDetails {
					export class Product {
						public static class: java.lang.Class<com.android.billingclient.api.AlternativeChoiceDetails.Product>;
						public getOfferToken(): string;
						public getType(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getId(): string;
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
				export abstract class BillingClient {
					public static class: java.lang.Class<com.android.billingclient.api.BillingClient>;
					public isReady(): boolean;
					public queryPurchaseHistoryAsync(param0: com.android.billingclient.api.QueryPurchaseHistoryParams, param1: com.android.billingclient.api.PurchaseHistoryResponseListener): void;
					public launchBillingFlow(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.BillingFlowParams): com.android.billingclient.api.BillingResult;
					public endConnection(): void;
					public acknowledgePurchase(param0: com.android.billingclient.api.AcknowledgePurchaseParams, param1: com.android.billingclient.api.AcknowledgePurchaseResponseListener): void;
					public showInAppMessages(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.InAppMessageParams, param2: com.android.billingclient.api.InAppMessageResponseListener): com.android.billingclient.api.BillingResult;
					/** @deprecated */
					public querySkuDetailsAsync(param0: com.android.billingclient.api.SkuDetailsParams, param1: com.android.billingclient.api.SkuDetailsResponseListener): void;
					public getConnectionState(): number;
					public static newBuilder(param0: globalAndroid.content.Context): com.android.billingclient.api.BillingClient.Builder;
					public isFeatureSupported(param0: string): com.android.billingclient.api.BillingResult;
					public startConnection(param0: com.android.billingclient.api.BillingClientStateListener): void;
					public constructor();
					public queryPurchasesAsync(param0: com.android.billingclient.api.QueryPurchasesParams, param1: com.android.billingclient.api.PurchasesResponseListener): void;
					public queryProductDetailsAsync(param0: com.android.billingclient.api.QueryProductDetailsParams, param1: com.android.billingclient.api.ProductDetailsResponseListener): void;
					/** @deprecated */
					public queryPurchasesAsync(param0: string, param1: com.android.billingclient.api.PurchasesResponseListener): void;
					public consumeAsync(param0: com.android.billingclient.api.ConsumeParams, param1: com.android.billingclient.api.ConsumeResponseListener): void;
					/** @deprecated */
					public queryPurchaseHistoryAsync(param0: string, param1: com.android.billingclient.api.PurchaseHistoryResponseListener): void;
				}
				export module BillingClient {
					export class BillingResponseCode {
						public static class: java.lang.Class<com.android.billingclient.api.BillingClient.BillingResponseCode>;
						/**
						 * Constructs a new instance of the com.android.billingclient.api.BillingClient$BillingResponseCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static ITEM_ALREADY_OWNED: number;
						public static SERVICE_TIMEOUT: number;
						public static FEATURE_NOT_SUPPORTED: number;
						public static SERVICE_DISCONNECTED: number;
						public static ITEM_NOT_OWNED: number;
						public static ITEM_UNAVAILABLE: number;
						public static NETWORK_ERROR: number;
						public static USER_CANCELED: number;
						public static SERVICE_UNAVAILABLE: number;
						public static ERROR: number;
						public static OK: number;
						public static BILLING_UNAVAILABLE: number;
						public static DEVELOPER_ERROR: number;
					}
					export class Builder {
						public static class: java.lang.Class<com.android.billingclient.api.BillingClient.Builder>;
						public build(): com.android.billingclient.api.BillingClient;
						public setListener(param0: com.android.billingclient.api.PurchasesUpdatedListener): com.android.billingclient.api.BillingClient.Builder;
						public enableAlternativeBilling(param0: com.android.billingclient.api.AlternativeBillingListener): com.android.billingclient.api.BillingClient.Builder;
						public enablePendingPurchases(): com.android.billingclient.api.BillingClient.Builder;
					}
					export class ConnectionState {
						public static class: java.lang.Class<com.android.billingclient.api.BillingClient.ConnectionState>;
						/**
						 * Constructs a new instance of the com.android.billingclient.api.BillingClient$ConnectionState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
						public constructor(implementation: {
						});
						public constructor();
						public static SUBSCRIPTIONS: string;
						public static PRODUCT_DETAILS: string;
						public static IN_APP_MESSAGING: string;
						public static SUBSCRIPTIONS_UPDATE: string;
						public static PRICE_CHANGE_CONFIRMATION: string;
					}
					export class ProductType {
						public static class: java.lang.Class<com.android.billingclient.api.BillingClient.ProductType>;
						/**
						 * Constructs a new instance of the com.android.billingclient.api.BillingClient$ProductType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static INAPP: string;
						public static SUBS: string;
					}
					export class SkuType {
						public static class: java.lang.Class<com.android.billingclient.api.BillingClient.SkuType>;
						/**
						 * Constructs a new instance of the com.android.billingclient.api.BillingClient$SkuType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
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
					public queryPurchaseHistoryAsync(param0: com.android.billingclient.api.QueryPurchaseHistoryParams, param1: com.android.billingclient.api.PurchaseHistoryResponseListener): void;
					public launchBillingFlow(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.BillingFlowParams): com.android.billingclient.api.BillingResult;
					public endConnection(): void;
					public acknowledgePurchase(param0: com.android.billingclient.api.AcknowledgePurchaseParams, param1: com.android.billingclient.api.AcknowledgePurchaseResponseListener): void;
					public querySkuDetailsAsync(param0: com.android.billingclient.api.SkuDetailsParams, param1: com.android.billingclient.api.SkuDetailsResponseListener): void;
					public showInAppMessages(param0: globalAndroid.app.Activity, param1: com.android.billingclient.api.InAppMessageParams, param2: com.android.billingclient.api.InAppMessageResponseListener): com.android.billingclient.api.BillingResult;
					/** @deprecated */
					public querySkuDetailsAsync(param0: com.android.billingclient.api.SkuDetailsParams, param1: com.android.billingclient.api.SkuDetailsResponseListener): void;
					public queryPurchaseHistoryAsync(param0: string, param1: com.android.billingclient.api.PurchaseHistoryResponseListener): void;
					public queryPurchasesAsync(param0: string, param1: com.android.billingclient.api.PurchasesResponseListener): void;
					public getConnectionState(): number;
					public isFeatureSupported(param0: string): com.android.billingclient.api.BillingResult;
					public startConnection(param0: com.android.billingclient.api.BillingClientStateListener): void;
					public queryPurchasesAsync(param0: com.android.billingclient.api.QueryPurchasesParams, param1: com.android.billingclient.api.PurchasesResponseListener): void;
					public queryProductDetailsAsync(param0: com.android.billingclient.api.QueryProductDetailsParams, param1: com.android.billingclient.api.ProductDetailsResponseListener): void;
					/** @deprecated */
					public queryPurchasesAsync(param0: string, param1: com.android.billingclient.api.PurchasesResponseListener): void;
					public consumeAsync(param0: com.android.billingclient.api.ConsumeParams, param1: com.android.billingclient.api.ConsumeResponseListener): void;
					/** @deprecated */
					public queryPurchaseHistoryAsync(param0: string, param1: com.android.billingclient.api.PurchaseHistoryResponseListener): void;
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
					public static newBuilder(): com.android.billingclient.api.BillingFlowParams.Builder;
				}
				export module BillingFlowParams {
					export class Builder {
						public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.Builder>;
						public setObfuscatedProfileId(param0: string): com.android.billingclient.api.BillingFlowParams.Builder;
						/** @deprecated */
						public setSkuDetails(param0: com.android.billingclient.api.SkuDetails): com.android.billingclient.api.BillingFlowParams.Builder;
						public setIsOfferPersonalized(param0: boolean): com.android.billingclient.api.BillingFlowParams.Builder;
						public setObfuscatedAccountId(param0: string): com.android.billingclient.api.BillingFlowParams.Builder;
						public build(): com.android.billingclient.api.BillingFlowParams;
						public setSubscriptionUpdateParams(param0: com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams): com.android.billingclient.api.BillingFlowParams.Builder;
						public setProductDetailsParamsList(param0: java.util.List<com.android.billingclient.api.BillingFlowParams.ProductDetailsParams>): com.android.billingclient.api.BillingFlowParams.Builder;
					}
					export class ProductDetailsParams {
						public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.ProductDetailsParams>;
						public static newBuilder(): com.android.billingclient.api.BillingFlowParams.ProductDetailsParams.Builder;
					}
					export module ProductDetailsParams {
						export class Builder {
							public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.ProductDetailsParams.Builder>;
							public setOfferToken(param0: string): com.android.billingclient.api.BillingFlowParams.ProductDetailsParams.Builder;
							public build(): com.android.billingclient.api.BillingFlowParams.ProductDetailsParams;
							public setProductDetails(param0: com.android.billingclient.api.ProductDetails): com.android.billingclient.api.BillingFlowParams.ProductDetailsParams.Builder;
						}
					}
					export class ProrationMode {
						public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.ProrationMode>;
						/**
						 * Constructs a new instance of the com.android.billingclient.api.BillingFlowParams$ProrationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static IMMEDIATE_WITH_TIME_PRORATION: number;
						public static DEFERRED: number;
						public static UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY: number;
						public static IMMEDIATE_AND_CHARGE_PRORATED_PRICE: number;
						public static IMMEDIATE_AND_CHARGE_FULL_PRICE: number;
						public static IMMEDIATE_WITHOUT_PRORATION: number;
					}
					export class SubscriptionUpdateParams {
						public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams>;
						public static newBuilder(): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
					}
					export module SubscriptionUpdateParams {
						export class Builder {
							public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder>;
							/** @deprecated */
							public setOldSkuPurchaseToken(param0: string): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
							/** @deprecated */
							public setReplaceSkusProrationMode(param0: number): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
							/** @deprecated */
							public setReplaceProrationMode(param0: number): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
							public build(): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams;
							public setSubscriptionReplacementMode(param0: number): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
							public setOriginalExternalTransactionId(param0: string): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
							public setOldPurchaseToken(param0: string): com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.Builder;
						}
						export class ReplacementMode {
							public static class: java.lang.Class<com.android.billingclient.api.BillingFlowParams.SubscriptionUpdateParams.ReplacementMode>;
							/**
							 * Constructs a new instance of the com.android.billingclient.api.BillingFlowParams$SubscriptionUpdateParams$ReplacementMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static WITHOUT_PRORATION: number;
							public static CHARGE_FULL_PRICE: number;
							public static WITH_TIME_PRORATION: number;
							public static DEFERRED: number;
							public static CHARGE_PRORATED_PRICE: number;
							public static UNKNOWN_REPLACEMENT_MODE: number;
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
				export class InAppMessageParams {
					public static class: java.lang.Class<com.android.billingclient.api.InAppMessageParams>;
					public static newBuilder(): com.android.billingclient.api.InAppMessageParams.Builder;
				}
				export module InAppMessageParams {
					export class Builder {
						public static class: java.lang.Class<com.android.billingclient.api.InAppMessageParams.Builder>;
						public constructor();
						public addInAppMessageCategoryToShow(param0: number): com.android.billingclient.api.InAppMessageParams.Builder;
						public addAllInAppMessageCategoriesToShow(): com.android.billingclient.api.InAppMessageParams.Builder;
						public build(): com.android.billingclient.api.InAppMessageParams;
					}
					export class InAppMessageCategoryId {
						public static class: java.lang.Class<com.android.billingclient.api.InAppMessageParams.InAppMessageCategoryId>;
						/**
						 * Constructs a new instance of the com.android.billingclient.api.InAppMessageParams$InAppMessageCategoryId interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static TRANSACTIONAL: number;
						public static UNKNOWN_IN_APP_MESSAGE_CATEGORY_ID: number;
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
					public constructor(implementation: {
						onInAppMessageResponse(param0: com.android.billingclient.api.InAppMessageResult): void;
					});
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
						public constructor(implementation: {
						});
						public constructor();
						public static SUBSCRIPTION_STATUS_UPDATED: number;
						public static NO_ACTION_NEEDED: number;
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
					public equals(param0: any): boolean;
					public getProductId(): string;
					public toString(): string;
					public getName(): string;
					public getProductType(): string;
					public getSubscriptionOfferDetails(): java.util.List<com.android.billingclient.api.ProductDetails.SubscriptionOfferDetails>;
					public hashCode(): number;
					public getOneTimePurchaseOfferDetails(): com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails;
					public getDescription(): string;
				}
				export module ProductDetails {
					export class OneTimePurchaseOfferDetails {
						public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.OneTimePurchaseOfferDetails>;
						public getFormattedPrice(): string;
						public getPriceCurrencyCode(): string;
						public getPriceAmountMicros(): number;
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
						public constructor(implementation: {
						});
						public constructor();
						public static FINITE_RECURRING: number;
						public static NON_RECURRING: number;
						public static INFINITE_RECURRING: number;
					}
					export class SubscriptionOfferDetails {
						public static class: java.lang.Class<com.android.billingclient.api.ProductDetails.SubscriptionOfferDetails>;
						public getOfferToken(): string;
						public getOfferId(): string;
						public getPricingPhases(): com.android.billingclient.api.ProductDetails.PricingPhases;
						public getOfferTags(): java.util.List<string>;
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
					public constructor(implementation: {
						onProductDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.ProductDetails>): void;
					});
					public constructor();
					public onProductDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.ProductDetails>): void;
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
					/** @deprecated */
					public getSkus(): java.util.ArrayList<string>;
					public getPurchaseState(): number;
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
					public getProducts(): java.util.List<string>;
				}
				export module Purchase {
					export class PurchaseState {
						public static class: java.lang.Class<com.android.billingclient.api.Purchase.PurchaseState>;
						/**
						 * Constructs a new instance of the com.android.billingclient.api.Purchase$PurchaseState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static PENDING: number;
						public static PURCHASED: number;
						public static UNSPECIFIED_STATE: number;
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
					/** @deprecated */
					public getSkus(): java.util.ArrayList<string>;
					public getPurchaseTime(): number;
					public getOriginalJson(): string;
					public getDeveloperPayload(): string;
					public hashCode(): number;
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
					public constructor(implementation: {
						onPurchaseHistoryResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.PurchaseHistoryRecord>): void;
					});
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
					public constructor(implementation: {
						onQueryPurchasesResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.Purchase>): void;
					});
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
					public constructor(implementation: {
						onPurchasesUpdated(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.Purchase>): void;
					});
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
						public setProductList(param0: java.util.List<com.android.billingclient.api.QueryProductDetailsParams.Product>): com.android.billingclient.api.QueryProductDetailsParams.Builder;
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
							public setProductType(param0: string): com.android.billingclient.api.QueryProductDetailsParams.Product.Builder;
							public setProductId(param0: string): com.android.billingclient.api.QueryProductDetailsParams.Product.Builder;
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
				export class QueryPurchaseHistoryParams {
					public static class: java.lang.Class<com.android.billingclient.api.QueryPurchaseHistoryParams>;
					public static newBuilder(): com.android.billingclient.api.QueryPurchaseHistoryParams.Builder;
				}
				export module QueryPurchaseHistoryParams {
					export class Builder {
						public static class: java.lang.Class<com.android.billingclient.api.QueryPurchaseHistoryParams.Builder>;
						public setProductType(param0: string): com.android.billingclient.api.QueryPurchaseHistoryParams.Builder;
						public build(): com.android.billingclient.api.QueryPurchaseHistoryParams;
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
						public build(): com.android.billingclient.api.QueryPurchasesParams;
						public setProductType(param0: string): com.android.billingclient.api.QueryPurchasesParams.Builder;
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
						onSkuDetailsResponse(param0: com.android.billingclient.api.BillingResult, param1: java.util.List<com.android.billingclient.api.SkuDetails>): void;
					});
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
				export class zzab {
					public static class: java.lang.Class<com.android.billingclient.api.zzab>;
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
				export class zzac {
					public static class: java.lang.Class<com.android.billingclient.api.zzac>;
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
				export class zzah extends com.google.android.gms.internal.play_billing.zzf {
					public static class: java.lang.Class<com.android.billingclient.api.zzah>;
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
				export class zzaj implements com.android.billingclient.api.AcknowledgePurchaseResponseListener, com.android.billingclient.api.BillingClientStateListener, com.android.billingclient.api.ConsumeResponseListener, com.android.billingclient.api.PurchaseHistoryResponseListener, com.android.billingclient.api.PurchasesResponseListener, com.android.billingclient.api.PurchasesUpdatedListener, com.android.billingclient.api.SkuDetailsResponseListener {
					public static class: java.lang.Class<com.android.billingclient.api.zzaj>;
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
				export class zzar {
					public static class: java.lang.Class<com.android.billingclient.api.zzar>;
					/**
					 * Constructs a new instance of the com.android.billingclient.api.zzar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						zza(param0: any /* com.google.android.gms.internal.play_billing.zzfb*/): void;
						zzb(param0: any /* com.google.android.gms.internal.play_billing.zzff*/): void;
						zzc(param0: any /* com.google.android.gms.internal.play_billing.zzgd*/): void;
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
				export class zzas {
					public static class: java.lang.Class<com.android.billingclient.api.zzas>;
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
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module billingclient {
			export module api {
				export class zzaw extends com.android.billingclient.api.zzar {
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
				export class zzay {
					public static class: java.lang.Class<com.android.billingclient.api.zzay>;
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
					/**
					 * Constructs a new instance of the com.android.billingclient.api.zzaz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
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
				export class zzb {
					public static class: java.lang.Class<com.android.billingclient.api.zzb>;
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
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module billingclient {
			export module api {
				export class zzbc {
					public static class: java.lang.Class<com.android.billingclient.api.zzbc>;
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
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module billingclient {
			export module api {
				export class zzbg {
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
				export class zzbh {
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
				export class zzbi {
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
				export class zzbj {
					public static class: java.lang.Class<com.android.billingclient.api.zzbj>;
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
				export class zzbk {
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
				export class zzbl {
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
				export class zzbm {
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
				export class zzbn {
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
				export class zzbq {
					public static class: java.lang.Class<com.android.billingclient.api.zzbq>;
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
					public constructor(implementation: {
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
				export class zze {
					public static class: java.lang.Class<com.android.billingclient.api.zze>;
					/**
					 * Constructs a new instance of the com.android.billingclient.api.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
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
				export class zzo {
					public static class: java.lang.Class<com.android.billingclient.api.zzo>;
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
				export class zzt {
					public static class: java.lang.Class<com.android.billingclient.api.zzt>;
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
				export class zzy {
					public static class: java.lang.Class<com.android.billingclient.api.zzy>;
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
				}
			}
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
							public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zza>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzaa extends com.google.android.gms.internal.play_billing.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaa>;
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
						export class zzab extends com.google.android.gms.internal.play_billing.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzab>;
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
						export class zzac extends com.google.android.gms.internal.play_billing.zzy {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzac>;
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
						export class zzad extends com.google.android.gms.internal.play_billing.zzy {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzad>;
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
						export class zzae extends com.google.android.gms.internal.play_billing.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzae>;
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
						export class zzaf extends com.google.android.gms.internal.play_billing.zzx {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaf>;
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
						export class zzag {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzag>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzah {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzah>;
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
						export abstract class zzai extends com.google.android.gms.internal.play_billing.zzah {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzai>;
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
						export abstract class zzaj<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzde*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaj<any,any>>;
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
						export abstract class zzak<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzdf*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzak<any,any>>;
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
						export abstract class zzal implements com.google.android.gms.internal.play_billing.zzcf {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzal>;
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
						export class zzam {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzam>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzan {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzan>;
						}
					}
				}
			}
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzap extends com.google.android.gms.internal.play_billing.zzal implements com.google.android.gms.internal.play_billing.zzcf, com.google.android.gms.internal.play_billing.zzdm {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzap>;
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
						export class zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaq>;
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
						export class zzar extends com.google.android.gms.internal.play_billing.zzat {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzar>;
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
						export class zzas {
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
						export abstract class zzat extends com.google.android.gms.internal.play_billing.zzav {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzat>;
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
						export class zzau extends com.google.android.gms.internal.play_billing.zzax {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzau>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzav {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzav>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzav interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
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
						export abstract class zzaw extends com.google.android.gms.internal.play_billing.zzba {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzaw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzax extends com.google.android.gms.internal.play_billing.zzaw {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzax>;
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
						export class zzay {
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzba {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzba>;
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
						export class zzbc extends com.google.android.gms.internal.play_billing.zzbe {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbc>;
						}
					}
				}
			}
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
						export class zzbf extends com.google.android.gms.internal.play_billing.zzbi {
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
						export abstract class zzbi extends com.google.android.gms.internal.play_billing.zzaq {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzbj extends com.google.android.gms.internal.play_billing.zzey {
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
						export class zzbk extends com.google.android.gms.internal.play_billing.zzal implements com.google.android.gms.internal.play_billing.zzcf, com.google.android.gms.internal.play_billing.zzdm {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbk>;
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
						export class zzbl {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbl>;
						}
					}
				}
			}
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
						export class zzbn {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzbo {
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
						export class zzbp extends com.google.android.gms.internal.play_billing.zzbo {
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
						export class zzbq {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzbr {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzbr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
								zzb(): any /* com.google.android.gms.internal.play_billing.zzew*/;
								zzc(): boolean;
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
						export class zzbs {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbs>;
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
						export class zzbt {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbt>;
							public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzbt>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzbu extends com.google.android.gms.internal.play_billing.zzal implements com.google.android.gms.internal.play_billing.zzcf, com.google.android.gms.internal.play_billing.zzdm {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbu>;
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
						export abstract class zzbv {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzbw extends com.google.android.gms.internal.play_billing.zzdd {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzbx<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzaj<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzbx<any,any>>;
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
						export abstract class zzby extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzby>;
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
						export class zzbz extends com.google.android.gms.internal.play_billing.zzbl {
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
						export class zzc extends com.google.android.gms.internal.play_billing.zzh implements com.google.android.gms.internal.play_billing.zze {
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
						export class zzca {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzca>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzcb<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzak<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcb<any,any>>;
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
						export class zzcc extends com.google.android.gms.internal.play_billing.zzal implements com.google.android.gms.internal.play_billing.zzcf, com.google.android.gms.internal.play_billing.zzdm {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcc>;
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
						export class zzcd {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzcd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
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
						export class zzce {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzce>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzce interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number): boolean;
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
						export class zzcf {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzcf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: number): any /* com.google.android.gms.internal.play_billing.zzcf*/;
								zzb(): void;
								zzc(): boolean;
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
						export class zzch extends com.google.android.gms.internal.play_billing.zzci {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzch>;
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
						export class zzci {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzci>;
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
						export class zzcj {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcj>;
							public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzcj>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzck extends com.google.android.gms.internal.play_billing.zzcl {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzck>;
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
						export class zzcl {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcl>;
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
						export class zzcm extends com.google.android.gms.internal.play_billing.zzal implements com.google.android.gms.internal.play_billing.zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcm>;
							public constructor();
							public size(): number;
							public clear(): void;
							public addAll(param0: java.util.Collection<any>): boolean;
							public constructor(param0: number);
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
						export class zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzcn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(): any /* com.google.android.gms.internal.play_billing.zzcn*/;
								zzf(param0: number): any;
								zzh(): java.util.List<any>;
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
						export class zzcp extends com.google.android.gms.internal.play_billing.zzct {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzcq {
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
						export class zzcr extends com.google.android.gms.internal.play_billing.zzct {
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzct {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzct>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzcu extends com.google.android.gms.internal.play_billing.zzal implements com.google.android.gms.internal.play_billing.zzcf, com.google.android.gms.internal.play_billing.zzdm {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcu>;
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
						export class zzcv extends com.google.android.gms.internal.play_billing.zzdd {
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
						export class zzcw extends com.google.android.gms.internal.play_billing.zzdd {
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
						export class zzcx extends com.google.android.gms.internal.play_billing.zzdq {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcx>;
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
						export class zzcz {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzcz>;
							public hashCode(): number;
							public remove(param0: any): any;
							public entrySet(): java.util.Set<any>;
							public putAll(param0: java.util.Map<any,any>): void;
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
						export abstract class zzd extends com.google.android.gms.internal.play_billing.zzi implements com.google.android.gms.internal.play_billing.zze {
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
						}
					}
				}
			}
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
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzdc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): any /* com.google.android.gms.internal.play_billing.zzdf*/;
								zzb(): boolean;
								zzc(): number;
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
						export class zzdd {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzdd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: java.lang.Class<any>): any /* com.google.android.gms.internal.play_billing.zzdc*/;
								zzc(param0: java.lang.Class<any>): boolean;
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
						export class zzde extends com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzde>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzde interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(): any /* com.google.android.gms.internal.play_billing.zzdf*/;
								zzf(): any /* com.google.android.gms.internal.play_billing.zzdf*/;
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
						export class zzdf extends com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzdf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(): number;
								zzb(): any /* com.google.android.gms.internal.play_billing.zzba*/;
								zzk(): any /* com.google.android.gms.internal.play_billing.zzde*/;
								zzr(param0: any /* com.google.android.gms.internal.play_billing.zzbi*/): void;
								zzf(): any /* com.google.android.gms.internal.play_billing.zzdf*/;
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
						export class zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzdg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzf(): any /* com.google.android.gms.internal.play_billing.zzdf*/;
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
						export class zzdh {
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
						export class zzdi<T>  extends java.lang.Object /* com.google.android.gms.internal.play_billing.zzdp<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdi<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzdj extends com.google.android.gms.internal.play_billing.zzdp<any> {
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
						export class zzdk {
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
						export class zzdm {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzdm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
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
						export class zzdn {
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
						export class zzdo extends com.google.android.gms.internal.play_billing.zzdc {
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
						export class zzdp<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdp<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzdp<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any): number;
								zzb(param0: any): number;
								zze(): any;
								zzf(param0: any): void;
								zzg(param0: any, param1: any): void;
								zzh(param0: any, param1: androidNative.Array<number>, param2: number, param3: number, param4: any /* com.google.android.gms.internal.play_billing.zzan*/): void;
								zzi(param0: any, param1: any /* com.google.android.gms.internal.play_billing.zzey*/): void;
								zzj(param0: any, param1: any): boolean;
								zzk(param0: any): boolean;
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
						export class zzdq {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzdq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: java.lang.Class<any>): any /* com.google.android.gms.internal.play_billing.zzdp<any>*/;
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
						export class zzdr {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzds extends com.google.android.gms.internal.play_billing.zzec {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzds>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzdt {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdt>;
							public remove(): void;
							public hasNext(): boolean;
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
						export class zzdu {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdu>;
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
						export class zzdy {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdy>;
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
						export class zzdz {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzdz>;
						}
					}
				}
			}
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
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: string, param2: string): number;
								zzq(param0: number, param1: string, param2: string): number;
								zzc(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle): number;
								zzd(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								zze(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								zzf(param0: number, param1: string, param2: string, param3: string, param4: string): globalAndroid.os.Bundle;
								zzg(param0: number, param1: string, param2: string, param3: string, param4: string, param5: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								zzh(param0: number, param1: string, param2: string, param3: string, param4: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								zzi(param0: number, param1: string, param2: string, param3: string): globalAndroid.os.Bundle;
								zzj(param0: number, param1: string, param2: string, param3: string, param4: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								zzk(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								zzl(param0: number, param1: string, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
								zzm(param0: number, param1: string, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.gms.internal.play_billing.zzg*/): void;
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
						export class zzea {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzea>;
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
						export class zzeb {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzeb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzec {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzec>;
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
						export class zzed extends com.google.android.gms.internal.play_billing.zzdc {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzed>;
						}
					}
				}
			}
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
						export class zzef {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzef>;
							public constructor(param0: any /* com.google.android.gms.internal.play_billing.zzdf*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzeg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzeg>;
						}
					}
				}
			}
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
						export class zzei extends com.google.android.gms.internal.play_billing.zzeg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzei>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzej {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzej>;
							public previousIndex(): number;
							public nextIndex(): number;
							public remove(): void;
							public hasNext(): boolean;
							public hasPrevious(): boolean;
						}
					}
				}
			}
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
						export class zzel implements com.google.android.gms.internal.play_billing.zzcn {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzel>;
							public size(): number;
							public listIterator(param0: number): java.util.ListIterator<any>;
							public constructor(param0: any /* com.google.android.gms.internal.play_billing.zzcn*/);
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
						export class zzem {
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
						export class zzen extends com.google.android.gms.internal.play_billing.zzep {
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
						export class zzeo extends com.google.android.gms.internal.play_billing.zzep {
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
						export abstract class zzep {
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
						export class zzeq {
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
						export class zzer {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzer>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzes {
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
						export class zzet extends com.google.android.gms.internal.play_billing.zzes {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzet>;
						}
					}
				}
			}
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
						export class zzev {
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
						export class zzew {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzew>;
							public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzew>*/;
						}
					}
				}
			}
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
							public static values(): any /* androidNative.Array<com.google.android.gms.internal.play_billing.zzex>*/;
						}
					}
				}
			}
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
							public constructor(implementation: {
								zzb(param0: number, param1: boolean): void;
								zzc(param0: number, param1: java.util.List<any>, param2: boolean): void;
								zzd(param0: number, param1: any /* com.google.android.gms.internal.play_billing.zzba*/): void;
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
								zzq(param0: number, param1: any, param2: any /* com.google.android.gms.internal.play_billing.zzdp<any>*/): void;
								zzr(param0: number, param1: number): void;
								zzs(param0: number, param1: java.util.List<any>, param2: boolean): void;
								zzt(param0: number, param1: number): void;
								zzu(param0: number, param1: java.util.List<any>, param2: boolean): void;
								zzv(param0: number, param1: any, param2: any /* com.google.android.gms.internal.play_billing.zzdp<any>*/): void;
								zzw(param0: number, param1: number): void;
								zzx(param0: number, param1: java.util.List<any>, param2: boolean): void;
								zzy(param0: number, param1: number): void;
								zzz(param0: number, param1: java.util.List<any>, param2: boolean): void;
								zzA(param0: number, param1: number): void;
								zzB(param0: number, param1: java.util.List<any>, param2: boolean): void;
								zzC(param0: number, param1: number): void;
								zzD(param0: number, param1: java.util.List<any>, param2: boolean): void;
								zzE(param0: number): void;
								zzF(param0: number, param1: string): void;
								zzG(param0: number, param1: java.util.List<any>): void;
								zzH(param0: number, param1: number): void;
								zzI(param0: number, param1: java.util.List<any>, param2: boolean): void;
								zzJ(param0: number, param1: number): void;
								zzK(param0: number, param1: java.util.List<any>, param2: boolean): void;
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
						export class zzez {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzez>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzf extends com.google.android.gms.internal.play_billing.zzi implements com.google.android.gms.internal.play_billing.zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzf>;
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
						export class zzfa extends com.google.android.gms.internal.play_billing.zzbx<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfb extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfc extends com.google.android.gms.internal.play_billing.zzce {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfd {
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
						export class zzfe extends com.google.android.gms.internal.play_billing.zzbx<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzff extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzff>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfg {
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
						export class zzfh extends com.google.android.gms.internal.play_billing.zzbx<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
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
						export class zzfi extends com.google.android.gms.internal.play_billing.zzce {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfj extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfj>;
						}
					}
				}
			}
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfl extends com.google.android.gms.internal.play_billing.zzbx<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfm extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfn extends com.google.android.gms.internal.play_billing.zzcd {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfo extends com.google.android.gms.internal.play_billing.zzce {
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
						export class zzfp {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfp>;
						}
					}
				}
			}
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfr extends com.google.android.gms.internal.play_billing.zzbx<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfs extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfs>;
						}
					}
				}
			}
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfu extends com.google.android.gms.internal.play_billing.zzbx<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
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
						export class zzfv extends com.google.android.gms.internal.play_billing.zzce {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfw extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzfw>;
						}
					}
				}
			}
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzfy extends com.google.android.gms.internal.play_billing.zzbx<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
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
						export class zzfz extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
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
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.play_billing.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: globalAndroid.os.Bundle): void;
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
						export class zzga {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzga>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export class zzgb extends com.google.android.gms.internal.play_billing.zzbx<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
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
						export class zzgc extends com.google.android.gms.internal.play_billing.zzce {
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
						export class zzgd extends com.google.android.gms.internal.play_billing.zzcb<any,any> implements com.google.android.gms.internal.play_billing.zzdg {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzgd>;
						}
					}
				}
			}
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
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzi>;
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
						export class zzl extends com.google.android.gms.internal.play_billing.zzk {
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
						export abstract class zzo extends com.google.android.gms.internal.play_billing.zzai {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzo>;
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
						export class zzp {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzp>;
						}
					}
				}
			}
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
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module play_billing {
						export abstract class zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzr>;
							public contains(param0: any): boolean;
							/** @deprecated */
							public addAll(param0: java.util.Collection<any>): boolean;
							/** @deprecated */
							public add(param0: any): boolean;
							/** @deprecated */
							public remove(param0: any): boolean;
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
						export class zzt extends com.google.android.gms.internal.play_billing.zzu {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzt>;
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
						export abstract class zzu extends com.google.android.gms.internal.play_billing.zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzu>;
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
						export class zzv {
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
						export class zzw {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzw>;
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
						export abstract class zzx {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzx>;
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
							public putAll(param0: java.util.Map<any,any>): void;
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
						export abstract class zzy extends com.google.android.gms.internal.play_billing.zzr {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzy>;
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
						export class zzz {
							public static class: java.lang.Class<com.google.android.gms.internal.play_billing.zzz>;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.internal.play_billing.zzaj:2
//com.google.android.gms.internal.play_billing.zzak:2
//com.google.android.gms.internal.play_billing.zzbx:2
//com.google.android.gms.internal.play_billing.zzcb:2
//com.google.android.gms.internal.play_billing.zzdi:1
//com.google.android.gms.internal.play_billing.zzdp:1

