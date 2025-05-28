import { SquareInAppPaymentsCommon, CardBrand, CardType, CardPrepaidType } from './common';

export interface CardEntryOptions {
  collectPostalCode?: boolean;
  isGiftCard?: boolean;
  themeConfig?: Partial<SQIPTheme>;
}

export { CardBrand, CardType, CardPrepaidType };

export class Card {
  readonly native;

  readonly brand: CardBrand;

  readonly type: CardType;

  readonly prepaidType: CardPrepaidType;

  readonly lastFourDigits: string;

  readonly expirationMonth: number;

  readonly expirationYear: number;

  readonly postalCode: string;
}

export declare class CardDetails {
  readonly card: Card;
  readonly nonce: string;
}

export declare class SquareInAppPayments extends SquareInAppPaymentsCommon {
  static init(): void;
  static onResponse: (card, onComplete: (error?: string) => void) => void;
  static onComplete: (cancelled: boolean, card?: CardDetails) => void;
  startCardEntry(options?: CardEntryOptions): void;
}
