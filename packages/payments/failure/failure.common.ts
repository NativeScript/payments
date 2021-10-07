export abstract class BaseFailure {
  protected _type: FailureTypes | null;
  protected _description: string;
  protected _nativeCode: number | null;

  constructor(errorCode: number | null) {
    this._nativeCode = errorCode;
  }

  public get type(): FailureTypes | null {
    return this._type;
  }

  public get description(): string {
    return this._description;
  }

  public get nativeCode(): number | null {
    return this._nativeCode;
  }
}

export enum FailureTypes {
  PRODUCT_UNAVAILABLE = 'PRODUCT_UNAVAILABLE',
  DEVELOPER_USAGE = 'DEVELOPER_USAGE',
  PRODUCT_ALREADY_OWNED = 'PRODUCT_ALREADY_OWNED',
  PRODUCT_NOT_OWNED = 'PRODUCT_NOT_OWNED',
  USER_CANCELLED = 'USER_CANCELLED',
  NETWORK_AVAILABILITY = 'NETWORK_AVAILABILITY',
  BILLING_AVAILABILITY = 'BILLING_AVAILABILITY',
  UNSPECIFIED = 'UNSPECIFIED'
}
