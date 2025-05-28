import { DemoSharedBase } from '../utils';
import { SquareInAppPayments } from '@nativescript/square-in-app-payments';

export class DemoSharedSquareInAppPayments extends DemoSharedBase {
  constructor(public _SquareInAppPayments: SquareInAppPayments) {
    super();
    this._SquareInAppPayments.squareApplicationID = 'sandbox-sq0idb-1_YMs90E3w6EyVCmmTbZZw';

    SquareInAppPayments.onResponse = (cardDetails, onComplete) => {
      console.log('onResponse: Card Details:', cardDetails);

      fetch('https://randomuser.me/api/')
        .then((response) => {
          console.log('fetch: Response:', response);
          onComplete();
        })
        .catch((error) => {
          onComplete('fetch: Failed');
        });
    };

    SquareInAppPayments.onComplete = (cancelled, cardDetails) => {
      console.log('Cancelled:', cancelled);
      console.log('Card Details:', cardDetails);
    };
  }

  testIt(isGiftCard = false): void {
    let themeConfig = {};
    if (__APPLE__) {
      themeConfig = {
        tintColor: UIColor.systemBlueColor,
        backgroundColor: UIColor.whiteColor,
        saveButtonTitle: 'Submit',
      };
    }

    this._SquareInAppPayments.startCardEntry({ collectPostalCode: true, isGiftCard, themeConfig });
  }
}
