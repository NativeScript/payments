import { BaseItem } from './common';
type ProductDetails = com.android.billingclient.api.ProductDetails;

export class Item extends BaseItem {
  public nativeValue: ProductDetails;

  constructor(nativeValue: ProductDetails) {
    super(nativeValue);

    this.itemId = nativeValue.getProductId();
    this.localizedDescription = nativeValue.getDescription();
    this.localizedTitle = nativeValue.getTitle();
    this.type = nativeValue.getProductType();
    if (this.type === com.android.billingclient.api.BillingClient.SkuType.INAPP) {
        const details = nativeValue.getOneTimePurchaseOfferDetails();
        this.priceAmount = details.getPriceAmountMicros() / 1000000;
        this.priceFormatted = details.getFormattedPrice();
        this.priceCurrencyCode = details.getPriceCurrencyCode();
    } else if (this.type === com.android.billingclient.api.BillingClient.SkuType.SUBS) {
        const subscriptionOfferDetails = nativeValue.getSubscriptionOfferDetails().get(0)
        this.offerToken = subscriptionOfferDetails.getOfferToken();
        const pricingPhaseList = subscriptionOfferDetails.getPricingPhases().getPricingPhaseList();
        for (let i = 0; i < pricingPhaseList.size(); i++) {
            let details = pricingPhaseList.get(pricingPhaseList.size() - 1);
            if (details.getPriceAmountMicros() > 0) {
                this.priceAmount = details.getPriceAmountMicros() / 1000000;
                this.priceFormatted = details.getFormattedPrice();
                this.priceCurrencyCode = details.getPriceCurrencyCode();
                break;
            }
        }
    }
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
