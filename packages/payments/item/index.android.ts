import { BaseItem } from './common';
export { RecurrenceMode } from './common';
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
      const subscriptionOfferDetails: com.android.billingclient.api.ProductDetails.SubscriptionOfferDetails = nativeValue.getSubscriptionOfferDetails().get(0);
      this.offerToken = subscriptionOfferDetails.getOfferToken();
      const pricingPhaseList = subscriptionOfferDetails.getPricingPhases().getPricingPhaseList();
      const listSize = pricingPhaseList.size();
      for (let i = 0; i < listSize; i++) {
        const details: com.android.billingclient.api.ProductDetails.PricingPhase = pricingPhaseList.get(i);
        // what matters is the final price. For example:
        // 3 months free trial
        // 6 months at $1.99
        // rest is $9.99
        // the sub price is $9.99
        if (i === listSize - 1) {
          this.priceAmount = details.getPriceAmountMicros() / 1000000;
          this.priceFormatted = details.getFormattedPrice();
          this.priceCurrencyCode = details.getPriceCurrencyCode();
        }
        this.pricingPhases.push({
          priceAmount: details.getPriceAmountMicros() / 1000000,
          priceFormatted: details.getFormattedPrice(),
          priceCurrencyCode: details.getPriceCurrencyCode(),
          billingPeriod: details.getBillingPeriod(),
          billingCycleCount: details.getBillingCycleCount(),
          recurrenceMode: details.getRecurrenceMode(),
        });
      }
    }
  }

  public get debug(): string {
    return this.nativeValue.toString();
  }
}
