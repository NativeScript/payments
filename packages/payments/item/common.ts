export type ProductDetails = com.android.billingclient.api.ProductDetails;

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
  /** iOS only */
  public isFamilyShareable: boolean;

  constructor(nativeValue: ProductDetails | SKProduct) {
    this.nativeValue = nativeValue;
  }
}
