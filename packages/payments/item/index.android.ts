import { BaseItem } from './common';
type ProductDetails = com.android.billingclient.api.ProductDetails;

export class Item extends BaseItem {
  public nativeValue: ProductDetails;

  constructor(nativeValue: ProductDetails) {
    super(nativeValue);

    this.itemId = nativeValue.getProductId();
    this.localizedDescription = nativeValue.getDescription();
    this.localizedTitle = nativeValue.getTitle();
    const details = nativeValue.getOneTimePurchaseOfferDetails();
    this.priceAmount = details.getPriceAmountMicros() / 1000000;
    this.priceFormatted = details.getFormattedPrice();
    this.priceCurrencyCode = details.getPriceCurrencyCode();
    this.type = nativeValue.getProductType();
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
