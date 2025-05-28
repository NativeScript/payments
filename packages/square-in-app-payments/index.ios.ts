// custom PassKit typings for Square In-App Payments SDK
/// <reference path="./typings/objc!PassKit.d.ts" />

import { CardEntryOptions } from '.';
import { SquareInAppPaymentsCommon, CardBrand, CardType, CardPrepaidType } from './common';

export { CardBrand, CardType, CardPrepaidType };

function getCardBrand(brand: CardBrand): SQIPCardBrand {
  switch (brand) {
    case CardBrand.visa:
      return SQIPCardBrand.Visa;
    case CardBrand.mastercard:
      return SQIPCardBrand.Mastercard;
    case CardBrand.americanExpress:
      return SQIPCardBrand.AmericanExpress;
    case CardBrand.discover:
      return SQIPCardBrand.Discover;
    case CardBrand.discoverDiners:
      return SQIPCardBrand.DiscoverDiners;
    case CardBrand.jcb:
      return SQIPCardBrand.JCB;
    case CardBrand.chinaUnionPay:
      return SQIPCardBrand.ChinaUnionPay;
    case CardBrand.squareGiftCard:
      return SQIPCardBrand.SquareGiftCard;
    case CardBrand.other:
      return SQIPCardBrand.OtherBrand;
    default:
      throw new Error('Invalid CardBrand');
  }
}

function toCardBrand(brand: SQIPCardBrand): CardBrand {
  switch (brand) {
    case SQIPCardBrand.Visa:
      return CardBrand.visa;
    case SQIPCardBrand.Mastercard:
      return CardBrand.mastercard;
    case SQIPCardBrand.AmericanExpress:
      return CardBrand.americanExpress;
    case SQIPCardBrand.Discover:
      return CardBrand.discover;
    case SQIPCardBrand.DiscoverDiners:
      return CardBrand.discoverDiners;
    case SQIPCardBrand.JCB:
      return CardBrand.jcb;
    case SQIPCardBrand.ChinaUnionPay:
      return CardBrand.chinaUnionPay;
    case SQIPCardBrand.SquareGiftCard:
      return CardBrand.squareGiftCard;
    default:
      return CardBrand.other;
  }
}

function getCardType(type: CardType): SQIPCardType {
  switch (type) {
    case CardType.credit:
      return SQIPCardType.Credit;
    case CardType.debit:
      return SQIPCardType.Debit;
    case CardType.unknown:
      return SQIPCardType.Unknown;
    default:
      throw new Error('Invalid CardType');
  }
}

function toCardType(type: SQIPCardType): CardType {
  switch (type) {
    case SQIPCardType.Credit:
      return CardType.credit;
    case SQIPCardType.Debit:
      return CardType.debit;
    case SQIPCardType.Unknown:
      return CardType.unknown;
    default:
      throw new Error('Invalid CardType');
  }
}

function getCardPrepaidType(type: CardPrepaidType): SQIPCardPrepaidType {
  switch (type) {
    case CardPrepaidType.notPrepaid:
      return SQIPCardPrepaidType.NotPrepaid;
    case CardPrepaidType.prepaid:
      return SQIPCardPrepaidType.Prepaid;
    case CardPrepaidType.unknown:
      return SQIPCardPrepaidType.Unknown;
    default:
      throw new Error('Invalid CardPrepaidType');
  }
}

function toCardPrepaidType(type: SQIPCardPrepaidType): CardPrepaidType {
  switch (type) {
    case SQIPCardPrepaidType.NotPrepaid:
      return CardPrepaidType.notPrepaid;
    case SQIPCardPrepaidType.Prepaid:
      return CardPrepaidType.prepaid;
    case SQIPCardPrepaidType.Unknown:
      return CardPrepaidType.unknown;
    default:
      throw new Error('Invalid CardPrepaidType');
  }
}

export class Card {
  _card: SQIPCard;

  constructor(card: SQIPCard);
  constructor(brand: CardBrand | SQIPCard, lastFourDigits?: string, expirationMonth?: number, expirationYear?: number, postalCode?: string, type?: CardType, prepaidType?: CardPrepaidType) {
    if (brand instanceof SQIPCard) {
      this._card = brand as never;
    }
  }

  static fromNative(card: SQIPCard) {
    if (!card) {
      return null;
    }
    const ret = new Card(card);
    return ret;
  }

  get native() {
    return this._card;
  }

  get brand(): string {
    return toCardBrand(this._card.brand);
  }

  get type(): string {
    return toCardType(this._card.type);
  }

  get prepaidType(): string {
    return toCardPrepaidType(this._card.prepaidType);
  }

  get lastFourDigits(): string {
    return this._card.lastFourDigits;
  }

  get expirationMonth(): number {
    return this._card.expirationMonth;
  }

  get expirationYear(): number {
    return this._card.expirationYear;
  }

  get postalCode(): string {
    return this._card.postalCode;
  }

  toJSON() {
    return {
      brand: this.brand,
      type: this.type,
      prepaidType: this.prepaidType,
      lastFourDigits: this.lastFourDigits,
      expirationMonth: this.expirationMonth,
      expirationYear: this.expirationYear,
      postalCode: this.postalCode,
    };
  }
}

export class CardDetails {
  _cardDetails: SQIPCardDetails;
  _card: Card;
  _nonce: string;

  get card(): Card {
    if (!this._card) {
      this._card = Card.fromNative(this._cardDetails.card);
    }
    return this._card;
  }

  get nonce(): string {
    if (!this._nonce) {
      this._nonce = this._cardDetails.nonce;
    }
    return this._nonce;
  }

  static fromNative(cardDetails: SQIPCardDetails) {
    if (!cardDetails) {
      return null;
    }
    const ret = new CardDetails();
    ret._cardDetails = cardDetails;
    return ret;
  }

  toJSON() {
    return {
      card: this.card,
      nonce: this.nonce,
    };
  }
}

export class SquareInAppPayments extends SquareInAppPaymentsCommon {
  public static init() {
    // noop
  }

  public static onResponse: (cardDetails: CardDetails, complete: (error?: string) => void) => string | null | undefined;

  public static onComplete: (cancelled: boolean, card: CardDetails) => void;

  public override get squareApplicationID(): string | null {
    return SQIPInAppPaymentsSDK.squareApplicationID;
  }

  public override set squareApplicationID(appId: string) {
    SQIPInAppPaymentsSDK.squareApplicationID = appId;
  }
  public get canUseApplePay(): boolean {
    return SQIPInAppPaymentsSDK.canUseApplePay;
  }

  public override startCardEntry(options?: CardEntryOptions): void {
    const theme = this.createTheme(options?.themeConfig);
    const controller = NSCSQIPCardEntryViewController.alloc().initWithThemeIsGiftCard(theme, options?.isGiftCard ?? false);
    controller.onComplete = (cancelled: boolean, cardDetails: SQIPCardDetails) => {
      SquareInAppPayments.onComplete?.(cancelled, CardDetails.fromNative(cardDetails));
      this.dismiss();
    };
    controller.onResponse = (cardDetails: SQIPCardDetails, complete: (error?: string) => void) => {
      if (SquareInAppPayments.onResponse) {
        SquareInAppPayments.onResponse(CardDetails.fromNative(cardDetails), (error?: string) => {
          if (error && typeof error === 'string') {
            complete(error);
          } else {
            complete(null);
          }
        });
      }
    };

    controller.collectPostalCode = options?.collectPostalCode ?? true;

    const navController = UINavigationController.alloc().initWithRootViewController(controller);

    const rootVC = this.getRootViewController();
    if (rootVC) {
      rootVC.presentViewControllerAnimatedCompletion(navController, true, null);
    } else {
      console.error('No root view controller found to present Square Card Entry UI');
    }
  }

  public override dismiss(animated = true): void {
    const rootVC = this.getRootViewController();
    if (!rootVC) {
      console.error('No root view controller found to dismiss Square Card Entry UI');
      return;
    }

    const presentedVC = rootVC?.presentedViewController;

    if (presentedVC instanceof UINavigationController && presentedVC.viewControllers.firstObject instanceof SQIPCardEntryViewController) {
      presentedVC.dismissViewControllerAnimatedCompletion(animated, null);
    } else {
      console.warn('No card entry controller is currently presented.');
    }
  }

  override createTheme(config?: Partial<SQIPTheme>): SQIPTheme {
    const theme = SQIPTheme.alloc().init();
    if (!config || (config && !Object.keys(config)?.length)) {
      return theme;
    }

    if (config.font) theme.font = config.font;
    if (config.backgroundColor) theme.backgroundColor = config.backgroundColor;
    if (config.foregroundColor) theme.foregroundColor = config.foregroundColor;
    if (config.textColor) theme.textColor = config.textColor;
    if (config.placeholderTextColor) theme.placeholderTextColor = config.placeholderTextColor;
    if (config.tintColor) theme.tintColor = config.tintColor;
    if (config.messageColor) theme.messageColor = config.messageColor;
    if (config.errorColor) theme.errorColor = config.errorColor;
    if (config.saveButtonTitle) theme.saveButtonTitle = config.saveButtonTitle;
    if (config.saveButtonFont) theme.saveButtonFont = config.saveButtonFont;
    if (config.saveButtonTextColor) theme.saveButtonTextColor = config.saveButtonTextColor;
    if (config.keyboardAppearance !== undefined) theme.keyboardAppearance = config.keyboardAppearance;
    if (config.cancelButton) theme.cancelButton = config.cancelButton;

    return theme;
  }

  public createApplePayRequest(merchantId: string, countryCode: string, currencyCode: string): PKPaymentRequest {
    return PKPaymentRequest.squarePaymentRequestWithMerchantIdentifierCountryCodeCurrencyCode(merchantId, countryCode, currencyCode);
  }

  public performApplePayNonceRequest(payment: PKPayment, callback: (cardDetails?: SQIPCardDetails, error?: NSError | null) => void): void {
    const request = SQIPApplePayNonceRequest.alloc().initWithPayment(payment);
    request.performWithCompletionHandler((cardDetails: SQIPCardDetails, error: NSError | null) => {
      callback(cardDetails, error);
    });
  }

  override getRootViewController(): UIViewController | undefined {
    const keyWindow = UIApplication.sharedApplication.keyWindow;
    return keyWindow != null ? keyWindow.rootViewController : undefined;
  }
}
