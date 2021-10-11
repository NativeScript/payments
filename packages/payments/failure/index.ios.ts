import { BaseFailure, FailureTypes } from './common';

export { FailureTypes } from './common';

export class Failure extends BaseFailure {
  constructor(errorCode: number | null) {
    super(errorCode);
    switch (
      errorCode // TODO Handle Domain?
    ) {
      case SKErrorCode.Unknown /*0*/:
        this._type = FailureTypes.UNSPECIFIED;
        this._description = 'Indicates that an unknown or unexpected error occurred.';
        break;
      case SKErrorCode.ClientInvalid /*1*/:
        this._type = FailureTypes.PRODUCT_ALREADY_OWNED;
        this._description = 'Indicates that the client is not allowed to perform the attempted action.';
        break;
      case SKErrorCode.PaymentCancelled /*2*/:
        this._type = FailureTypes.USER_CANCELLED;
        this._description = 'Indicates that the user cancelled a payment request.';
        break;
      case SKErrorCode.PaymentInvalid /*3*/:
        this._type = FailureTypes.DEVELOPER_USAGE;
        this._description = 'Indicates that one of the payment parameters was not recognized by the Apple App Store.';
        break;
      case SKErrorCode.PaymentNotAllowed /*4*/:
        this._type = FailureTypes.BILLING_AVAILABILITY;
        this._description = 'Indicates that the user is not allowed to authorize payments.';
        break;
      case SKErrorCode.StoreProductNotAvailable /*5*/:
        this._type = FailureTypes.PRODUCT_UNAVAILABLE;
        this._description = 'Indicates that the requested product is not available in the store.';
        break;
      case SKErrorCode.CloudServicePermissionDenied /*6*/:
        this._type = FailureTypes.BILLING_AVAILABILITY;
        this._description = 'Indicates that the user has not allowed access to Cloud service information.';
        break;
      case SKErrorCode.CloudServiceNetworkConnectionFailed /*7*/:
        this._type = FailureTypes.NETWORK_AVAILABILITY;
        this._description = 'Indicates that the device could not connect to the network.';
        break;
      case SKErrorCode.CloudServiceRevoked /*8*/:
        this._type = FailureTypes.BILLING_AVAILABILITY;
        this._description = 'Indicates that the user has revoked permission to use this cloud service.';
        break;
      case 999 /*Custom for attempting to finish an incomplete transaction*/:
        this._type = FailureTypes.PRODUCT_NOT_OWNED;
        this._description = 'Indicates attempt to finalize invalid, provisional, or restored order.';
        break;
      default:
        this._type = FailureTypes.UNSPECIFIED;
        this._description = 'Not a known native error code.';
        break;
    }
  }
}
