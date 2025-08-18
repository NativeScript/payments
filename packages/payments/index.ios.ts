import { Utils } from '@nativescript/core';
import type { PurchaseOptions } from '.';

export class PaymentError extends Error {
  private nativeError: NSCPaymentsResponse;
  constructor(message: string, nativeError?: any) {
    super(message);
    this.nativeError = nativeError;
  }

  get code(): string {
    return this.nativeError.raw ?? 'UNSPECIFIED';
  }

  get native(): any {
    return this.nativeError;
  }

  private _resolution: string;
  get resolution(): string {
    if (this._resolution) {
      return this._resolution;
    }
    if (this.nativeError && this.nativeError.resolution) {
      this._resolution = this.nativeError.resolution;
    }
    return this._resolution ?? '';
  }
}

export class Transaction {
  readonly native: NSCPaymentsTransaction;
  constructor(native: NSCPaymentsTransaction) {
    this.native = native;
  }

  static fromNative(native: NSCPaymentsTransaction): Transaction {
    if (native instanceof NSCPaymentsTransaction) {
      return new Transaction(native);
    }
    return null;
  }

  get receiptToken(): string {
    return this.native.receipt;
  }

  get signature(): string {
    return '';
  }

  get quantity(): number {
    return 1;
  }

  get orderId(): string {
    return this.native.orderId;
  }

  get productId(): string {
    return this.native.productId;
  }

  get orderDate(): Date {
    return this.native.orderDate;
  }

  get isAcknowledged(): boolean {
    return this.native.isAcknowledged;
  }

  get state(): 'pending' | 'purchased' | 'unknown' {
    switch (this.native.state) {
      case NSCPaymentsTransactionState.Pending:
        return 'pending';
      case NSCPaymentsTransactionState.Purchased:
        return 'purchased';
      default:
        return 'unknown';
    }
  }

  get type(): 'inapp' | 'subs`' | 'unknown' {
    return this.native.type as never;
  }

  get isExpired(): boolean {
    return this.native.isExpired;
  }

  get expirationDate(): Date {
    return this.native.expirationDate;
  }

  get isRevoked(): boolean {
    return this.native.isRevoked;
  }

  get revocationDate(): Date {
    return this.native.revocationDate;
  }

  get version(): 'v1' | 'v2' {
    switch (this.native.version) {
      case NSCPaymentsStoreKitVersion.V1:
        return 'v1';
      case NSCPaymentsStoreKitVersion.V2:
        return 'v2';
      default:
        return 'v1';
    }
  }

  finish() {
    return new Promise<void>((resolve, reject) => {
      this.native.finish((response) => {
        if (response) {
          reject(new PaymentError(response.message));
          return;
        }
        resolve();
      });
    });
  }

  toJSON() {
    return {
      orderId: this.orderId,
      productId: this.productId,
      orderDate: this.orderDate,
      receiptToken: this.receiptToken,
      signature: this.signature,
      quantity: this.quantity,
      state: this.state,
      isAcknowledged: this.isAcknowledged,
      type: this.type,
      isExpired: this.isExpired,
      expirationDate: this.expirationDate,
      isRevoked: this.isRevoked,
      revocationDate: this.revocationDate,
      version: this.version,
    };
  }
}

export class Product {
  readonly native: NSCPaymentsProduct;
  constructor(native: NSCPaymentsProduct) {
    this.native = native;
  }

  static fromNative(native: NSCPaymentsProduct): Product {
    if (native instanceof NSCPaymentsProduct) {
      return new Product(native);
    }
    return null;
  }

  get id(): string {
    return this.native.id;
  }
  get name(): string {
    return this.native.displayName;
  }
  get description(): string {
    return this.native.description;
  }
  get title(): string {
    return this.native.displayName;
  }

  get localizedTitle(): string {
    return this.native.displayName;
  }

  get type(): 'inapp' | 'subs' | 'unknown' {
    return this.native.type as any;
  }

  get priceFormatted(): string | null {
    return this.native.priceFormatted;
  }

  get priceAmountMicros(): number | null {
    return this.native.price;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      title: this.title,
      type: this.type,
      localizedTitle: this.localizedTitle,
      priceFormatted: this.priceFormatted,
      priceAmountMicros: this.priceAmountMicros,
    };
  }
}

export class Payment {
  readonly native: NSCPayments;
  onReady?: () => void;
  onPurchaseUpdate?: (purchases: Array<Transaction>, error: Error | null) => void;
  onIncomingPromotion?: (product: Product) => void;

  constructor() {
    this.native = NSCPayments.new();
    this.native.transactionUpdateListener = (transaction) => {
      if (this.onPurchaseUpdate) {
        if (transaction.error) {
          const error = NSCPaymentsResponse.alloc().initWithCodeMessageResolution(NSCPaymentsResponseFailure.Error, `Usage error: ${transaction.error.localizedDescription}`, '');
          this.onPurchaseUpdate([], new PaymentError(transaction.error.localizedDescription, error));
        } else {
          this.onPurchaseUpdate([Transaction.fromNative(transaction)], null);
        }
      }
    };
    this.native.incomingPromotionListener = (product) => {
      if (this.onIncomingPromotion) {
        this.onIncomingPromotion(Product.fromNative(product));
        return true;
      }
      return false;
    };

    setTimeout(() => {
      this.onReady();
    }, 100);
  }

  static isSupported(): boolean {
    return NSCPayments.isSupported();
  }

  get forceStoreV1Receipt(): boolean {
    return this.native.alwaysStoreV1Receipt;
  }

  set forceStoreV1Receipt(value: boolean) {
    this.native.alwaysStoreV1Receipt = value;
  }

  canMakePayments(): boolean {
    return this.native.canMakePayments();
  }

  connect() {
    // no-op for iOS
  }

  disconnect() {
    // no-op for iOS
  }

  showSubscriptionsManagement(options?: {
    android?: {
      packageName?: string;
      productId?: string;
    };
    ios?: {
      subscriptionGroupID?: string;
    };
  }) {
    return new Promise<void>((resolve, reject) => {
      NSCPayments.showManageSubscriptions(Utils.ios.getVisibleViewController(Utils.ios.getRootViewController()), options?.ios?.subscriptionGroupID ?? null, (result) => {
        if (result) {
          reject(new Error(result));
        } else {
          resolve();
        }
      });
    });
  }

  fetchProducts(productIdentifiers: string[], type: 'subs' | 'inapp') {
    return new Promise<Product[]>((resolve, reject) => {
      if (type !== 'subs' && type !== 'inapp') {
        return reject(new Error('Invalid type, must be "subs" or "inapp"'));
      }

      this.native.fetchProducts(productIdentifiers, (products, error) => {
        if (error) {
          const ret = NSCPaymentsResponse.alloc().initWithCodeMessageResolution(NSCPaymentsResponseFailure.Error, `Usage error: ${error.localizedDescription}`, '');
          return reject(new PaymentError(error.localizedDescription, ret));
        }
        const size = products ? products.count : 0;
        if (!products || size === 0) {
          return resolve([]);
        }
        const productList = [];
        for (let i = 0; i < size; i++) {
          productList.push(new Product(products.objectAtIndex(i)));
        }
        resolve(productList);
      });
    });
  }

  fetchPurchases() {
    return new Promise<Transaction[]>((resolve, reject) => {
      this.native.fetchPurchases((purchases, error) => {
        if (error) {
          return reject(new PaymentError(error.message, error));
        }
        const size = purchases ? purchases.count : 0;
        if (!purchases || size === 0) {
          return resolve([]);
        }
        const productList = [];
        for (let i = 0; i < size; i++) {
          productList.push(new Transaction(purchases.objectAtIndex(i)));
        }
        resolve(productList);
      });
    });
  }

  purchaseProduct(product: Product, options?: PurchaseOptions | null | undefined): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const opts = NSCPaymentsPurchaseOptions.new();
      if (options && typeof options === 'object') {
        if (options.accountId) {
          opts.accountId = options.accountId;
        }
        if (options.ios && typeof options.ios === 'object') {
          if ('quantity' in options.ios) {
            opts.quantity = options.ios.quantity;
          }
          if ('simulatesAskToBuyInSandbox' in options.ios) {
            opts.simulatesAskToBuyInSandbox = options.ios.simulatesAskToBuyInSandbox;
          }

          if ('accountId' in options.ios && options.ios.accountId instanceof NSUUID) {
            opts.accountUUID = options.ios.accountId;
          }
        }
      }
      this.native.purchaseProduct(product.native, Utils.ios.getVisibleViewController(Utils.ios.getRootViewController()), opts, (response) => {
        if (response) {
          reject(new PaymentError(response.message, response));
        }
        resolve();
      });
    });
  }
}
