import { BaseItem } from './item.common';
type SkuDetails = com.android.billingclient.api.SkuDetails;

export class Item extends BaseItem {
  public nativeValue: SkuDetails;

  constructor(nativeValue: SkuDetails) {
    super(nativeValue);

    this.itemId = nativeValue.getSku();
    this.localizedDescription = nativeValue.getDescription();
    this.localizedTitle = nativeValue.getTitle();
    this.priceAmount = nativeValue.getPriceAmountMicros() / 1000000;
    this.priceFormatted = nativeValue.getPrice();
    this.priceCurrencyCode = nativeValue.getPriceCurrencyCode();
    this.type = nativeValue.getType();
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
