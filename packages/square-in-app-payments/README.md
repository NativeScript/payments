# @nativescript/square-in-app-payments

Build remarkable payments experiences in your own apps with Square's In-App Payments SDK for NativeScript.

```bash
npm install @nativescript/square-in-app-payments
```

## Usage

An `after-prepare.js` hook is added by this plugin to handle a build phase for the SDK to run.

You will see the following logs in the console:

```bash
✅ Square SDK Build Phase Script Added to Xcode Build Phases
```

If you do not see these logs, prepare the ios platform again prior to build

```bash
ns prepare ios
```

### Example

`init` must be called in the app.ts or main.ts (bootstrap file).

```ts
import { SquareInAppPayments } from '@nativescript/square-in-app-payments';
SquareInAppPayments.init();
```

You can then setup the SDK options wherever needed.

```ts
import { SquareInAppPayments } from '@nativescript/square-in-app-payments';

const square = new SquareInAppPayments();
// The application ID is required to be set before any other methods from the SDK are called.
square.squareApplicationID = process.env.production ? 'prod-key' : 'sandbox-key';
console.log('Square Application ID:', square.squareApplicationID);

// call from your view bindings top open card entry screen
function startCardEntry() {
  square.startCardEntry({
    collectPostalCode: true,
    isGiftCard: false,
    // theme configuration is only available on iOS
    ...(__APPLE__
      ? {
          themeConfig: {
            tintColor: UIColor.systemBlueColor,
            backgroundColor: UIColor.whiteColor,
            saveButtonTitle: 'Submit',
          },
        }
      : {}),
  });
}

// configure response and completion callbacks
SquareInAppPayments.onResponse = (cardDetails, onComplete) => {
  console.log('Card Details:', cardDetails);

  // handle with your own backend
  fetch('https://randomuser.me/api/')
    .then((response) => {
      onComplete();
    })
    .catch((error) => {
      onComplete('Failed');
    });
};

SquareInAppPayments.onComplete = (cancelled, cardDetails) => {
  console.log('Cancelled:', cancelled);
  console.log('Card Details:', cardDetails);
};
```

## Test Cards

### [Mobile and Web Client](https://developer.squareup.com/docs/devtools/sandbox/payments#web-and-mobile-client-testing)

| Brand            | Number              | CVV  |
| ---------------- | ------------------- | ---- |
| Visa             | 4111 1111 1111 1111 | 111  |
| Mastercard       | 5105 1051 0510 5100 | 111  |
| Discover         | 6011 0000 0000 0004 | 111  |
| Diners Club      | 3000 000000 0004    | 111  |
| JCB              | 3569 9900 1009 5841 | 111  |
| American Express | 3400 000000 00009   | 1111 |
| China UnionPay   | 6222 9888 1234 0000 | 123  |
| Square Gift Card | 7783 3200 0000 0000 | ⛔   |

<!-- todo -- buyer verification cards
### [SCA](https://developer.squareup.com/docs/devtools/sandbox/payments#sca-testing-in-the-in-app-payments-sdk)

| Brand               | Number                  | CVV  | Challenge Type                             | Verification Code                     |
|---------------------|--------------------------|------|--------------------------------------------|---------------------------------------|
| Visa                | 4800 0000 0000 0012      | 111  | No Challenge                               | N/A                                   |
| Mastercard          | 5222 2200 0000 0013      | 111  | No Challenge                               | N/A                                   |
| Discover EU         | 6011 0000 0020 1024      | 111  | No Challenge                               | N/A                                   |
| JCB                 | 3569 9900 0000 0041      | 111  | No Challenge                               | N/A                                   |
| Visa EU             | 4310 0000 0020 1027      | 111  | Modal with Verification Code               | 123456                                |
| Mastercard          | 5248 4800 0021 0034      | 111  | Modal with Verification Code               | 123456                                |
| Mastercard EU       | 5500 0000 0020 1024      | 111  | Modal with Verification Code               | 123456                                |
| American Express EU | 3700 000002 01022        | 1111 | Modal with Verification Code               | 123456                                |
| JCB                 | 3569 9900 0000 0033      | 1111 | Modal with Verification Code               | 123456                                |
| Mastercard          | 5333 3300 0000 0008      | 111  | Modal with Multi Select Challenge Question | Select both Paris and Lyon            |
| Visa                | 4811 1100 0000 0016      | 111  | No Challenge with Failed Verification      | N/A                                   | -->

## References

[Square Overview](https://developer.squareup.com/docs/in-app-payments-sdk/installation)

[iOS Documentation](https://developer.squareup.com/docs/sdk/in-app-payment/ios)

[Android Documentation](https://developer.squareup.com/docs/sdk/in-app-payment/android/sqip/package-summary.html)

## License

Apache License Version 2.0
