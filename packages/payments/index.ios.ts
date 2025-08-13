import { Utils } from '@nativescript/core';
import type { PurchaseOptions } from '.';

export class PaymentError extends Error {
  private nativeError: NSCPaymentsResponse;
  constructor(message: string, nativeError?: any) {
    super(message);
    this.nativeError = nativeError;
  }

  get code(): number {
    return this.nativeError?.code ?? Number.MAX_SAFE_INTEGER;
  }

  get subCode(): number {
    return Number.MAX_SAFE_INTEGER;
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
  readonly native: NSCTransaction;
  constructor(native: NSCTransaction) {
    this.native = native;
  }

  static fromNative(native: NSCTransaction): Transaction {
    if (native instanceof NSCTransaction) {
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
    return this.state === 'purchased';
  }

  get state(): 'pending' | 'purchased' | 'unknown' {
    switch (this.native.state) {
      case NSCTransactionState.Pending:
        return 'pending';
      case NSCTransactionState.Purchased:
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
    };
  }
}

export class Product {
  readonly native: NSCProduct;
  constructor(native: NSCProduct) {
    this.native = native;
  }

  static fromNative(native: NSCProduct): Product {
    if (native instanceof NSCProduct) {
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
  constructor() {
    this.native = NSCPayments.new();
    this.native.transactionUpdateListener = (transaction) => {
      if (this.onPurchaseUpdate) {
        if (transaction.error) {
          this.onPurchaseUpdate([Transaction.fromNative(transaction)], null);
        } else {
          const error = NSCPaymentsResponse.alloc().initWithCodeMessageResolution(NSCPaymentsResponseFailure.Error, `Usage error: ${transaction.error.localizedDescription}`, '');
          this.onPurchaseUpdate([], new PaymentError(transaction.error.localizedDescription, error));
        }
      }
    };

    setTimeout(() => {
      this.onReady();
    }, 100);
  }

  static isSupported(): boolean {
    return NSCPayments.isSupported();
  }

  canMakePayments(): boolean {
    return this.native.canMakePayments();
  }

  restartConnection() {
    // noop
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
      const opts: NSCPurchaseOptions = NSCPurchaseOptions.new();
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
