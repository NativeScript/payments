import { EventData, ItemEventData, Observable, ObservableArray, Page } from '@nativescript/core';
import { Payment, PaymentError, Product, Transaction } from '@nativescript/payments';
import { ObservableProperty } from '../obs-prop';

// Consumable coin packs configured for the demo app in both stores
const PRODUCT_IDS = ['io.nstudio.iapdemo.coinsfive', 'io.nstudio.iapdemo.coinsone', 'io.nstudio.iapdemo.coinsonethousand'];

export function navigatedTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
  @ObservableProperty()
  items: ObservableArray<Product>;

  private _payment: Payment;

  constructor() {
    super();

    console.log('is payment supported: ' + Payment.isSupported());

    this._payment = new Payment();

    this._payment.onPurchaseUpdate = (transactions, error) => {
      if (error) {
        const paymentError = error as PaymentError;
        console.error(`🛑 Purchase Update Error: ${paymentError.code} - ${paymentError.message} 🛑`);
        return;
      }
      console.log(`🟢 Purchase Update: ${transactions.length} items 🟢`);
      transactions.forEach((transaction) => this.handleTransaction(transaction));
    };

    this._payment.onReady = async () => {
      try {
        console.log('🟢 Payment System Ready 🟢');
        const products = await this._payment.fetchProducts(PRODUCT_IDS, 'inapp');
        this.items = new ObservableArray(products);
        console.log(`🟢 Got ${products.length} In App Purchase Items 🟢`);
      } catch (error) {
        console.error(`🛑 Error: ${error} 🛑`);
      }
    };
  }

  onItemTap(args: ItemEventData) {
    const item = this.items.getItem(args.index);
    this._payment.purchaseProduct(item).catch((error: PaymentError) => {
      console.error(`🛑 Purchase could not start: ${error.code} - ${error.message} 🛑`);
    });
  }

  private async handleTransaction(transaction: Transaction) {
    switch (transaction.state) {
      case 'purchased':
        console.log(`🟢 Purchased ${transaction.productId} - receipt: ${transaction.receiptToken} 🟢`);
        try {
          await transaction.finish({ consume: true });
          console.log('🟢 Transaction finished 🟢');
        } catch (error) {
          console.error(`🛑 Could not finish transaction: ${error} 🛑`);
        }
        break;
      case 'pending':
        console.log(`⏳ ${transaction.productId} is pending; the store will report it again once it completes`);
        break;
      default:
        console.log(`Ignoring transaction ${transaction.orderId} in state ${transaction.state}`);
        break;
    }
  }
}
