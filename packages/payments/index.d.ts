export type FailureTypes = 'DEFERRED_PAYMENT' | 'PURCHASE_NOT_ALLOWED' | 'PRODUCT_UNAVAILABLE' | 'DEVELOPER_USAGE' | 'PRODUCT_ALREADY_OWNED' | 'PRODUCT_NOT_OWNED' | 'USER_CANCELLED' | 'NETWORK_AVAILABILITY' | 'BILLING_AVAILABILITY' | 'UNSPECIFIED' | 'SERVICE_DISCONNECTED' | 'SERVICE_TIMEOUT' | 'SERVICE_UNAVAILABLE' | 'FEATURE_NOT_SUPPORTED' | 'ERROR' | 'USER_INELIGIBLE' | 'INSUFFICIENT_FUNDS';

export class PaymentError extends Error {
  readonly code: FailureTypes;
  readonly native: any;
  readonly resolution: string;
}

export interface PurchaseOptions {
  accountId?: string;
  android?: {
    accountId?: string;
    profileId?: string;
    isOfferPersonalized?: boolean;
  };
  ios?: {
    quantity?: number;
    simulatesAskToBuyInSandbox?: boolean;
    accountId?: any /* NSUUID */;
  };
}

export class Payment {
  onReady?: () => void;
  onPurchaseUpdate?: (purchases: Array<Transaction>, error: Error | null) => void;
  fetchProducts(itemIds: Array<string>, type: 'inapp' | 'subs'): Promise<Array<Product>>;
  purchaseProduct(product: Product): Promise<void>;
  purchaseProduct(product: Product, options: PurchaseOptions | null | undefined): Promise<void>;
  fetchPurchases(): Promise<Array<Transaction>>;

  static isSupported(): boolean;

  canMakePayments(): boolean;

  connect(): void;

  disconnect(): void;
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

  readonly isAcknowledged: boolean;

  readonly type: 'inapp' | 'subs' | 'unknown';

  readonly isAcknowledged: boolean;

  readonly isExpired: boolean;

  readonly expirationDate: Date;

  readonly isRevoked: boolean;

  readonly revocationDate: Date;

  readonly isAutoRenewing: boolean;

  readonly version: 'v1' | 'v2' | undefined; // iOS store version;

  finish(): Promise<void>;
}

export class Product {
  readonly native: org.nativescript.plugins.payments.Product | NSCProduct;

  readonly id: string;
  readonly name: string;
  readonly description: string;

  readonly title: string;

  readonly localizedTitle: string;

  readonly type: 'inapp' | 'subs' | 'unknown';

  readonly priceFormatted: string | null;

  readonly priceAmountMicros: number | null;
}
