import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSquareInAppPayments } from '@demo/shared';
import { SquareInAppPayments } from '@nativescript/square-in-app-payments';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  const square = new SquareInAppPayments();
  page.bindingContext = new DemoModel(square);
}

export class DemoModel extends DemoSharedSquareInAppPayments {
  creditCard() {
    this.testIt();
  }
  giftCard() {
    this.testIt(true);
  }
}
