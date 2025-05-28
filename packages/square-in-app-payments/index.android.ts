import { AndroidActivityResultEventData, Application, Utils } from '@nativescript/core';
import { SquareInAppPaymentsCommon, CardBrand, CardType, CardPrepaidType } from './common';
import { CardEntryOptions } from '.';

export { CardBrand, CardType, CardPrepaidType };

declare const io: any;

@NativeClass()
export class CheckoutActivity extends androidx.appcompat.app.AppCompatActivity {
  public static readonly DEFAULT_CARD_ENTRY_REQUEST_CODE = 1;

  constructor() {
    super();
    return global.__native(this);
  }

  public onCreate(savedInstanceState: android.os.Bundle): void {
    super.onCreate(savedInstanceState);

    const layoutId = this.getResources().getIdentifier('activity_checkout', 'layout', this.getPackageName());
    const sheetView = this.getLayoutInflater().inflate(layoutId, null);
    this.setContentView(sheetView);

    const buttonId = this.getResources().getIdentifier('addCardButton', 'id', this.getPackageName());
    const addCardButton = sheetView.findViewById(buttonId);

    addCardButton.setOnClickListener(
      new android.view.View.OnClickListener({
        onClick: () => {
          sqip.CardEntry.startCardEntryActivity(this, true, CheckoutActivity.DEFAULT_CARD_ENTRY_REQUEST_CODE);
        },
      }),
    );
  }

  public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
    console.log('onActivityResult', requestCode, resultCode, data);

    super.onActivityResult(requestCode, resultCode, data);

    sqip.CardEntry.handleActivityResult(
      data,
      new sqip.Callback<sqip.CardEntryActivityResult>({
        onResult(result: sqip.CardEntryActivityResult) {
          console.log('CardEntryActivityResult:', result);
          if (result.isSuccess()) {
            const cardResult = result.getSuccessValue();
            const card = cardResult.getCard();
            const nonce = cardResult.getNonce();
            console.log('[CardEntry] Success:', nonce);
          } else if (result.isCanceled()) {
            console.log('[CardEntry] Canceled');
            const context = Application.android.context;
            android.widget.Toast.makeText(context, 'Canceled', android.widget.Toast.LENGTH_SHORT).show();
          }
        },
      }),
    );
  }
}

@NativeClass()
export class CardEntryBackgroundHandler extends java.lang.Object implements sqip.CardNonceBackgroundHandler {
  public static interfaces = [sqip.CardNonceBackgroundHandler];

  constructor() {
    super();
    return global.__native(this);
  }

  public handleEnteredCardInBackground(cardDetails: sqip.CardDetails): any {
    try {
      const nonce = cardDetails.getNonce();
      console.log('[CardEntryBackgroundHandler] Received nonce:', nonce);

      const response = this.simulateBackend(nonce);

      if (response.isSuccessful()) {
        return new sqip.CardEntryActivityCommand.Finish();
      } else {
        return new sqip.CardEntryActivityCommand.ShowError(response.errorMessage);
      }
    } catch (e) {
      const context = Application.android.context;
      const resources = context.getResources();
      const msg = resources.getString(resources.getIdentifier('network_failure', 'string', context.getPackageName()));

      return new sqip.CardEntryActivityCommand.ShowError(msg);
    }
  }

  private simulateBackend(nonce: string): { isSuccessful(): boolean; errorMessage: string } {
    return {
      isSuccessful: () => true, // Simulate success
      errorMessage: 'Payment failed on server.',
    };
  }
}

function getCardBrand(brand: CardBrand): sqip.Card.Brand {
  switch (brand) {
    case CardBrand.visa:
      return sqip.Card.Brand.VISA;
    case CardBrand.mastercard:
      return sqip.Card.Brand.MASTERCARD;
    case CardBrand.americanExpress:
      return sqip.Card.Brand.AMERICAN_EXPRESS;
    case CardBrand.discover:
      return sqip.Card.Brand.DISCOVER;
    case CardBrand.discoverDiners:
      return sqip.Card.Brand.DISCOVER_DINERS;
    case CardBrand.jcb:
      return sqip.Card.Brand.JCB;
    case CardBrand.chinaUnionPay:
      return sqip.Card.Brand.CHINA_UNION_PAY;
    case CardBrand.squareGiftCard:
      return sqip.Card.Brand.SQUARE_GIFT_CARD;
    case CardBrand.other:
      return sqip.Card.Brand.OTHER_BRAND;
    default:
      throw new Error('Invalid CardBrand');
  }
}

function toCardBrand(brand: sqip.Card.Brand): CardBrand {
  switch (brand) {
    case sqip.Card.Brand.VISA:
      return CardBrand.visa;
    case sqip.Card.Brand.MASTERCARD:
      return CardBrand.mastercard;
    case sqip.Card.Brand.AMERICAN_EXPRESS:
      return CardBrand.americanExpress;
    case sqip.Card.Brand.DISCOVER:
      return CardBrand.discover;
    case sqip.Card.Brand.DISCOVER_DINERS:
      return CardBrand.discoverDiners;
    case sqip.Card.Brand.JCB:
      return CardBrand.jcb;
    case sqip.Card.Brand.CHINA_UNION_PAY:
      return CardBrand.chinaUnionPay;
    case sqip.Card.Brand.SQUARE_GIFT_CARD:
      return CardBrand.squareGiftCard;
    default:
      return CardBrand.other;
  }
}

function getCardType(type: CardType): sqip.Card.Type {
  switch (type) {
    case CardType.credit:
      return sqip.Card.Type.CREDIT;
    case CardType.debit:
      return sqip.Card.Type.DEBIT;
    case CardType.unknown:
      return sqip.Card.Type.UNKNOWN;
    default:
      throw new Error('Invalid CardType');
  }
}

function toCardType(type: sqip.Card.Type): CardType {
  switch (type) {
    case sqip.Card.Type.CREDIT:
      return CardType.credit;
    case sqip.Card.Type.DEBIT:
      return CardType.debit;
    case sqip.Card.Type.UNKNOWN:
      return CardType.unknown;
    default:
      throw new Error('Invalid CardType');
  }
}

function getCardPrepaidType(type: CardPrepaidType): sqip.Card.PrepaidType {
  switch (type) {
    case CardPrepaidType.notPrepaid:
      return sqip.Card.PrepaidType.NOT_PREPAID;
    case CardPrepaidType.prepaid:
      return sqip.Card.PrepaidType.PREPAID;
    case CardPrepaidType.unknown:
      return sqip.Card.PrepaidType.UNKNOWN;
    default:
      throw new Error('Invalid CardPrepaidType');
  }
}

function toCardPrepaidType(type: sqip.Card.PrepaidType): CardPrepaidType {
  switch (type) {
    case sqip.Card.PrepaidType.NOT_PREPAID:
      return CardPrepaidType.notPrepaid;
    case sqip.Card.PrepaidType.PREPAID:
      return CardPrepaidType.prepaid;
    case sqip.Card.PrepaidType.UNKNOWN:
      return CardPrepaidType.unknown;
    default:
      throw new Error('Invalid CardPrepaidType');
  }
}

export class Card {
  _card: sqip.Card;

  constructor(card: sqip.Card);
  constructor(brand: CardBrand | sqip.Card, lastFourDigits?: string, expirationMonth?: number, expirationYear?: number, postalCode?: string, type?: CardType, prepaidType?: CardPrepaidType) {
    if (brand instanceof sqip.Card) {
      this._card = brand as never;
    } else {
      this._card = new sqip.Card(getCardBrand(brand), lastFourDigits, expirationMonth, expirationYear, postalCode, getCardType(type), getCardPrepaidType(prepaidType));
    }
  }

  static fromNative(card: sqip.Card) {
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
    return toCardBrand(this._card.getBrand());
  }

  get type(): string {
    return toCardType(this._card.getType());
  }

  get prepaidType(): string {
    return toCardPrepaidType(this._card.getPrepaidType());
  }

  get lastFourDigits(): string {
    return this._card.getLastFourDigits();
  }

  get expirationMonth(): number {
    return this._card.getExpirationMonth();
  }

  get expirationYear(): number {
    return this._card.getExpirationYear();
  }

  get postalCode(): string {
    return this._card.getPostalCode();
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
  _cardDetails: sqip.CardDetails;
  _card: Card;
  _nonce: string;

  get card(): Card {
    if (!this._card) {
      this._card = Card.fromNative(this._cardDetails.getCard());
    }
    return this._card;
  }

  get nonce(): string {
    if (!this._nonce) {
      this._nonce = this._cardDetails.getNonce();
    }
    return this._nonce;
  }

  static fromNative(cardDetails: sqip.CardDetails) {
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
  constructor() {
    super();
  }

  private static _didInit = false;

  public static onResponse: (cardDetails: CardDetails, complete: (error?: string) => void) => string | null | undefined;

  public static onComplete: (cancelled: boolean, card: CardDetails) => void;

  public static init() {
    if (this._didInit) {
      return;
    }
    const instance = io.github.triniwiz.launchpoint.squareiap.CardEntryBackgroundHandler.getShared();
    const ref = new WeakRef(this);

    instance.setOnResponse(
      new io.github.triniwiz.launchpoint.squareiap.CardEntryBackgroundHandler.Callback({
        response(cardDetails: sqip.CardDetails, onComplete) {
          const owner = ref.get();
          if (owner && owner.onResponse) {
            owner.onResponse(CardDetails.fromNative(cardDetails), (error) => {
              if (typeof error === 'string') {
                onComplete.onError(error);
              } else {
                onComplete.onSuccess();
              }
            });
          }
        },
      }),
    );

    sqip.CardEntry.setCardNonceBackgroundHandler(instance);

    io.github.triniwiz.launchpoint.squareiap.SquareInAppPayments.setResultListener(
      new io.github.triniwiz.launchpoint.squareiap.SquareInAppPayments.Callback({
        onSuccess(success: boolean, cancelled: boolean, card?: sqip.Card, nonce?: string) {
          const owner = ref.get();
          if (owner && owner.onComplete) {
            if (success) {
              const cardDetails = new CardDetails();
              cardDetails._card = Card.fromNative(card);
              cardDetails._nonce = nonce;
              owner.onComplete(false, cardDetails);
            } else if (cancelled) {
              owner.onComplete(cancelled, null);
            } else {
              owner.onComplete(false, null);
            }
          }
        },
      }),
    );

    Application.android.on(Application.AndroidApplication.activityResultEvent, (args: AndroidActivityResultEventData) => {
      io.github.triniwiz.launchpoint.squareiap.SquareInAppPayments.handleActivityResult(args.requestCode, args.intent);
    });
    this._didInit = true;
  }

  public override get squareApplicationID(): string {
    return sqip.InAppPaymentsSdk.getSquareApplicationId();
  }

  public override set squareApplicationID(app_id: string) {
    sqip.InAppPaymentsSdk.setSquareApplicationId(app_id);
  }

  public override startCardEntry(options?: CardEntryOptions) {
    const activity = Utils.android.getCurrentActivity();

    if (!activity) {
      console.error('No active Android activity found');
      return;
    }

    if (options?.isGiftCard) {
      sqip.CardEntry.startGiftCardEntryActivity(activity, CheckoutActivity.DEFAULT_CARD_ENTRY_REQUEST_CODE);
    } else {
      sqip.CardEntry.startCardEntryActivity(activity, options?.collectPostalCode ?? true, CheckoutActivity.DEFAULT_CARD_ENTRY_REQUEST_CODE);
    }
  }
}
