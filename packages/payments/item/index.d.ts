import { BaseItem } from './common';
export declare type SkuDetails = com.android.billingclient.api.SkuDetails;

export declare class Item extends BaseItem {
  public readonly debug: string | null;

  constructor(nativeValue: SkuDetails | SKProduct);
}
