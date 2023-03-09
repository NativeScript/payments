export type SkuDetails = com.android.billingclient.api.SkuDetails;

export abstract class BaseItem {
  public nativeValue: SkuDetails | SKProduct;
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

  constructor(nativeValue: SkuDetails | SKProduct) {
    this.nativeValue = nativeValue;
  }
}
