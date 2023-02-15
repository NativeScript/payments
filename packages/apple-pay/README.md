# @nativescript/apple-pay

A plugin that allows you to offer [Apple Pay](https://developer.apple.com/documentation/passkit/apple_pay?language=objc) in your iOS apps.

## Contents
* [Installation](#installation)
* [Requirements](#requirements)
* [Use @nativescript/apple-pay](#use-nativescriptapple-pay)
  * [Implement Apple Pay](#implement-apple-pay)
* [API](#api)
  * [ApplePayBtn class](#applepaybtn-class)
  * [Enums](#enums)
      * [ApplePayEvents](#applepayevents)
      * [ApplePayContactFields](#applepaycontactfields)
      * [ApplePayNetworks](#applepaynetworks)
      * [ApplePayMerchantCapability](#applepaymerchantcapability)
      * [ApplePayMerchantCapaApplePayTransactionStatusbility](#applepaymerchantcapaapplepaytransactionstatusbility)
      * [ApplePayPaymentItemType](#applepaypaymentitemtype)
      * [ApplePayButtonType](#applepaybuttontype)
      * [ApplePayButtonStyle](#applepaybuttonstyle)
  * [Interfaces](#interfaces)
    * [ApplePayRequest](#applepayrequest)
    * [ApplePayItems](#applepayitems)
    * [AuthorizePaymentEventData](#authorizepaymenteventdata)
    * [AuthorizationDidFinishEventData](#authorizationdidfinisheventdata)
    * [ApplePayPaymentData](#applepaypaymentdata)
* [License](#license)

## Installation

```cli
ns plugin add @nativescript/apple-pay
```
## Requirements

For Apple Pay to work in your iOS application, you need to complete the following steps. These steps are also outlined in the [Apple PassKit documentation](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay_requirements).

1. Create a merchant ID

A Merchant ID is an identifier you register with Apple that uniquely identifies your business as a merchant able to accept payments. This ID never expires and can be used on multiple websites and iOS apps. See [Create a merchant identifier](https://help.apple.com/developer-account/#/devb2e62b839?sub=dev103e030bb) for the setup steps.

2. Create a Payment Processing certificate

The certificate is associated with your merchant ID and used to secure transaction data. Apple Pay servers use the certificate’s public key to encrypt payment data. You (or your payment service provider) use the private key to decrypt the data to process payments. See [Create a payment processing certificate](https://help.apple.com/developer-account/#/devb2e62b839?sub=devf31990e3f) for the setup steps.

3. Enable Apple Pay in Xcode.

Follow the steps [Enable Apple Pay](https://help.apple.com/xcode/mac/9.3/#/deva43983eb7?sub=dev44ce8ef13).

For a video showing the configuration steps, see: [Configuring Your Developer Account for Apple Pay](https://developer.apple.com/videos/play/tech-talks/110336/).

Once that configuration is done for your Apple developer account, you will be able to use the [PassKit](https://developer.apple.com/documentation/passkit?language=objc) framework for Apple Pay inside your iOS application.


## Use @nativescript/apple-pay

### Implement Apple Pay

To implement Apple Pay in your app, follow the following steps:

1. Register the Apple Pay button and add it to your page's markup.

```xml
<ios>
    <ApplePayBtn
        tap="onApplePayTap"
        buttonType="InStore"
    ></ApplePayBtn>
</ios>
```
2. Handle the button's `tap` event
In the tap event's callback function, do the following:

  1. Check if Apple Pay is supported by calling `isApplePaySupported()`

  ```ts
  isApplePaySupported: boolean = isApplePaySupported()
  ```

  2. Listen to the `DidAuthorizePaymentHandler` event

  - This event is emitted when a user authorizes the app to make payments with their payment data.
  - Make a call to your payments services provider(Stripe, PayPal, etc) sending the user's data and other transactional data([AuthorizePaymentEventData](#authorizepaymenteventdata) object) received from the event. 

  3. If Apple Pay is supported, present the user with the payment sheet by calling the `createPaymentRequest()` method on the `ApplePayBtn` instance. 

The following code is the example of the preceding steps.

```ts
import { ApplePayBtn, ApplePayContactFields, ApplePayEvents, ApplePayItems, ApplePayMerchantCapability, ApplePayNetworks, ApplePayPaymentItemType, ApplePayRequest, ApplePayTransactionStatus, AuthorizePaymentEventData } from '@nativescript/apple-pay';

export function onApplePayTap() {
	try {
		//Ensure this runs only on iOS
		if (global.isIOS) {
      // 2.1
      if(isApplePaySupported()){ 
			const applePayBtn = args.object as ApplePayBtn;

			// 2.2. Register the DidAuthorizePaymentHandler event listener
			applePayBtn.once(ApplePayEvents.DidAuthorizePaymentHandler, async (args: AuthorizePaymentEventData) => {
				console.log(ApplePayEvents.DidAuthorizePaymentHandler);

				const payloadToBackend = {
					transaction_type: 'purchase',
					merchant_ref: args.data.paymentData.header.transactionId,
					method: '3DS',
					'3DS': {
						merchantIdentifier: <SomeIdentifierFromPaymentProvider>,
						data: args.data.paymentData.data,
						signature: args.data.paymentData.signature,
						version: args.data.paymentData.version,
						header: args.data.paymentData.header
					}
				};
        // Call to your payments services provider (Stripe, PayPal, etc)
        const result = await someHttpMethodToYourProviderBackend(payloadToBackend);

				if (result && result.value === true) {
					// need this to call when the payment is successful to close the payment sheet correctly on iOS
					args.completion(ApplePayTransactionStatus.Success);
					// now you can follow through with your user flow since the transactin has been successful with your provider
				} else {
          // payment failed on the backend, so show the FAILURE to close the Apple Pay sheet
					args.completion(ApplePayTransactionStatus.Failure);
				}
			});

      // The items your customer is paying for
			const paymentItems = [
				{
					amount: 20.50,
					label: 'Balance',
					type: ApplePayPaymentItemType.Final,
				},
			] as ApplePayItems[];

			const request = {
				paymentItems,
				merchantId: <Your_Apple_Pay_Merchant_ID>, // the merchant ID for this app
				merchantCapabilities: ApplePayMerchantCapability.ThreeDS,
				countryCode: 'US',
				currencyCode: 'USD',
				shippingContactFields: [ApplePayContactFields.Name, ApplePayContactFields.PostalAddress],
				billingContactFields: [ApplePayContactFields.Name, ApplePayContactFields.PostalAddress],
				supportedNetworks: [ApplePayNetworks.Amex, ApplePayNetworks.Visa, ApplePayNetworks.Discover, ApplePayNetworks.MasterCard],
			} as ApplePayRequest;

      // Present the user with the payment sheet for the configuration provided
			await applePayBtn.createPaymentRequest(request).catch((err) => {
				console.log('Apple Pay Error', err);
			  });
		  } 
    }
	} catch (error) {
		console.log(error);
	}
}
```

# API

## ApplePayBtn class

| Method | Description
|:----|:------------
| `createPaymentRequest(request: ApplePayRequest)` | Creates the Apple Pay payment request and presents the user with the payment sheet. |

## Enums

### ApplePayEvents

| Key                        | Description                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| DidAuthorizePaymentHandler | Tells the delegate that the user has authorized the payment request and asks for a result. |
| AuthorizationDidFinish     | Tells the delegate that payment authorization has completed.                               |

### ApplePayContactFields

| Key           | Description                       |
| ------------- | --------------------------------- |
| EmailAddress  | Indicates an email address field. |
| Name          | Indicates a name field.           |
| PhoneNumber   | Indicates a phone number field.   |
| PhoneticName  | Indicates a phonetic name field.  |
| PostalAddress | Indicates a postal address field. |

### ApplePayNetworks

| Key            |
| -------------- |
| Amex           |
| CarteBancaire  |
| CarteBancaires |
| ChinaUnionPay  |
| Discover       |
| Eftpos         |
| Electron       |
| Elo            |
| IDCredit       |
| Interac        |
| Jcb            |
| Mada           |
| Maestro        |
| MasterCard     |
| PrivateLabel   |
| QuicPay        |
| Suica          |
| Visa           |
| VPay           |

### ApplePayMerchantCapability

| Key     | Value                                 |
| ------- | ------------------------------------- |
| ThreeDS | PKMerchantCapability.Capability3DS    |
| EMV     | PKMerchantCapability.CapabilityEMV    |
| Credit  | PKMerchantCapability.CapabilityCredit |
| Debit   | PKMerchantCapability.CapabilityDebit  |

### ApplePayMerchantCapaApplePayTransactionStatusbility

| Key                          | Value                                                     |
| ---------------------------- | --------------------------------------------------------- |
| Success                      | PKPaymentAuthorizationStatus.Success                      |
| Failure                      | PKPaymentAuthorizationStatus.Failure                      |
| InvalidBillingPostalAddress  | PKPaymentAuthorizationStatus.InvalidBillingPostalAddress  |
| InvalidShippingPostalAddress | PKPaymentAuthorizationStatus.InvalidShippingPostalAddress |
| InvalidShippingContact       | PKPaymentAuthorizationStatus.InvalidShippingContact       |
| PINRequired                  | PKPaymentAuthorizationStatus.PINRequired                  |
| PINIncorrect                 | PKPaymentAuthorizationStatus.PINIncorrect                 |
| PINLockout                   | PKPaymentAuthorizationStatus.PINLockout,                  |

### ApplePayPaymentItemType

| Key     | Value                            |
| ------- | -------------------------------- |
| Final   | PKPaymentSummaryItemType.Final   |
| Pending | PKPaymentSummaryItemType.Pending |

### ApplePayButtonType

| Key       | Value                         |
| --------- | ----------------------------- |
| Plain     | PKPaymentButtonType.Plain     |
| Buy       | PKPaymentButtonType.Buy       |
| Book      | PKPaymentButtonType.Book      |
| Checkout  | PKPaymentButtonType.Checkout  |
| Donate    | PKPaymentButtonType.Donate    |
| InStore   | PKPaymentButtonType.Book      |
| Subscribe | PKPaymentButtonType.Subscribe |

### ApplePayButtonStyle

| Key          | Value                             |
| ------------ | --------------------------------- |
| White        | PKPaymentButtonStyle.White        |
| WhiteOutline | PKPaymentButtonStyle.WhiteOutline |
| Black        | PKPaymentButtonStyle.Black        |

## Interfaces

### ApplePayRequest

```ts
interface ApplePayRequest {
  paymentItems: Array<ApplePayItems>;
  merchantId: string; // the merchant ID for this app
  merchantCapabilities: number;
  countryCode: string;
  currencyCode: string;
  supportedNetworks: Array<ApplePayNetworks>;
  billingContactFields?: Array<ApplePayContactFields>;
  shippingContactFields?: Array<ApplePayContactFields>;
  shippingMethods?: Array<ApplePayShippingMethods>;
}
```

### ApplePayItems

```ts
interface ApplePayItems {
  label: string;
  amount: number;
  type: ApplePayPaymentItemType;
}
```

### AuthorizePaymentEventData

```ts
interface AuthorizePaymentEventData extends EventData {
  eventName: string;
  object: any;
  data?: {
    payment: PKPayment;
    token: PKPaymentToken;
    paymentData: ApplePayPaymentData;
    billingAddress;
    billingContact: PKContact;
    shippingAddress;
    shippingContact: PKContact;
    shippingMethod: PKShippingMethod;
  };
  completion: (status: ApplePayTransactionStatus) => void;
}
```

### AuthorizationDidFinishEventData

```ts
interface AuthorizationDidFinishEventData extends EventData {
  eventName: string;
  object: any;
}
```

### ApplePayPaymentData

```ts
interface ApplePayPaymentData {
  /**
   * Encrypted payment data.
   */
  data;

  /**
   * Additional version-dependent information used to decrypt and verify the payment.
   */
  header;

  /**
   * Signature of the payment and header data. The signature includes the signing certificate, its intermediate CA certificate, and information about the signing algorithm.
   */
  signature;

  /**
   * Version information about the payment token.
   * The token uses EC_v1 for ECC-encrypted data, and RSA_v1 for RSA-encrypted data.
   */
  version: string;
}
```

## License

Apache License Version 2.0
