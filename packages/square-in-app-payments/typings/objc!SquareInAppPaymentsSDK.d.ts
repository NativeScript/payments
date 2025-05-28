declare function NSStringFromSQIPCardBrand(cardBrand: SQIPCardBrand): string;

declare function NSStringFromSQIPCardPrepaidType(prepaidType: SQIPCardPrepaidType): string;

declare function NSStringFromSQIPCardType(cardType: SQIPCardType): string;

declare class SQIPApplePayNonceRequest extends NSObject {
  static alloc(): SQIPApplePayNonceRequest; // inherited from NSObject

  static new(): SQIPApplePayNonceRequest; // inherited from NSObject

  constructor(o: { payment: PKPayment });

  initWithPayment(payment: PKPayment): this;

  performWithCompletionHandler(completionHandler: (p1: SQIPCardDetails, p2: NSError) => void): void;
}

declare const enum SQIPApplePayNonceRequestError {
  NoNetwork = 1,

  UnsupportedSDKVersion = 2,

  UsageError = 3,
}

declare var SQIPApplePayNonceRequestErrorDomain: string;

declare class SQIPCard extends NSObject implements NSCopying {
  static alloc(): SQIPCard; // inherited from NSObject

  static new(): SQIPCard; // inherited from NSObject

  readonly brand: SQIPCardBrand;

  readonly expirationMonth: number;

  readonly expirationYear: number;

  readonly lastFourDigits: string;

  readonly postalCode: string;

  readonly prepaidType: SQIPCardPrepaidType;

  readonly type: SQIPCardType;

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum SQIPCardBrand {
  OtherBrand = 0,

  Visa = 1,

  Mastercard = 2,

  AmericanExpress = 3,

  Discover = 4,

  DiscoverDiners = 5,

  JCB = 6,

  ChinaUnionPay = 7,

  SquareGiftCard = 8,
}

declare function SQIPCardBrandFromString(cardBrand: string): SQIPCardBrand;

declare class SQIPCardDetails extends NSObject {
  static alloc(): SQIPCardDetails; // inherited from NSObject

  static new(): SQIPCardDetails; // inherited from NSObject

  readonly card: SQIPCard;

  readonly nonce: string;
}

declare const enum SQIPCardEntryCompletionStatus {
  Canceled = 0,

  Success = 1,
}

declare class SQIPCardEntryViewController extends UIViewController {
  static alloc(): SQIPCardEntryViewController; // inherited from NSObject

  static new(): SQIPCardEntryViewController; // inherited from NSObject

  collectPostalCode: boolean;

  delegate: SQIPCardEntryViewControllerDelegate;

  nscPreviousCard: SQIPCardDetails;

  constructor(o: { theme: SQIPTheme });

  constructor(o: { theme: SQIPTheme; isGiftCard: boolean });

  initWithTheme(theme: SQIPTheme): this;

  initWithThemeIsGiftCard(theme: SQIPTheme, isGiftCard: boolean): this;
}

interface SQIPCardEntryViewControllerDelegate {
  cardEntryViewControllerDidCompleteWithStatus(cardEntryViewController: SQIPCardEntryViewController, status: SQIPCardEntryCompletionStatus): void;

  cardEntryViewControllerDidObtainCardDetailsCompletionHandler(cardEntryViewController: SQIPCardEntryViewController, cardDetails: SQIPCardDetails, completionHandler: (p1: NSError) => void): void;
}
declare var SQIPCardEntryViewControllerDelegate: {
  prototype: SQIPCardEntryViewControllerDelegate;
};

declare const enum SQIPCardPrepaidType {
  Unknown = 0,

  NotPrepaid = 1,

  Prepaid = 2,
}

declare function SQIPCardPrepaidTypeFromString(prepaidType: string): SQIPCardPrepaidType;

declare const enum SQIPCardType {
  Unknown = 0,

  Credit = 1,

  Debit = 2,
}

declare function SQIPCardTypeFromString(type: string): SQIPCardType;

declare var SQIPErrorDebugCodeKey: string;

declare var SQIPErrorDebugMessageKey: string;

declare class SQIPInAppPaymentsSDK extends NSObject {
  static alloc(): SQIPInAppPaymentsSDK; // inherited from NSObject

  static new(): SQIPInAppPaymentsSDK; // inherited from NSObject

  static readonly canUseApplePay: boolean;

  static squareApplicationID: string;
}

declare class SQIPSecureRemoteCommerce extends NSObject {
  static alloc(): SQIPSecureRemoteCommerce; // inherited from NSObject

  static new(): SQIPSecureRemoteCommerce; // inherited from NSObject

  createPaymentRequestSecureRemoteCommerceParametersCompletionHandler(presentingViewController: UIViewController, secureRemoteCommerceParameters: SQIPSecureRemoteCommerceParameters, completionHandler: (p1: SQIPCardDetails, p2: NSError) => void): void;
}

interface SQIPSecureRemoteCommerceParameters {
  amount: number;
}
declare var SQIPSecureRemoteCommerceParameters: interop.StructType<SQIPSecureRemoteCommerceParameters>;

declare class SQIPTheme extends NSObject implements NSCopying {
  static alloc(): SQIPTheme; // inherited from NSObject

  static new(): SQIPTheme; // inherited from NSObject

  backgroundColor: UIColor;

  cancelButton: UIBarButtonItem;

  errorColor: UIColor;

  font: UIFont;

  foregroundColor: UIColor;

  keyboardAppearance: UIKeyboardAppearance;

  messageColor: UIColor;

  placeholderTextColor: UIColor;

  saveButtonFont: UIFont;

  saveButtonTextColor: UIColor;

  saveButtonTitle: string;

  textColor: UIColor;

  tintColor: UIColor;

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var SquareInAppPaymentsSDKVersionNumber: number;

declare var SquareInAppPaymentsSDKVersionString: interop.Reference<number>;
