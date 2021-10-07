export abstract class BaseOrder {
	public nativeValue: com.android.billingclient.api.Purchase | com.android.billingclient.api.PurchaseHistoryRecord | SKPaymentTransaction;
	public abstract readonly debug: string | null;

	public state: OrderState;
	public itemId: string;
	public orderId: string | null;
	public orderDate: Date;
	public receiptToken: string;
	public userData: string;
	public restored: boolean;
	/** Android only */
	public isSubscription: boolean;
	public dataSignature: string;
	public acknowledged: boolean;
	public quantity: number;

	constructor(nativeValue: com.android.billingclient.api.Purchase | com.android.billingclient.api.PurchaseHistoryRecord | SKPaymentTransaction, restored: boolean = false) {
		this.nativeValue = nativeValue;
		this.restored = restored;
	}
}

export enum OrderState {
	INVALID = 'INVALID',
	PROVISIONAL = 'PROVISIONAL',
	VALID = 'VALID',
}
