declare class NSCPayments extends NSObject {
  static alloc(): NSCPayments; // inherited from NSObject

  static isSupported(): boolean;

  static new(): NSCPayments; // inherited from NSObject

  isRestoring: boolean;

  pendingTasks: NSArray<any>;

  previousPurcahses: NSArray<NSCTransaction>;

  transactionUpdateListener: (p1: NSCTransaction) => void;

  updatesListener: any;

  readonly version: NSCPaymentsStoreKitVersion;

  canMakePayments(): boolean;

  fetchProducts(identifiers: NSArray<string> | string[], callback: (p1: NSArray<NSCProduct>, p2: NSError) => void): void;

  fetchPurchases(callback: (p1: NSArray<NSCTransaction>, p2: NSCPaymentsResponse) => void): void;

  purchaseProduct(product: NSCProduct, confirmIn: UIViewController, callback: (p1: NSCPaymentsResponse) => void): void;
}

declare class NSCPaymentsResponse extends NSObject {
  static alloc(): NSCPaymentsResponse; // inherited from NSObject

  static new(): NSCPaymentsResponse; // inherited from NSObject

  readonly code: NSCPaymentsResponseFailure;

  readonly message: string;

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

declare class NSCProduct extends NSObject {
  static alloc(): NSCProduct; // inherited from NSObject

  static new(): NSCProduct; // inherited from NSObject

  readonly displayName: string;

  readonly id: string;

  readonly isFamilyShareable: boolean;

  readonly price: number;

  readonly priceCurrencyCode: string;

  readonly priceFormatted: string;

  readonly product: any;

  readonly productIdentifier: string;

  readonly receiptToken: string;

  readonly v1: SKProduct;

  readonly type: string;

  readonly version: NSCPaymentsStoreKitVersion;

  constructor(o: { product: any });

  initWithProduct(product: any, version: NSCPaymentsStoreKitVersion): this;
}

declare class NSCTransaction extends NSObject {
  static alloc(): NSCTransaction; // inherited from NSObject

  static new(): NSCTransaction; // inherited from NSObject

  readonly error: NSError;

  errorValue: NSError;

  readonly orderId: string;

  readonly productId: string;

  readonly quantity: number;

  readonly orderDate: Date?;

  readonly receipt: string;

  readonly state: NSCTransactionState;

  transaction: any;

  readonly v1: SKPaymentTransaction;

  readonly version: NSCPaymentsStoreKitVersion;

  constructor(o: { transaction: any });

  finish(callback: (p1: NSCPaymentsResponse) => void): void;

  initWithTransaction(transaction: any, version: NSCPaymentsStoreKitVersion): this;
}

declare const enum NSCTransactionState {
  Unknown = 0,

  Purchased = 1,

  Pending = 2,
}
