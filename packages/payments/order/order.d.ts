import { BaseOrder } from './order.common';
declare type Purchase = com.android.billingclient.api.Purchase;
declare type PurchaseHistoryRecord = com.android.billingclient.api.PurchaseHistoryRecord;

export { OrderState } from './order.common';

export declare class Order extends BaseOrder {
	public readonly debug: string | null;

	constructor(nativeValue: Purchase | PurchaseHistoryRecord | SKPaymentTransaction, restored?: boolean);
}
