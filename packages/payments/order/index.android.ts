import { BaseOrder, OrderState } from './common';

export { OrderState } from './common';

export class Order extends BaseOrder {
  public nativeValue: com.android.billingclient.api.Purchase;

  constructor(nativeValue: com.android.billingclient.api.Purchase | com.android.billingclient.api.PurchaseHistoryRecord, restored: boolean = false) {
    super(nativeValue, restored);

    const jsonObject: any = JSON.parse(nativeValue.getOriginalJson());
    // TODO: treat multiple SKUs
    this.itemId = nativeValue.getSkus().get(0) as string;
    this.receiptToken = nativeValue.getPurchaseToken();
    this.dataSignature = nativeValue.getSignature();
    this.userData = jsonObject.developerPayload;
    this.isSubscription = jsonObject.autoRenewing;
    this.orderDate = new Date(nativeValue.getPurchaseTime());
    this.quantity = nativeValue.getQuantity();
    this.acknowledged = true;
    this.orderId = null;
    if (nativeValue instanceof com.android.billingclient.api.Purchase) {
      // PurchaseHistoryRecord is a subset of purchase, so let's fill the gaps here
      this.acknowledged = nativeValue.isAcknowledged();
      this.orderId = nativeValue.getOrderId();
    }
    if (typeof jsonObject.purchaseState !== 'undefined') {
      // console.log('jsonObject.purchaseState:', jsonObject.purchaseState);
      switch (jsonObject.purchaseState) {
        case 0:
          this.state = OrderState.VALID;
          break;
        case 1:
        case 2:
        default:
          if (this.isSubscription) {
            // for now try this:
            this.state = OrderState.VALID;
          } else {
            this.state = OrderState.INVALID;
          }
          break;
      }
    } else {
      // force it to be processed and consumed so it doesn't get stuck
      this.state = OrderState.VALID;
    }
  }

  get debug(): string {
    return this.nativeValue.getOriginalJson();
  }
}
