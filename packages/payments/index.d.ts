export class Payment {
  onReady?: () => void;
  onPurchaseUpdate?: (purchases: Array<Transaction>, error: Error | null) => void;
  fetchProducts(itemIds: Array<string>, type: 'inapp' | 'subs'): Promise<Array<Product>>;
  purchaseProduct(product: Product): Promise<void>;
  fetchPurchases(): Promise<Array<Transaction>>;

  static isSupported(): boolean;

  canMakePayments(): boolean;
}

export class Transaction {
  readonly native: org.nativescript.plugins.payments.Transaction | NSCTransaction;

  readonly receiptToken: string;

  readonly signature: string;

  readonly quantity: number;

  readonly productId: string;

  readonly orderId: string;

  readonly orderDate: Date;

  readonly state: 'pending' | 'purchased' | 'unknown';

  finish(): Promise<void>;
}

export class Product {
  readonly native: org.nativescript.plugins.payments.Product | NSCProduct;

  readonly id: string;
  readonly name: string;
  readonly description: string;

  readonly title: string;

  readonly localizedTitle: string;

  readonly type: 'inapp' | 'subs';

  readonly priceFormatted: string | null;

  readonly priceAmountMicros: number | null;
}

export class Transaction {
  native: org.nativescript.plugins.payments.Transaction;
  readonly json: any;
  readonly signature: string;
  readonly quantity: number;
  readonly orderId: string;
  readonly state: 'pending' | 'purchased' | 'unknown';
  finish(): Promise<void>;
}
