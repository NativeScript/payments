declare module sqip {
  export class CardEntry {
    public static class: java.lang.Class<sqip.CardEntry>;
    public static INSTANCE: sqip.CardEntry;
    public static DEFAULT_CARD_ENTRY_REQUEST_CODE: number = 51789;
    public getCardNonceBackgroundHandler$card_entry_release(): sqip.CardNonceBackgroundHandler;
    public static setCardNonceBackgroundHandler(handler: sqip.CardNonceBackgroundHandler): void;
    public static startGiftCardEntryActivity(activity: globalAndroid.app.Activity): void;
    public setCardNonceBackgroundHandler$card_entry_release(set: sqip.CardNonceBackgroundHandler): void;
    public static startCardEntryActivity(activity: globalAndroid.app.Activity, collectPostalCode: boolean): void;
    public static startCardEntryActivity(activity: globalAndroid.app.Activity): void;
    public static startGiftCardEntryActivity(activity: globalAndroid.app.Activity, requestCode: number): void;
    public static handleActivityResult(data: globalAndroid.content.Intent, callback: sqip.Callback<sqip.CardEntryActivityResult>): void;
    public static startCardEntryActivity(activity: globalAndroid.app.Activity, collectPostalCode: boolean, requestCode: number): void;
  }
}

declare module sqip {
  export abstract class CardEntryActivityCommand {
    public static class: java.lang.Class<sqip.CardEntryActivityCommand>;
  }
  export module CardEntryActivityCommand {
    export class Finish extends sqip.CardEntryActivityCommand {
      public static class: java.lang.Class<sqip.CardEntryActivityCommand.Finish>;
      public constructor();
    }
    export class ShowError extends sqip.CardEntryActivityCommand {
      public static class: java.lang.Class<sqip.CardEntryActivityCommand.ShowError>;
      public getMessage(): string;
      public constructor(message: string);
      public equals(other: any): boolean;
      public toString(): string;
      public component1(): string;
      public copy(message: string): sqip.CardEntryActivityCommand.ShowError;
      public hashCode(): number;
    }
  }
}

declare module sqip {
  export abstract class CardEntryActivityResult {
    public static class: java.lang.Class<sqip.CardEntryActivityResult>;
    public getSuccessValue(): sqip.CardEntryActivityResult.Success;
    public isSuccess(): boolean;
    public isCanceled(): boolean;
  }
  export module CardEntryActivityResult {
    export class Canceled extends sqip.CardEntryActivityResult {
      public static class: java.lang.Class<sqip.CardEntryActivityResult.Canceled>;
      public static INSTANCE: sqip.CardEntryActivityResult.Canceled;
    }
    export class Success extends sqip.CardEntryActivityResult {
      public static class: java.lang.Class<sqip.CardEntryActivityResult.Success>;
      public getNonce(): string;
      public equals(other: any): boolean;
      public toString(): string;
      public constructor(nonce: string, card: sqip.Card);
      public copy(nonce: string, card: sqip.Card): sqip.CardEntryActivityResult.Success;
      public getCard(): sqip.Card;
      public component1(): string;
      public component2(): sqip.Card;
      public hashCode(): number;
    }
  }
}

declare module sqip {
  export class CardNonceBackgroundHandler {
    public static class: java.lang.Class<sqip.CardNonceBackgroundHandler>;
    /**
     * Constructs a new instance of the sqip.CardNonceBackgroundHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
     */
    public constructor(implementation: { handleEnteredCardInBackground(param0: sqip.CardDetails): sqip.CardEntryActivityCommand });
    public constructor();
    public handleEnteredCardInBackground(param0: sqip.CardDetails): sqip.CardEntryActivityCommand;
  }
}

declare module sqip {
  export class KotlinExtensions {
    public static class: java.lang.Class<sqip.KotlinExtensions>;
    public static handleActivityResult($i$f$handleActivityResult: sqip.CardEntry, $this$handleActivityResult: globalAndroid.content.Intent, data: any): void;
    public static enqueue($i$f$enqueue: sqip.Call, $this$enqueue: any): void;
    public static setCardNonceBackgroundHandler($i$f$setCardNonceBackgroundHandler: sqip.CardEntry, $this$setCardNonceBackgroundHandler: any): void;
  }
}

//Generics information:
