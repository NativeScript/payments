import { BaseItem } from './common';

export class Item extends BaseItem {
  public nativeValue: SKProduct;

  constructor(nativeValue: SKProduct) {
    super(nativeValue);

    const formatter = NSNumberFormatter.alloc().init();
    formatter.numberStyle = NSNumberFormatterStyle.CurrencyStyle;
    formatter.locale = nativeValue.priceLocale;

    this.itemId = nativeValue.productIdentifier;
    this.localizedDescription = nativeValue.localizedDescription;
    this.localizedTitle = nativeValue.localizedTitle;
    this.priceAmount = nativeValue.price.doubleValue;
    this.priceFormatted = formatter.stringFromNumber(nativeValue.price as any);
    this.priceCurrencyCode = <string>nativeValue.priceLocale.objectForKey(NSLocaleCurrencyCode);
    this.isFamilyShareable = nativeValue.isFamilyShareable;
  }

  public get debug(): string | null {
    if (this.nativeValue) {
      const temp: any = {};
      for (const i in this.nativeValue) {
        if ((<any>this.nativeValue)[i] != null) {
          temp[i] = (<any>this.nativeValue)[i];
        }
      }

      return JSON.stringify(temp);
    } else {
      return null;
    }
  }
}
