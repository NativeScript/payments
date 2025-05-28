import { Observable } from '@nativescript/core';
import { CardEntryOptions } from '.';

export enum CardBrand {
  other = 'other',
  visa = 'visa',
  mastercard = 'mastercard',
  americanExpress = 'american_express',
  discover = 'discover',
  discoverDiners = 'discover_diners',
  jcb = 'jcb',
  chinaUnionPay = 'china_union_pay',
  squareGiftCard = 'square_gift_card',
}

export enum CardType {
  credit = 'credit',
  debit = 'debit',
  unknown = 'unknown',
}

export enum CardPrepaidType {
  unknown = 'unknown',
  notPrepaid = 'not_prepaid',
  prepaid = 'prepaid',
}

export class SquareInAppPaymentsCommon extends Observable {
  /**
   * The Square application ID for your app.
   * This is required to use the Square In-App Payments SDK.
   *
   * Set this value before calling any other methods in the SDK.
   */
  public get squareApplicationID(): string | null {
    console.error('squareApplicationID getter not implemented for this platform');
    return null;
  }

  public set squareApplicationID(appId: string) {
    console.error('squareApplicationID setter not implemented for this platform');
  }

  public startCardEntry(options?: CardEntryOptions) {
    console.error('startCardEntry method not implemented for this platform');
  }

  public dismiss() {
    console.error('dismiss method not implemented for this platform');
  }

  /**
   * iOS only
   */
  protected createTheme(config?: Partial<SQIPTheme>) {
    console.error('createTheme method not implemented for this platform');
    return;
  }

  protected getRootViewController() {
    console.error('getRootViewController method not implemented for this platform');
    return null;
  }
}
