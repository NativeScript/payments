declare class NSCPayments extends NSObject {
  static alloc(): NSCPayments; // inherited from NSObject

  static isSupported(): boolean;

  static new(): NSCPayments; // inherited from NSObject

  static showManageSubscriptions(showIn: UIViewController, subscriptionGroupID: string, callback: (p1: string) => void): void;

  incomingPromotionListener: (p1: NSCPaymentsProduct) => boolean;

  isRestoring: boolean;

  pendingTasks: NSArray<any>;

  previousPurchases: NSArray<NSCPaymentsTransaction>;

  promotionListener: any;

  transactionUpdateListener: (p1: NSCPaymentsTransaction) => void;

  updatesListener: any;

  readonly version: NSCPaymentsStoreKitVersion;

  canMakePayments(): boolean;

  fetchProducts(identifiers: NSArray<string> | string[], callback: (p1: NSArray<NSCPaymentsProduct>, p2: NSError) => void): void;

  fetchPurchases(callback: (p1: NSArray<NSCPaymentsTransaction>, p2: NSCPaymentsResponse) => void): void;

  purchaseProduct(product: NSCPaymentsProduct, confirmIn: UIViewController, options: NSCPaymentsPurchaseOptions, callback: (p1: NSCPaymentsResponse) => void): void;
}

declare class NSCPaymentsProduct extends NSObject {
  static alloc(): NSCPaymentsProduct; // inherited from NSObject

  static new(): NSCPaymentsProduct; // inherited from NSObject

  readonly displayName: string;

  readonly id: string;

  readonly isFamilyShareable: boolean;

  isPromoted: boolean;

  readonly price: number;

  readonly priceCurrencyCode: string;

  readonly priceFormatted: string;

  readonly product: any;

  readonly productIdentifier: string;

  promotedOffer: any;

  promotedPayment: SKPayment;

  readonly type: string;

  readonly v1: SKProduct;

  readonly version: NSCPaymentsStoreKitVersion;

  constructor(o: { product: any });

  initWithProduct(product: any, version: NSCPaymentsStoreKitVersion): this;
}

declare class NSCPaymentsPurchaseOptions extends NSObject {
  static alloc(): NSCPaymentsPurchaseOptions; // inherited from NSObject

  static new(): NSCPaymentsPurchaseOptions; // inherited from NSObject

  accountId: string;

  accountUUID: NSUUID;

  quantity: number;

  simulatesAskToBuyInSandbox: boolean;
}

declare class NSCPaymentsResponse extends NSObject {
  static alloc(): NSCPaymentsResponse; // inherited from NSObject

  static new(): NSCPaymentsResponse; // inherited from NSObject

  readonly code: NSCPaymentsResponseFailure;

  readonly message: string;

  readonly raw: string;

  readonly resolution: string;

  constructor(o: { code: NSCPaymentsResponseFailure; message: string; resolution: string });

  initWithCodeMessageResolution(code: NSCPaymentsResponseFailure, message: string, resolution: string): this;
}

declare const enum NSCPaymentsResponseFailure {
  ProductUnavailable = 0,

  DeveloperUsage = 1,

  ProductAlreadyOwned = 2,

  ProductNotOwned = 3,

  UserCancelled = 4,

  NetworkAvailability = 5,

  BillingAvailability = 6,

  Unspecified = 7,

  PurchaseNotAllowed = 8,

  DeferredPayment = 9,

  Error = 10,
}

declare const enum NSCPaymentsStoreKitVersion {
  V1 = 0,

  V2 = 1,
}

declare class NSCPaymentsTransaction extends NSObject {
  static alloc(): NSCPaymentsTransaction; // inherited from NSObject

  static new(): NSCPaymentsTransaction; // inherited from NSObject

  readonly error: NSError;

  errorValue: NSError;

  readonly expirationDate: Date;

  expirationDateV1: Date;

  readonly isAcknowledged: boolean;

  readonly isExpired: boolean;

  readonly isRevoked: boolean;

  readonly orderDate: Date;

  readonly orderId: string;

  readonly productId: string;

  productType: string;

  readonly receipt: string;

  receiptV1: string;

  readonly revocationDate: Date;

  revocationDateV1: Date;

  readonly state: NSCPaymentsTransactionState;

  transaction: any;

  readonly type: string;

  readonly v1: SKPaymentTransaction;

  readonly version: NSCPaymentsStoreKitVersion;

  constructor(o: { transaction: any });

  finish(callback: (p1: NSCPaymentsResponse) => void): void;

  initWithTransaction(transaction: any, version: NSCPaymentsStoreKitVersion): this;
}

declare const enum NSCPaymentsTransactionState {
  Unknown = 0,

  Purchased = 1,

  Pending = 2,
}
