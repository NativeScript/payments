import { BaseItem } from './common';
export declare type ProductDetails = com.android.billingclient.api.ProductDetails;

export declare class Item extends BaseItem {
  public readonly debug: string | null;

  constructor(nativeValue: ProductDetails | SKProduct);
}
