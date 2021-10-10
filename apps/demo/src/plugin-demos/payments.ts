import { EventData, ItemEventData, Observable, ObservableArray, Page } from '@nativescript/core';
import { buyItem, BuyItemOptions, canMakePayments, fetchItems, finalizeOrder, init as initPayments, Item, PaymentEvent, paymentEvents, toMainThread } from '@nativescript/payments';
import { ObservableProperty } from '../obs-prop';

let subscription;

export function navigatedTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
  @ObservableProperty()
  items: ObservableArray<Item>;

  private _isPaymentSystemInitialized = false;
  private _inPurchaseFlow = false;

  constructor() {
    super();

    if (this._isPaymentSystemInitialized === true) {
      // if already initialized don't run everything again
      return;
    }

    // Subscribe the Handlers
    subscription = paymentEvents.connect();
    paymentEvents.pipe(toMainThread()).subscribe((event: PaymentEvent.Type) => {
      switch (event.context) {
        case PaymentEvent.Context.CONNECTING_STORE:
          if (event.result === PaymentEvent.Result.SUCCESS) {
            if (!this._isPaymentSystemInitialized) {
              console.log('🟢 Initialized In App Purchase Payments 🟢');
              const canPay = canMakePayments();
              console.log(`${canPay ? '🟢 Can Make Payments 🟢' : '🛑 Unable to make payments 🛑'}`);

              if (canPay) {
                fetchItems(['io.nstudio.iapdemo.coinsfive', 'io.nstudio.iapdemo.coinsone', 'io.nstudio.iapdemo.coinsonethousand']);
                // fetchSubscriptions(['io.nstudio.iapdemo.monthly_subscription']);
              }
              this._isPaymentSystemInitialized = true;
            }
          }
          break;
        case PaymentEvent.Context.RETRIEVING_ITEMS:
          console.log('RETRIEVING_ITEMS STATUS: ' + event.result);
          if (event.result === PaymentEvent.Result.SUCCESS) {
            console.log(event);
            this.items = new ObservableArray(event.payload);
            console.log(`🟢 Got ${this.items.length} In App Purchase Items 🟢`);
          }
          break;
        case PaymentEvent.Context.PROCESSING_ORDER:
          // console.log(event);
          if (event.result === PaymentEvent.Result.FAILURE) {
            console.log(`🛑 Payment Failure - ${event.payload.description} ${event.payload.nativeCode} ${event.payload.type} 🛑`);
            this._inPurchaseFlow = false;
          } else if (event.result === PaymentEvent.Result.SUCCESS) {
            console.log('🟢 Payment Success 🟢');
            // console.log(event);
            console.log(`Order Id: ${event.payload.orderId}`);
            console.log(`Order Date: ${event.payload.orderDate}`);
            console.log(`Receipt Token: ${event.payload.receiptToken}`);
            finalizeOrder(event.payload);
          }
          break;
        case PaymentEvent.Context.FINALIZING_ORDER:
          if (event.result === PaymentEvent.Result.SUCCESS) {
            console.log('Order Finalized');
          }
          break;
        case PaymentEvent.Context.RESTORING_ORDERS:
          console.log(event);
          break;
        default:
          console.log(`Invalid EventContext: ${event}`);
          break;
      }
    });

    // Here we initialize the payment system
    initPayments();
  }

  // The event will be raise when an item inside the ListView is tapped.
  onItemTap(args: ItemEventData) {
    const item = this.items.getItem(args.index);

    this._inPurchaseFlow = true;
    const opts: BuyItemOptions = {
      // accountUserName: 'bradwaynemartin@gmail.com',
      ios: {
        quantity: 1,
      },
    };

    buyItem(item, opts);
  }
}
