type ProductDetails = com.android.billingclient.api.ProductDetails;

export enum RecurrenceMode {
  FINITE_RECURRING = 2,
  INFINITE_RECURRING = 1,
  NON_RECURRING = 3,
}

export abstract class BaseItem {
  public nativeValue: ProductDetails | SKProduct;
  public abstract readonly debug: string | null;

  public itemId: string;
  public localizedTitle: string;
  public localizedDescription: string;
  public priceAmount: number;
  public priceFormatted: string;
  public priceCurrencyCode: string;
  /** Android only */
  public type: string;
  public offerToken: string;
  public pricingPhases: Array<{
    priceAmount: number;
    priceFormatted: string;
    priceCurrencyCode: string;
    billingPeriod: string;
    billingCycleCount: number;
    recurrenceMode: RecurrenceMode;
  }> = [];
  /** iOS only */
  public isFamilyShareable: boolean;

  constructor(nativeValue: ProductDetails | SKProduct) {
    this.nativeValue = nativeValue;
  }
}
