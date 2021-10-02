import { Item } from './item';
import { Order } from './order';

export { EventContext, EventResult, IPaymentEvent, payments$, PaymentEvent } from './payments.common';

export declare function init(): void;

export declare function tearDown(): void;

export declare function fetchItems(itemIds: Array<string>): void;

export declare function buyItem(item: Item, userData?: string): void;

export function fetchSubscriptions(itemIds: Array<string>): void;

export function startSubscription(item: Item, userData?: string): void;

export declare function finalizeOrder(order: Order): void;

export declare function restoreOrders(skuType?: string): void;

export declare function canMakePayments(): boolean;

// TODO Manage subscriptions
// TODO map subscriptions (Android)
