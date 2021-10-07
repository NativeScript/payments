import { DemoSharedGooglePay } from '@demo/shared';
import { EventData, Page } from '@nativescript/core';
import { AllowedPaymentMethodsType, BillingAddressParametersFormat, CheckoutOptionValue, GooglePayBtn, GooglePayEvents, GooglePayRequest, PaymentCancelledEventData, PaymentErrorEventData, PaymentSuccessEventData, TokenizationSpecificationType, TotalPriceStatusValue } from '@nativescript/google-pay';

const YOUR_MERCHANT_NAME = 'SomeCool Merchant Name';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedGooglePay {
	async onGooglePayTap(args) {
		try {
			if (global.isAndroid) {
				const googlePayBtn = args.object as GooglePayBtn;

				// setup the event listeners
				googlePayBtn.once(GooglePayEvents.PaymentCancelled, (args: PaymentCancelledEventData) => {
					console.log('payment cancelled, not much to do here');
				});

				googlePayBtn.once(GooglePayEvents.PaymentSuccess, async (args: PaymentSuccessEventData) => {
					// this is where you handle the response with the token from google pay to send to payment provider
					const payloadToBackend = {
						amount: 25.2,
						method: '3DS',
						'3DS': {
							signature: args.data.paymentMethodData.tokenizationData.token.signature,
							type: 'G', // for Google
							version: args.data.paymentMethodData.tokenizationData.token.protocolVersion,
							data: args.data.paymentMethodData.tokenizationData.token.signedMessage,
						},
					};

					// send your payload to your payment provider here
					const result = await this.someHttpMethodToYourProviderBackend(payloadToBackend);

					if (result) {
						// now show the user the confirmation screen
					} else {
						// show the user that something went wrong here
					}
				});

				googlePayBtn.once(GooglePayEvents.PaymentError, (args: PaymentErrorEventData) => {
					// TODO: let user know some error happened
				});

				const options = {
					environment: 'development',
					theme: 'light',
					merchantInfo: {
						merchantName: YOUR_MERCHANT_NAME,
					},
					allowedPaymentMethods: {
						type: AllowedPaymentMethodsType.CARD,
						parameters: {
							allowPrepaidCards: true,
							allowCreditCards: true,
							billingAddressRequired: true,
							billingAddressParameters: {
								format: BillingAddressParametersFormat.MIN,
								phoneNumberRequired: true,
							},
						},
						tokenizationSpecification: {
							type: TokenizationSpecificationType.PAYMENT_GATEWAY,
							parameters: {
								gateway: 'example',
								gatewayMerchantId: 'exampleGatewayMerchantId', // in production replace with your gateway provider merchant ID
							},
						},
					},
					transactionInfo: {
						currencyCode: 'USD',
						countryCode: 'US',
						// transactionId: '283999292929929', // A unique ID that identifies a transaction attempt. Merchants can use an existing ID or generate a specific one for Google Pay transaction attempts. This field is required when you send callbacks to the Google Transaction Events API.
						totalPriceStatus: TotalPriceStatusValue.FINAL,
						totalPrice: 25.2,
						totalPriceLabel: 'Total',
						checkoutOption: CheckoutOptionValue.DEFAULT,
					},
					emailRequired: true,
					shippingAddressRequired: true,
					shippingAddressParameters: {
						allowedCountryCodes: ['US'],
						phoneNumberRequired: true,
					},
				} as unknown as GooglePayRequest;

				// this creates the payment request to the Google Pay SDK and will present the user with the payment sheet to complete the transaction
				googlePayBtn.createPaymentRequest(options).catch((err) => {
					console.log('error with create payment request', err);
				});
			}
		} catch (error) {
			console.log('Error with google pay', error);
		}
	}

	someHttpMethodToYourProviderBackend(payload) {
		console.log('🟢 Send the payload to your payment provider 🟢 \n This should be documented by the provider on exactly what values they need.');
		return true;
	}
}
