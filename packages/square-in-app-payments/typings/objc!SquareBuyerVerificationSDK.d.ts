declare function NSStringCountryCodeForCountry(country: SQIPCountry): string;

declare function NSStringCurrencyCodeForCurrency(currency: SQIPCurrency): string;

declare class SQIPBuyerAction extends NSObject {
  static alloc(): SQIPBuyerAction; // inherited from NSObject

  static chargeActionWithMoney(money: SQIPMoney): SQIPBuyerAction;

  static new(): SQIPBuyerAction; // inherited from NSObject

  static storeAction(): SQIPBuyerAction;
}

declare class SQIPBuyerVerificationSDK extends NSObject {
  static alloc(): SQIPBuyerVerificationSDK; // inherited from NSObject

  static new(): SQIPBuyerVerificationSDK; // inherited from NSObject

  static readonly shared: SQIPBuyerVerificationSDK;

  verifyWithParametersThemeViewControllerSuccessFailure(parameters: SQIPVerificationParameters, theme: SQIPTheme, viewController: UIViewController, success: (p1: SQIPBuyerVerifiedDetails) => void, failure: (p1: NSError) => void): void;
}

declare class SQIPBuyerVerifiedDetails extends NSObject {
  static alloc(): SQIPBuyerVerifiedDetails; // inherited from NSObject

  static new(): SQIPBuyerVerifiedDetails; // inherited from NSObject

  readonly didChallengeUser: boolean;

  readonly verificationToken: string;
}

declare class SQIPContact extends NSObject {
  static alloc(): SQIPContact; // inherited from NSObject

  static new(): SQIPContact; // inherited from NSObject

  addressLines: NSArray<string>;

  city: string;

  country: SQIPCountry;

  readonly countryCode: string;

  email: string;

  familyName: string;

  givenName: string;

  phone: string;

  postalCode: string;

  region: string;

  constructor(o: { givenName: string; familyName: string; email: string; addressLines: NSArray<string> | string[]; city: string; region: string; postalCode: string; country: SQIPCountry; phone: string });

  initWithGivenNameFamilyNameEmailAddressLinesCityRegionPostalCodeCountryPhone(givenName: string, familyName: string, email: string, addressLines: NSArray<string> | string[], city: string, region: string, postalCode: string, country: SQIPCountry, phone: string): this;
}

declare const enum SQIPCountry {
  UNKNOWN = 0,

  ZZ = 1,

  AD = 2,

  AE = 3,

  AF = 4,

  AG = 5,

  AI = 6,

  AL = 7,

  AM = 8,

  AO = 9,

  AQ = 10,

  AR = 11,

  AS = 12,

  AT = 13,

  AU = 14,

  AW = 15,

  AX = 16,

  AZ = 17,

  BA = 18,

  BB = 19,

  BD = 20,

  BE = 21,

  BF = 22,

  BG = 23,

  BH = 24,

  BI = 25,

  BJ = 26,

  BL = 27,

  BM = 28,

  BN = 29,

  BO = 30,

  BQ = 31,

  BR = 32,

  BS = 33,

  BT = 34,

  BV = 35,

  BW = 36,

  BY = 37,

  BZ = 38,

  CA = 39,

  CC = 40,

  CD = 41,

  CF = 42,

  CG = 43,

  CH = 44,

  CI = 45,

  CK = 46,

  CL = 47,

  CM = 48,

  CN = 49,

  CO = 50,

  CR = 51,

  CU = 52,

  CV = 53,

  CW = 54,

  CX = 55,

  CY = 56,

  CZ = 57,

  DE = 58,

  DJ = 59,

  DK = 60,

  DM = 61,

  DO = 62,

  DZ = 63,

  EC = 64,

  EE = 65,

  EG = 66,

  EH = 67,

  ER = 68,

  ES = 69,

  ET = 70,

  FI = 71,

  FJ = 72,

  FK = 73,

  FM = 74,

  FO = 75,

  FR = 76,

  GA = 77,

  GB = 78,

  GD = 79,

  GE = 80,

  GF = 81,

  GG = 82,

  GH = 83,

  GI = 84,

  GL = 85,

  GM = 86,

  GN = 87,

  GP = 88,

  GQ = 89,

  GR = 90,

  GS = 91,

  GT = 92,

  GU = 93,

  GW = 94,

  GY = 95,

  HK = 96,

  HM = 97,

  HN = 98,

  HR = 99,

  HT = 100,

  HU = 101,

  ID = 102,

  IE = 103,

  IL = 104,

  IM = 105,

  IN = 106,

  IO = 107,

  IQ = 108,

  IR = 109,

  IS = 110,

  IT = 111,

  JE = 112,

  JM = 113,

  JO = 114,

  JP = 115,

  KE = 116,

  KG = 117,

  KH = 118,

  KI = 119,

  KM = 120,

  KN = 121,

  KP = 122,

  KR = 123,

  KW = 124,

  KY = 125,

  KZ = 126,

  LA = 127,

  LB = 128,

  LC = 129,

  LI = 130,

  LK = 131,

  LR = 132,

  LS = 133,

  LT = 134,

  LU = 135,

  LV = 136,

  LY = 137,

  MA = 138,

  MC = 139,

  MD = 140,

  ME = 141,

  MF = 142,

  MG = 143,

  MH = 144,

  MK = 145,

  ML = 146,

  MM = 147,

  MN = 148,

  MO = 149,

  MP = 150,

  MQ = 151,

  MR = 152,

  MS = 153,

  MT = 154,

  MU = 155,

  MV = 156,

  MW = 157,

  MX = 158,

  MY = 159,

  MZ = 160,

  NA = 161,

  NC = 162,

  NE = 163,

  NF = 164,

  NG = 165,

  NI = 166,

  NL = 167,

  NO = 168,

  NP = 169,

  NR = 170,

  NU = 171,

  NZ = 172,

  OM = 173,

  PA = 174,

  PE = 175,

  PF = 176,

  PG = 177,

  PH = 178,

  PK = 179,

  PL = 180,

  PM = 181,

  PN = 182,

  PR = 183,

  PS = 184,

  PT = 185,

  PW = 186,

  PY = 187,

  QA = 188,

  RE = 189,

  RO = 190,

  RS = 191,

  RU = 192,

  RW = 193,

  SA = 194,

  SB = 195,

  SC = 196,

  SD = 197,

  SE = 198,

  SG = 199,

  SH = 200,

  SI = 201,

  SJ = 202,

  SK = 203,

  SL = 204,

  SM = 205,

  SN = 206,

  SO = 207,

  SR = 208,

  SS = 209,

  ST = 210,

  SV = 211,

  SX = 212,

  SY = 213,

  SZ = 214,

  TC = 215,

  TD = 216,

  TF = 217,

  TG = 218,

  TH = 219,

  TJ = 220,

  TK = 221,

  TL = 222,

  TM = 223,

  TN = 224,

  TO = 225,

  TR = 226,

  TT = 227,

  TV = 228,

  TW = 229,

  TZ = 230,

  UA = 231,

  UG = 232,

  UM = 233,

  US = 234,

  UY = 235,

  UZ = 236,

  VA = 237,

  VC = 238,

  VE = 239,

  VG = 240,

  VI = 241,

  VN = 242,

  VU = 243,

  WF = 244,

  WS = 245,

  YE = 246,

  YT = 247,

  ZA = 248,

  ZM = 249,

  ZW = 250,
}

declare const enum SQIPCurrency {
  UNKNOWN = 0,

  AED = 1,

  AFN = 2,

  ALL = 3,

  AMD = 4,

  ANG = 5,

  AOA = 6,

  ARS = 7,

  AUD = 8,

  AWG = 9,

  AZN = 10,

  BAM = 11,

  BBD = 12,

  BDT = 13,

  BGN = 14,

  BHD = 15,

  BIF = 16,

  BMD = 17,

  BND = 18,

  BOB = 19,

  BOV = 20,

  BRL = 21,

  BSD = 22,

  BTN = 23,

  BWP = 24,

  BYR = 25,

  BZD = 26,

  CAD = 27,

  CDF = 28,

  CHE = 29,

  CHF = 30,

  CHW = 31,

  CLF = 32,

  CLP = 33,

  CNY = 34,

  COP = 35,

  COU = 36,

  CRC = 37,

  CUC = 38,

  CUP = 39,

  CVE = 40,

  CZK = 41,

  DJF = 42,

  DKK = 43,

  DOP = 44,

  DZD = 45,

  EGP = 46,

  ERN = 47,

  ETB = 48,

  EUR = 49,

  FJD = 50,

  FKP = 51,

  GBP = 52,

  GEL = 53,

  GHS = 54,

  GIP = 55,

  GMD = 56,

  GNF = 57,

  GTQ = 58,

  GYD = 59,

  HKD = 60,

  HNL = 61,

  HRK = 62,

  HTG = 63,

  HUF = 64,

  IDR = 65,

  ILS = 66,

  INR = 67,

  IQD = 68,

  IRR = 69,

  ISK = 70,

  JMD = 71,

  JOD = 72,

  JPY = 73,

  KES = 74,

  KGS = 75,

  KHR = 76,

  KMF = 77,

  KPW = 78,

  KRW = 79,

  KWD = 80,

  KYD = 81,

  KZT = 82,

  LAK = 83,

  LBP = 84,

  LKR = 85,

  LRD = 86,

  LSL = 87,

  LTL = 88,

  LVL = 89,

  LYD = 90,

  MAD = 91,

  MDL = 92,

  MGA = 93,

  MKD = 94,

  MMK = 95,

  MNT = 96,

  MOP = 97,

  MRO = 98,

  MUR = 99,

  MVR = 100,

  MWK = 101,

  MXN = 102,

  MXV = 103,

  MYR = 104,

  MZN = 105,

  NAD = 106,

  NGN = 107,

  NIO = 108,

  NOK = 109,

  NPR = 110,

  NZD = 111,

  OMR = 112,

  PAB = 113,

  PEN = 114,

  PGK = 115,

  PHP = 116,

  PKR = 117,

  PLN = 118,

  PYG = 119,

  QAR = 120,

  RON = 121,

  RSD = 122,

  RUB = 123,

  RWF = 124,

  SAR = 125,

  SBD = 126,

  SCR = 127,

  SDG = 128,

  SEK = 129,

  SGD = 130,

  SHP = 131,

  SLL = 132,

  SOS = 133,

  SRD = 134,

  SSP = 135,

  STD = 136,

  SVC = 137,

  SYP = 138,

  SZL = 139,

  THB = 140,

  TJS = 141,

  TMT = 142,

  TND = 143,

  TOP = 144,

  TRY = 145,

  TTD = 146,

  TWD = 147,

  TZS = 148,

  UAH = 149,

  UGX = 150,

  USD = 151,

  USN = 152,

  USS = 153,

  UYI = 154,

  UYU = 155,

  UZS = 156,

  VEF = 157,

  VND = 158,

  VUV = 159,

  WST = 160,

  XAF = 161,

  XAG = 162,

  XAU = 163,

  XBA = 164,

  XBB = 165,

  XBC = 166,

  XBD = 167,

  XCD = 168,

  XDR = 169,

  XOF = 170,

  XPD = 171,

  XPF = 172,

  XPT = 173,

  XTS = 174,

  XXX = 175,

  YER = 176,

  ZAR = 177,

  ZMK = 178,

  ZMW = 179,

  BTC = 180,
}

declare class SQIPMoney extends NSObject {
  static alloc(): SQIPMoney; // inherited from NSObject

  static new(): SQIPMoney; // inherited from NSObject

  readonly amount: number;

  readonly currency: SQIPCurrency;

  readonly currencyCode: string;

  constructor(o: { amount: number; currency: SQIPCurrency });

  initWithAmountCurrency(amount: number, currency: SQIPCurrency): this;
}

declare class SQIPVerificationParameters extends NSObject {
  static alloc(): SQIPVerificationParameters; // inherited from NSObject

  static new(): SQIPVerificationParameters; // inherited from NSObject

  readonly buyerAction: SQIPBuyerAction;

  readonly contact: SQIPContact;

  readonly locationID: string;

  readonly paymentSourceID: string;

  constructor(o: { paymentSourceID: string; buyerAction: SQIPBuyerAction; locationID: string; contact: SQIPContact });

  initWithPaymentSourceIDBuyerActionLocationIDContact(paymentSourceID: string, buyerAction: SQIPBuyerAction, locationID: string, contact: SQIPContact): this;
}

declare const enum SQIPVerificationRequestError {
  ErrorNoNetwork = 1,

  ErrorUnsupportedSDKVersion = 2,

  ErrorFailed = 3,

  ErrorUsageError = 4,

  RuntimeError = 5,
}

declare var SQIPVerificationRequestErrorDomain: string;

declare var SquareBuyerVerificationSDKVersionNumber: number;

declare var SquareBuyerVerificationSDKVersionString: interop.Reference<number>;
