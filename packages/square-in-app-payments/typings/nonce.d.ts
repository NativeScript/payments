declare module sqip {
  export class Call<T> extends java.lang.Cloneable {
    public static class: java.lang.Class<sqip.Call<any>>;
    /**
     * Constructs a new instance of the sqip.Call<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: { execute(): any; enqueue(param0: sqip.Callback<any>): void; isExecuted(): boolean; cancel(): void; isCanceled(): boolean; clone(): sqip.Call<any> });
    public constructor();
    public enqueue(param0: sqip.Callback<any>): void;
    public clone(): sqip.Call<any>;
    public isExecuted(): boolean;
    public execute(): any;
    public isCanceled(): boolean;
    public cancel(): void;
  }
}

declare module sqip {
  export class Callback<R> extends java.lang.Object {
    public static class: java.lang.Class<sqip.Callback<any>>;
    /**
     * Constructs a new instance of the sqip.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: { onResult(param0: R): void });
    public constructor();
    public onResult(param0: R): void;
  }
}

declare module sqip {
  export class Card {
    public static class: java.lang.Class<sqip.Card>;
    public getExpirationYear(): number;
    public getPrepaidType(): sqip.Card.PrepaidType;
    public component4(): number;
    public equals(other: any): boolean;
    public getPostalCode(): string;
    public getBrand(): sqip.Card.Brand;
    public copy(brand: sqip.Card.Brand, lastFourDigits: string, expirationMonth: number, expirationYear: number, postalCode: string, type: sqip.Card.Type, prepaidType: sqip.Card.PrepaidType): sqip.Card;
    public toString(): string;
    public component7(): sqip.Card.PrepaidType;
    public component6(): sqip.Card.Type;
    public getLastFourDigits(): string;
    public getType(): sqip.Card.Type;
    public component3(): number;
    public component1(): sqip.Card.Brand;
    public component5(): string;
    public hashCode(): number;
    public component2(): string;
    public constructor(brand: sqip.Card.Brand, lastFourDigits: string, expirationMonth: number, expirationYear: number, postalCode: string, type: sqip.Card.Type, prepaidType: sqip.Card.PrepaidType);
    public getExpirationMonth(): number;
  }
  export module Card {
    export class Brand {
      public static class: java.lang.Class<sqip.Card.Brand>;
      public static OTHER_BRAND: sqip.Card.Brand;
      public static VISA: sqip.Card.Brand;
      public static MASTERCARD: sqip.Card.Brand;
      public static AMERICAN_EXPRESS: sqip.Card.Brand;
      public static DISCOVER: sqip.Card.Brand;
      public static DISCOVER_DINERS: sqip.Card.Brand;
      public static JCB: sqip.Card.Brand;
      public static CHINA_UNION_PAY: sqip.Card.Brand;
      public static SQUARE_GIFT_CARD: sqip.Card.Brand;
      public static values(): androidNative.Array<sqip.Card.Brand>;
      public static getEntries(): any;
      public static valueOf(value: string): sqip.Card.Brand;
    }
    export class PrepaidType {
      public static class: java.lang.Class<sqip.Card.PrepaidType>;
      public static UNKNOWN: sqip.Card.PrepaidType;
      public static NOT_PREPAID: sqip.Card.PrepaidType;
      public static PREPAID: sqip.Card.PrepaidType;
      public static values(): androidNative.Array<sqip.Card.PrepaidType>;
      public static valueOf(value: string): sqip.Card.PrepaidType;
      public static getEntries(): any;
    }
    export class Type {
      public static class: java.lang.Class<sqip.Card.Type>;
      public static UNKNOWN: sqip.Card.Type;
      public static CREDIT: sqip.Card.Type;
      public static DEBIT: sqip.Card.Type;
      public static valueOf(value: string): sqip.Card.Type;
      public static values(): androidNative.Array<sqip.Card.Type>;
      public static getEntries(): any;
    }
  }
}

declare module sqip {
  export class CardDetails {
    public static class: java.lang.Class<sqip.CardDetails>;
    /**
     * Constructs a new instance of the sqip.CardDetails interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: { getNonce(): string; getCard(): sqip.Card });
    public constructor();
    public getCard(): sqip.Card;
    public getNonce(): string;
  }
}

declare module sqip {
  export class InAppPaymentsSdk {
    public static class: java.lang.Class<sqip.InAppPaymentsSdk>;
    public static INSTANCE: sqip.InAppPaymentsSdk;
    public static getSquareApplicationId(): string;
    public static setSquareApplicationId(set: string): void;
  }
}

//Generics information:
//sqip.Call:1
//sqip.Callback:1
