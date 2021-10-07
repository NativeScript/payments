import { BaseFailure, FailureTypes } from './failure.common';

export { FailureTypes } from './failure.common';

export class Failure extends BaseFailure {
  constructor(errorCode: number | null) {
    super(errorCode);
    switch (errorCode) {
      case com.android.billingclient.api.BillingClient.BillingResponseCode.FEATURE_NOT_SUPPORTED /*-2*/:
        this._type = FailureTypes.BILLING_AVAILABILITY;
        this._description = 'Requested feature is not supported by Play Store on the current device.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.SERVICE_DISCONNECTED /*-1*/:
        this._type = FailureTypes.BILLING_AVAILABILITY;
        this._description = 'Play Store service is not connected now - potentially transient state.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.OK /*0*/:
        this._type = null;
        this._description = 'Success. Not an error.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.USER_CANCELED /*1*/:
        this._type = FailureTypes.USER_CANCELLED;
        this._description = 'User pressed back or canceled a dialog.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.SERVICE_UNAVAILABLE /*2*/:
        this._type = FailureTypes.BILLING_AVAILABILITY;
        this._description = 'Network connection is down.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.BILLING_UNAVAILABLE /*3*/:
        this._type = FailureTypes.BILLING_AVAILABILITY;
        this._description = 'Billing API version is not supported for the type requested.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.ITEM_UNAVAILABLE /*4*/:
        this._type = FailureTypes.PRODUCT_UNAVAILABLE;
        this._description = 'Requested product is not available for purchase.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.DEVELOPER_ERROR /*5*/:
        this._type = FailureTypes.DEVELOPER_USAGE;
        this._description = 'Invalid arguments provided to the API.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.ERROR /*6*/:
        this._type = FailureTypes.UNSPECIFIED;
        this._description = 'Fatal error during the API action.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.ITEM_ALREADY_OWNED /*7*/:
        this._type = FailureTypes.PRODUCT_ALREADY_OWNED;
        this._description = 'Failure to purchase since item is already owned.';
        break;
      case com.android.billingclient.api.BillingClient.BillingResponseCode.ITEM_NOT_OWNED /*8*/:
        this._type = FailureTypes.PRODUCT_NOT_OWNED;
        this._description = 'Failure to consume since item is not owned. (Or restored and already consumed).';
        break;
      default:
        this._type = FailureTypes.UNSPECIFIED;
        this._description = 'Not a known native error code.';
        break;
    }
  }
}
