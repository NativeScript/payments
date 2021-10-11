import { BuyItemOptions } from './common';
import { Item } from './item';
import { Order } from './order';

export { BuyItemOptions, PaymentEvent, paymentEvents, payments$ } from './common';
export * from './failure';
export * from './item';
export * from './order';

export declare function init(): void;

export declare function tearDown(): void;

export declare function fetchItems(itemIds: Array<string>): void;

export declare function buyItem(item: Item, options?: BuyItemOptions): void;

export function fetchSubscriptions(itemIds: Array<string>): void;

export function startSubscription(item: Item, userData?: string): void;

export declare function finalizeOrder(order: Order): void;

export declare function restoreOrders(skuType?: string): void;

export declare function canMakePayments(): boolean;

export function toMainThread();

// TODO Manage subscriptions
// TODO map subscriptions (Android)
