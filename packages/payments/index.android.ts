import { Utils } from '@nativescript/core';
declare const kotlin: any;

export class PaymentError extends Error {
  private nativeError: any;
  constructor(message: string, nativeError?: any) {
    super(message);
    this.nativeError = nativeError;
  }

  get code(): number {
    return this.nativeError?.getCode() ?? Number.MAX_SAFE_INTEGER;
  }

  get subCode(): number {
    return this.nativeError?.getSubCode() ?? Number.MAX_SAFE_INTEGER;
  }

  get native(): any {
    return this.nativeError;
  }

  private _resolution: string;
  get resolution(): string {
    if (this._resolution) {
      return this._resolution;
    }
    if (this.nativeError && this.nativeError.getResolution) {
      this._resolution = this.nativeError.getResolution();
    }
    return this._resolution ?? '';
  }
}

export class Transaction {
  readonly native: org.nativescript.plugins.payments.Transaction;
  constructor(native: org.nativescript.plugins.payments.Transaction) {
    this.native = native;
  }

  static fromNative(native: org.nativescript.plugins.payments.Transaction): Transaction {
    if (native instanceof org.nativescript.plugins.payments.Transaction) {
      return new Transaction(native);
    }
    return null;
  }

  get receiptToken(): string {
    return this.native.getToken();
  }

  get signature(): string {
    return this.native.getSignature();
  }

  get quantity(): number {
    return this.native.getQuantity();
  }

  get productId(): string {
    return this.native.getProductId();
  }

  get orderId(): string {
    return this.native.getOrderId();
  }

  get orderDate(): Date {
    return new Date(this.native.getOrderDate());
  }

  get state(): 'pending' | 'purchased' | 'unknown' {
    switch (this.native.getState()) {
      case org.nativescript.plugins.payments.Transaction.State.Pending:
        return 'pending';
      case org.nativescript.plugins.payments.Transaction.State.Purchased:
        return 'purchased';
      default:
        return 'unknown';
    }
  }

  finish() {
    return new Promise<void>((resolve, reject) => {
      this.native.finish(
        new kotlin.jvm.functions.Function1({
          invoke(response): void {
            if (response) {
              reject(new Error(response.getMessage()));
              return;
            }
            resolve();
          },
        }),
      );
    });
  }

  toJSON() {
    return {
      json: this.json,
      signature: this.signature,
      quantity: this.quantity,
      orderId: this.orderId,
      state: this.state,
    };
  }
}

export class Product {
  readonly native: org.nativescript.plugins.payments.Product;
  constructor(native: org.nativescript.plugins.payments.Product) {
    this.native = native;
  }

  static fromNative(native: org.nativescript.plugins.payments.Product): Product {
    if (native instanceof org.nativescript.plugins.payments.Product) {
      return new Product(native);
    }
    return null;
  }

  get id(): string {
    return this.native.getId();
  }
  get name(): string {
    return this.native.getName();
  }
  get description(): string {
    return this.native.getDescription();
  }
  get title(): string {
    return this.native.getTitle();
  }

  get localizedTitle(): string {
    return this.native.getProduct().getTitle();
  }

  get type(): 'inapp' | 'subs' {
    return this.native.getType().getToType$payments_release() as 'inapp' | 'subs';
  }

  get priceFormatted(): string | null {
    return this.native.getPriceFormatted();
  }

  get priceAmountMicros(): number | null {
    return this.native.getPriceAmountMicros();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      title: this.title,
      type: this.type,
    };
  }
}

export class Payment {
  readonly native: org.nativescript.plugins.payments.Payments;
  onReady?: () => void;
  onPurchaseUpdate?: (purchases: Array<Transaction>, error: Error | null) => void;
  constructor() {
    this.native = new org.nativescript.plugins.payments.Payments(Utils.android.getCurrentActivity() || Utils.android.getApplicationContext());
    const ref = new WeakRef(this);
    this.native.setOnReadyListener(
      new kotlin.jvm.functions.Function0({
        invoke(): void {
          const owner = ref.get();
          if (owner && owner.onReady) {
            owner.onReady();
          }
        },
      }),
    );

    this.native.setOnPurchaseUpdateListener(
      new kotlin.jvm.functions.Function2({
        invoke(purchase: List<org.nativescript.plugins.payments.Transaction>, info): void {
          const owner = ref.get();
          if (owner && owner.onPurchaseUpdate) {
            if (purchase) {
              const size = purchase.size();
              const transactions: Array<Transaction> = [];
              for (let i = 0; i < size; i++) {
                transactions.push(Transaction.fromNative(purchase.get(i)));
              }
              owner.onPurchaseUpdate(transactions, null);
            } else {
              owner.onPurchaseUpdate([], new PaymentError(info.getMessage(), info));
            }
          }
        },
      }),
    );
  }

  static isSupported(): boolean {
    return org.nativescript.plugins.payments.Payments.isSupported(Utils.android.getCurrentActivity() || Utils.android.getApplicationContext());
  }

  canMakePayments(): boolean {
    return this.native.canMakePayments();
  }

  restartConnection() {
    this.native.restartConnection();
  }

  fetchProducts(productIdentifiers: string[], type: 'subs' | 'inapp') {
    const items = Array.create(java.lang.String, productIdentifiers.length);
    for (let i = 0; i < productIdentifiers.length; i++) {
      items[i] = productIdentifiers[i];
    }
    return new Promise<Product[]>((resolve, reject) => {
      if (type !== 'subs' && type !== 'inapp') {
        return reject(new Error('Invalid type, must be "subs" or "inapp"'));
      }

      this.native.fetchProducts(
        items,
        type === 'subs' ? org.nativescript.plugins.payments.Product.Type.Subs : org.nativescript.plugins.payments.Product.Type.InApp,
        new kotlin.jvm.functions.Function2({
          invoke(products: java.util.List<org.nativescript.plugins.payments.Product>, error): void {
            if (error) {
              return reject(new Error(error));
            }
            const size = products ? products.size() : 0;
            if (!products || size === 0) {
              return resolve([]);
            }
            const productList = [];
            for (let i = 0; i < size; i++) {
              productList.push(new Product(products.get(i)));
            }
            resolve(productList);
          },
        }),
      );
    });
  }

  fetchPurchases() {
    return new Promise<Transaction[]>((resolve, reject) => {
      this.native.fetchPurchases(
        new kotlin.jvm.functions.Function2({
          invoke(transactions: java.util.List<org.nativescript.plugins.payments.Transaction>, error): void {
            if (error) {
              return reject(new Error(error));
            }
            const size = transactions ? transactions.size() : 0;
            if (!transactions || size === 0) {
              return resolve([]);
            }
            const productList = [];
            for (let i = 0; i < size; i++) {
              productList.push(new Transaction(transactions.get(i)));
            }
            resolve(productList);
          },
        }),
      );
    });
  }

  purchaseProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const response = this.native.purchaseProduct(Utils.android.getCurrentActivity(), product.native);
      const code = response.getCode();
      if (code === 0) {
        resolve();
      } else {
        reject(new PaymentError(response.getMessage(), response));
      }
    });
  }
}
