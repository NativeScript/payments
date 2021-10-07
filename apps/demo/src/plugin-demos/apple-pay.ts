import { DemoSharedApplePay } from '@demo/shared';
import { ApplePayBtn, ApplePayContactFields, ApplePayEvents, ApplePayItems, ApplePayMerchantCapability, ApplePayNetworks, ApplePayPaymentItemType, ApplePayRequest, ApplePayTransactionStatus, AuthorizePaymentEventData } from '@nativescript/apple-pay';
import { EventData, Page } from '@nativescript/core';

const MERCHANTID = '388333172821828292929';
const SomeIdentifierFromPaymentProvider = '89290109290129912088';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedApplePay {
	async onApplePayTap(args) {
		try {
			// just ensuring this runs only on iOS
			if (global.isIOS) {
				const applePayBtn = args.object as ApplePayBtn;

				// setup the event listeners for the delegate for apple pay for our button
				applePayBtn.once(ApplePayEvents.DidAuthorizePaymentHandler, async (args: AuthorizePaymentEventData) => {
					console.log(ApplePayEvents.DidAuthorizePaymentHandler);

					// this is where you do backend processing with your payment provider (Stripe, PayPal, etc.)
					// this payload is just a sample, your payload to a provider will likely be different
					// you can see here how to access the encrypted values from Apple Pay inside the `args.data.paymentData`
					const payloadToBackend = {
						transaction_type: 'purchase',
						merchant_ref: args.data.paymentData.header.transactionId,
						method: '3DS',
						'3DS': {
							merchantIdentifier: SomeIdentifierFromPaymentProvider,
							data: args.data.paymentData.data,
							signature: args.data.paymentData.signature,
							version: args.data.paymentData.version,
							header: args.data.paymentData.header,
						},
					};

					const result = await this.someHttpMethodToYourProviderBackend(payloadToBackend);

					if (result) {
						// need this to call when the payment is successful to close the payment sheet correctly on iOS
						args.completion(ApplePayTransactionStatus.Success);
						// now you can follow through with your user flow since the transaction has been successful with your provider
					} else {
						// payment failed on the backend, so show the FAILURE to close the Apple Pay sheet
						args.completion(ApplePayTransactionStatus.Failure);
					}
				});

				// these are the items your customer is paying for
				const paymentItems = [
					{
						amount: 20.5,
						label: 'Balance',
						type: ApplePayPaymentItemType.Final,
					},
				] as unknown as ApplePayItems[];

				const request = {
					paymentItems,
					merchantId: MERCHANTID, // the merchant ID for this app
					merchantCapabilities: ApplePayMerchantCapability.ThreeDS,
					countryCode: 'US',
					currencyCode: 'USD',
					shippingContactFields: [ApplePayContactFields.Name, ApplePayContactFields.PostalAddress],
					billingContactFields: [ApplePayContactFields.Name, ApplePayContactFields.PostalAddress],
					supportedNetworks: [ApplePayNetworks.Amex, ApplePayNetworks.Visa, ApplePayNetworks.Discover, ApplePayNetworks.MasterCard],
				} as ApplePayRequest;

				// `createPaymentRequest` will call into the Apple Pay SDK and present the user with the payment sheet for the configuration provided
				await applePayBtn.createPaymentRequest(request).catch((err) => {
					console.log('Apple Pay Error', err);
				});
			}
		} catch (error) {
			console.log(error);
		}
	}

	someHttpMethodToYourProviderBackend(payload) {
		console.log('🟢 Send the payload to your payment provider 🟢 \n This should be documented by the provider on exactly what values they need.');
		return true;
	}
}
