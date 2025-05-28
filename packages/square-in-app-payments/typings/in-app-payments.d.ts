declare module sqip {
  export module internal {
    export class ActivityLifecycleCallbacksAdapter {
      public static class: java.lang.Class<sqip.internal.ActivityLifecycleCallbacksAdapter>;
      public onActivityStarted(activity: globalAndroid.app.Activity): void;
      public onActivityPaused(activity: globalAndroid.app.Activity): void;
      public onActivityResumed(activity: globalAndroid.app.Activity): void;
      public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
      public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
      public onActivityStopped(activity: globalAndroid.app.Activity): void;
      public constructor();
      public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
    }
  }
}

declare module sqip {
  export module internal {
    export class ApkInfo {
      public static class: java.lang.Class<sqip.internal.ApkInfo>;
      public setVersionName(set: string): void;
      public getHasFlutterPlugin(): boolean;
      public setTargetSdkVersion(set: number): void;
      public getPackageName(): string;
      public getHasReactNative(): boolean;
      public setMinSdkVersion(set: number): void;
      public setApkSize(set: number): void;
      public setDebuggable(set: boolean): void;
      public setVersionCode(set: number): void;
      public getTargetSdkVersion(): number;
      public getHasReactNativePlugin(): boolean;
      public getDeviceYearClass(): number;
      public getUsesAndroidX(): boolean;
      public getApkSize(): number;
      public constructor(applicationInfo: globalAndroid.app.Application);
      public getHasFlutter(): boolean;
      public getVersionName(): string;
      public getVersionCode(): number;
      public getMinSdkVersion(): number;
      public getDebuggable(): boolean;
    }
  }
}

declare module sqip {
  export module internal {
    export class ApkInfo_Factory extends dagger.internal.Factory<sqip.internal.ApkInfo> {
      public static class: java.lang.Class<sqip.internal.ApkInfo_Factory>;
      public get(): sqip.internal.ApkInfo;
      public static newInstance(context: globalAndroid.app.Application): sqip.internal.ApkInfo;
      public constructor(contextProvider: javax.inject.Provider<globalAndroid.app.Application>);
      public static create(contextProvider: javax.inject.Provider<globalAndroid.app.Application>): sqip.internal.ApkInfo_Factory;
    }
  }
}

declare module sqip {
  export module internal {
    export class BuildConfig {
      public static class: java.lang.Class<sqip.internal.BuildConfig>;
      public static DEBUG: boolean = 0;
      public static LIBRARY_PACKAGE_NAME: string = 'sqip.internal';
      public static BUILD_TYPE: string = 'release';
      public static SQIP_RELEASE_VERSION: string = '1.6.6';
      public static SQIP_RELEASE_VERSION_CODE: number = 10669999;
      public constructor();
    }
  }
}

declare module sqip {
  export module internal {
    export class CardDataResponse {
      public static class: java.lang.Class<sqip.internal.CardDataResponse>;
      public getExp_year(): number;
      public getBilling_postal_code(): string;
      public constructor(card_brand: string, last_4: string, exp_month: number, exp_year: number, billing_postal_code: string, card_type: string, prepaid_type: string);
      public getExp_month(): number;
      public component1(): string;
      public getCard_type(): string;
      public getLast_4(): string;
      public component5(): string;
      public getCard_brand(): string;
      public component4(): number;
      public component7(): string;
      public equals(other: any): boolean;
      public toString(): string;
      public copy(card_brand: string, last_4: string, exp_month: number, exp_year: number, billing_postal_code: string, card_type: string, prepaid_type: string): sqip.internal.CardDataResponse;
      public getPrepaid_type(): string;
      public component2(): string;
      public component3(): number;
      public component6(): string;
      public hashCode(): number;
    }
  }
}

declare module sqip {
  export module internal {
    export class CardDataResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.CardDataResponse> {
      public static class: java.lang.Class<sqip.internal.CardDataResponseJsonAdapter>;
      public toString(): string;
      public fromJson(last_4: com.squareup.moshi.JsonReader): sqip.internal.CardDataResponse;
      public constructor(moshi: com.squareup.moshi.Moshi);
      public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.CardDataResponse): void;
    }
  }
}

declare module sqip {
  export module internal {
    export abstract class CardEntryResult {
      public static class: java.lang.Class<sqip.internal.CardEntryResult>;
    }
    export module CardEntryResult {
      export class CardAndNonceResult extends sqip.internal.CardEntryResult {
        public static class: java.lang.Class<sqip.internal.CardEntryResult.CardAndNonceResult>;
        public getCard(): sqip.Card;
        public component2(): sqip.Card;
        public equals(other: any): boolean;
        public component1(): string;
        public hashCode(): number;
        public constructor(nonce: string, card: sqip.Card);
        public getNonce(): string;
        public toString(): string;
        public copy(nonce: string, card: sqip.Card): sqip.internal.CardEntryResult.CardAndNonceResult;
      }
      export abstract class RawResult extends sqip.internal.CardEntryResult {
        public static class: java.lang.Class<sqip.internal.CardEntryResult.RawResult>;
        public getCardNumber(): string;
      }
      export module RawResult {
        export class RawCreditCardResult extends sqip.internal.CardEntryResult.RawResult {
          public static class: java.lang.Class<sqip.internal.CardEntryResult.RawResult.RawCreditCardResult>;
          public getCardNumber(): string;
          public getCvv(): string;
          public component2(): string;
          public component5(): string;
          public component3(): number;
          public equals(other: any): boolean;
          public getExpirationYear(): number;
          public constructor(cardNumber: string, cvv: string, expirationMonth: number, expirationYear: number, postCode: string);
          public toString(): string;
          public component1(): string;
          public component4(): number;
          public copy(cardNumber: string, cvv: string, expirationMonth: number, expirationYear: number, postCode: string): sqip.internal.CardEntryResult.RawResult.RawCreditCardResult;
          public hashCode(): number;
          public getExpirationMonth(): number;
          public getPostCode(): string;
        }
        export class RawGiftCardResult extends sqip.internal.CardEntryResult.RawResult {
          public static class: java.lang.Class<sqip.internal.CardEntryResult.RawResult.RawGiftCardResult>;
          public getCardNumber(): string;
          public toString(): string;
          public component1(): string;
          public equals(other: any): boolean;
          public constructor(cardNumber: string);
          public hashCode(): number;
          public copy(cardNumber: string): sqip.internal.CardEntryResult.RawResult.RawGiftCardResult;
        }
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class CardEntryResult_CardAndNonceResultJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.CardEntryResult.CardAndNonceResult> {
      public static class: java.lang.Class<sqip.internal.CardEntryResult_CardAndNonceResultJsonAdapter>;
      public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.CardEntryResult.CardAndNonceResult): void;
      public toString(): string;
      public fromJson(card: com.squareup.moshi.JsonReader): sqip.internal.CardEntryResult.CardAndNonceResult;
      public constructor(moshi: com.squareup.moshi.Moshi);
    }
  }
}

declare module sqip {
  export module internal {
    export class CardEntryResult_RawResult_RawCreditCardResultJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.CardEntryResult.RawResult.RawCreditCardResult> {
      public static class: java.lang.Class<sqip.internal.CardEntryResult_RawResult_RawCreditCardResultJsonAdapter>;
      public toString(): string;
      public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.CardEntryResult.RawResult.RawCreditCardResult): void;
      public fromJson(cvv: com.squareup.moshi.JsonReader): sqip.internal.CardEntryResult.RawResult.RawCreditCardResult;
      public constructor(moshi: com.squareup.moshi.Moshi);
    }
  }
}

declare module sqip {
  export module internal {
    export class CardEntryResult_RawResult_RawGiftCardResultJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.CardEntryResult.RawResult.RawGiftCardResult> {
      public static class: java.lang.Class<sqip.internal.CardEntryResult_RawResult_RawGiftCardResultJsonAdapter>;
      public toString(): string;
      public fromJson(this_: com.squareup.moshi.JsonReader): sqip.internal.CardEntryResult.RawResult.RawGiftCardResult;
      public constructor(moshi: com.squareup.moshi.Moshi);
      public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.CardEntryResult.RawResult.RawGiftCardResult): void;
    }
  }
}

declare module sqip {
  export module internal {
    export class DeviceInfo {
      public static class: java.lang.Class<sqip.internal.DeviceInfo>;
      public getSquareDeviceId(): string;
      public getInstallerPackageName(): string;
      public getApplication(): globalAndroid.app.Application;
      public captureDeviceInfo(): sqip.internal.nonce.DeviceInfoRequest;
      public constructor(installerPackageName: string, locale: javax.inject.Provider<java.util.Locale>, application: globalAndroid.app.Application, squareDeviceId: string);
    }
    export module DeviceInfo {
      export class Companion {
        public static class: java.lang.Class<sqip.internal.DeviceInfo.Companion>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class DeviceInfo_Factory extends dagger.internal.Factory<sqip.internal.DeviceInfo> {
      public static class: java.lang.Class<sqip.internal.DeviceInfo_Factory>;
      public constructor(installerPackageNameProvider: javax.inject.Provider<string>, localeProvider: javax.inject.Provider<java.util.Locale>, applicationProvider: javax.inject.Provider<globalAndroid.app.Application>, squareDeviceIdProvider: javax.inject.Provider<string>);
      public static create(installerPackageNameProvider: javax.inject.Provider<string>, localeProvider: javax.inject.Provider<java.util.Locale>, applicationProvider: javax.inject.Provider<globalAndroid.app.Application>, squareDeviceIdProvider: javax.inject.Provider<string>): sqip.internal.DeviceInfo_Factory;
      public get(): sqip.internal.DeviceInfo;
      public static newInstance(installerPackageName: string, locale: javax.inject.Provider<java.util.Locale>, application: globalAndroid.app.Application, squareDeviceId: string): sqip.internal.DeviceInfo;
    }
  }
}

declare module sqip {
  export module internal {
    export class FakeMode {
      public static class: java.lang.Class<sqip.internal.FakeMode>;
      public static INSTANCE: sqip.internal.FakeMode;
      public sendResult(callback: any): void;
      public setResultsProvider(callback: any): void;
    }
  }
}

declare module sqip {
  export module internal {
    export class GzipRequestInterceptor {
      public static class: java.lang.Class<sqip.internal.GzipRequestInterceptor>;
      public static GZIP_BODY_ENABLED: string = 'X-Square-Gzip: true';
      public constructor();
      public intercept(compressedRequest: okhttp3.Interceptor.Chain): okhttp3.Response;
    }
    export module GzipRequestInterceptor {
      export class Companion {
        public static class: java.lang.Class<sqip.internal.GzipRequestInterceptor.Companion>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class GzipRequestInterceptor_Factory extends dagger.internal.Factory<sqip.internal.GzipRequestInterceptor> {
      public static class: java.lang.Class<sqip.internal.GzipRequestInterceptor_Factory>;
      public static create(): sqip.internal.GzipRequestInterceptor_Factory;
      public get(): sqip.internal.GzipRequestInterceptor;
      public constructor();
      public static newInstance(): sqip.internal.GzipRequestInterceptor;
    }
    export module GzipRequestInterceptor_Factory {
      export class InstanceHolder {
        public static class: java.lang.Class<sqip.internal.GzipRequestInterceptor_Factory.InstanceHolder>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule {
      public static class: java.lang.Class<sqip.internal.HttpModule>;
      public static INSTANCE: sqip.internal.HttpModule;
      public static UNIQUE_SQUARE_ID: string = 'Square-Device-ID';
      public sharedPreferences(context: globalAndroid.app.Application): globalAndroid.content.SharedPreferences;
      public moshi(): com.squareup.moshi.Moshi;
      public retrofit(okHttpClient: okhttp3.OkHttpClient, moshi: com.squareup.moshi.Moshi, paymentUrl: string): retrofit2.Retrofit;
      public connectivityManager(context: globalAndroid.app.Application): globalAndroid.net.ConnectivityManager;
      public squareTruststore(context: globalAndroid.app.Application): com.squareup.common.truststore.SquareTruststore;
      public squareDeviceId($this$squareDeviceId_u24lambda_u240: globalAndroid.content.SharedPreferences): string;
      public createCardNonceErrorResponseAdapter(moshi: com.squareup.moshi.Moshi): com.squareup.moshi.JsonAdapter<sqip.internal.nonce.CreateCardNonceErrorResponse>;
      public installerPackageName(context: globalAndroid.app.Application): string;
      public provideLocale(application: globalAndroid.app.Application): java.util.Locale;
      public okHttpClient(this_: com.squareup.common.truststore.SquareTruststore, squareTruststore: sqip.internal.SquareHeadersInterceptor, headersInterceptor: sqip.internal.GzipRequestInterceptor): okhttp3.OkHttpClient;
    }
    export module HttpModule {
      export class InstallerPackageName {
        public static class: java.lang.Class<sqip.internal.HttpModule.InstallerPackageName>;
        /**
         * Constructs a new instance of the sqip.internal.HttpModule$InstallerPackageName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
      export class PaymentUrl {
        public static class: java.lang.Class<sqip.internal.HttpModule.PaymentUrl>;
        /**
         * Constructs a new instance of the sqip.internal.HttpModule$PaymentUrl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
      export class SquareDeviceId {
        public static class: java.lang.Class<sqip.internal.HttpModule.SquareDeviceId>;
        /**
         * Constructs a new instance of the sqip.internal.HttpModule$SquareDeviceId interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {});
        public constructor();
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_ConnectivityManagerFactory extends dagger.internal.Factory<globalAndroid.net.ConnectivityManager> {
      public static class: java.lang.Class<sqip.internal.HttpModule_ConnectivityManagerFactory>;
      public get(): globalAndroid.net.ConnectivityManager;
      public static connectivityManager(context: globalAndroid.app.Application): globalAndroid.net.ConnectivityManager;
      public static create(contextProvider: javax.inject.Provider<globalAndroid.app.Application>): sqip.internal.HttpModule_ConnectivityManagerFactory;
      public constructor(contextProvider: javax.inject.Provider<globalAndroid.app.Application>);
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_CreateCardNonceErrorResponseAdapterFactory extends dagger.internal.Factory<com.squareup.moshi.JsonAdapter<sqip.internal.nonce.CreateCardNonceErrorResponse>> {
      public static class: java.lang.Class<sqip.internal.HttpModule_CreateCardNonceErrorResponseAdapterFactory>;
      public static create(moshiProvider: javax.inject.Provider<com.squareup.moshi.Moshi>): sqip.internal.HttpModule_CreateCardNonceErrorResponseAdapterFactory;
      public static createCardNonceErrorResponseAdapter(moshi: com.squareup.moshi.Moshi): com.squareup.moshi.JsonAdapter<sqip.internal.nonce.CreateCardNonceErrorResponse>;
      public get(): com.squareup.moshi.JsonAdapter<sqip.internal.nonce.CreateCardNonceErrorResponse>;
      public constructor(moshiProvider: javax.inject.Provider<com.squareup.moshi.Moshi>);
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_InstallerPackageNameFactory extends dagger.internal.Factory<string> {
      public static class: java.lang.Class<sqip.internal.HttpModule_InstallerPackageNameFactory>;
      public static create(contextProvider: javax.inject.Provider<globalAndroid.app.Application>): sqip.internal.HttpModule_InstallerPackageNameFactory;
      public get(): string;
      public static installerPackageName(context: globalAndroid.app.Application): string;
      public constructor(contextProvider: javax.inject.Provider<globalAndroid.app.Application>);
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_MoshiFactory extends dagger.internal.Factory<com.squareup.moshi.Moshi> {
      public static class: java.lang.Class<sqip.internal.HttpModule_MoshiFactory>;
      public get(): com.squareup.moshi.Moshi;
      public static moshi(): com.squareup.moshi.Moshi;
      public static create(): sqip.internal.HttpModule_MoshiFactory;
      public constructor();
    }
    export module HttpModule_MoshiFactory {
      export class InstanceHolder {
        public static class: java.lang.Class<sqip.internal.HttpModule_MoshiFactory.InstanceHolder>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_OkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
      public static class: java.lang.Class<sqip.internal.HttpModule_OkHttpClientFactory>;
      public static create(squareTruststoreProvider: javax.inject.Provider<com.squareup.common.truststore.SquareTruststore>, headersInterceptorProvider: javax.inject.Provider<sqip.internal.SquareHeadersInterceptor>, gzipRequestInterceptorProvider: javax.inject.Provider<sqip.internal.GzipRequestInterceptor>): sqip.internal.HttpModule_OkHttpClientFactory;
      public constructor(squareTruststoreProvider: javax.inject.Provider<com.squareup.common.truststore.SquareTruststore>, headersInterceptorProvider: javax.inject.Provider<sqip.internal.SquareHeadersInterceptor>, gzipRequestInterceptorProvider: javax.inject.Provider<sqip.internal.GzipRequestInterceptor>);
      public get(): okhttp3.OkHttpClient;
      public static okHttpClient(squareTruststore: com.squareup.common.truststore.SquareTruststore, headersInterceptor: sqip.internal.SquareHeadersInterceptor, gzipRequestInterceptor: sqip.internal.GzipRequestInterceptor): okhttp3.OkHttpClient;
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_ProvideLocaleFactory extends dagger.internal.Factory<java.util.Locale> {
      public static class: java.lang.Class<sqip.internal.HttpModule_ProvideLocaleFactory>;
      public get(): java.util.Locale;
      public constructor(applicationProvider: javax.inject.Provider<globalAndroid.app.Application>);
      public static provideLocale(application: globalAndroid.app.Application): java.util.Locale;
      public static create(applicationProvider: javax.inject.Provider<globalAndroid.app.Application>): sqip.internal.HttpModule_ProvideLocaleFactory;
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_RetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
      public static class: java.lang.Class<sqip.internal.HttpModule_RetrofitFactory>;
      public static retrofit(okHttpClient: okhttp3.OkHttpClient, moshi: com.squareup.moshi.Moshi, paymentUrl: string): retrofit2.Retrofit;
      public constructor(okHttpClientProvider: javax.inject.Provider<okhttp3.OkHttpClient>, moshiProvider: javax.inject.Provider<com.squareup.moshi.Moshi>, paymentUrlProvider: javax.inject.Provider<string>);
      public static create(okHttpClientProvider: javax.inject.Provider<okhttp3.OkHttpClient>, moshiProvider: javax.inject.Provider<com.squareup.moshi.Moshi>, paymentUrlProvider: javax.inject.Provider<string>): sqip.internal.HttpModule_RetrofitFactory;
      public get(): retrofit2.Retrofit;
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_SharedPreferencesFactory extends dagger.internal.Factory<globalAndroid.content.SharedPreferences> {
      public static class: java.lang.Class<sqip.internal.HttpModule_SharedPreferencesFactory>;
      public static create(contextProvider: javax.inject.Provider<globalAndroid.app.Application>): sqip.internal.HttpModule_SharedPreferencesFactory;
      public static sharedPreferences(context: globalAndroid.app.Application): globalAndroid.content.SharedPreferences;
      public constructor(contextProvider: javax.inject.Provider<globalAndroid.app.Application>);
      public get(): globalAndroid.content.SharedPreferences;
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_SquareDeviceIdFactory extends dagger.internal.Factory<string> {
      public static class: java.lang.Class<sqip.internal.HttpModule_SquareDeviceIdFactory>;
      public constructor(sharedPreferencesProvider: javax.inject.Provider<globalAndroid.content.SharedPreferences>);
      public static create(sharedPreferencesProvider: javax.inject.Provider<globalAndroid.content.SharedPreferences>): sqip.internal.HttpModule_SquareDeviceIdFactory;
      public static squareDeviceId(sharedPreferences: globalAndroid.content.SharedPreferences): string;
      public get(): string;
    }
  }
}

declare module sqip {
  export module internal {
    export class HttpModule_SquareTruststoreFactory extends dagger.internal.Factory<com.squareup.common.truststore.SquareTruststore> {
      public static class: java.lang.Class<sqip.internal.HttpModule_SquareTruststoreFactory>;
      public get(): com.squareup.common.truststore.SquareTruststore;
      public static create(contextProvider: javax.inject.Provider<globalAndroid.app.Application>): sqip.internal.HttpModule_SquareTruststoreFactory;
      public static squareTruststore(context: globalAndroid.app.Application): com.squareup.common.truststore.SquareTruststore;
      public constructor(contextProvider: javax.inject.Provider<globalAndroid.app.Application>);
    }
  }
}

declare module sqip {
  export module internal {
    export class LongCodec {
      public static class: java.lang.Class<sqip.internal.LongCodec>;
      public static INSTANCE: sqip.internal.LongCodec;
      public encodeToString(i: number): string;
      public decodeToLong(i: string): number;
    }
  }
}

declare module sqip {
  export module internal {
    export class NetworkMode {
      public static class: java.lang.Class<sqip.internal.NetworkMode>;
      public static INSTANCE: sqip.internal.NetworkMode;
      public setEndpoint(value: sqip.internal.NetworkMode.Endpoint): void;
      public getEndpoint(): sqip.internal.NetworkMode.Endpoint;
    }
    export module NetworkMode {
      export class Endpoint {
        public static class: java.lang.Class<sqip.internal.NetworkMode.Endpoint>;
        public static FAKE: sqip.internal.NetworkMode.Endpoint;
        public static PRODUCTION: sqip.internal.NetworkMode.Endpoint;
        public static SANDBOX: sqip.internal.NetworkMode.Endpoint;
        public static STAGING: sqip.internal.NetworkMode.Endpoint;
        public static values(): androidNative.Array<sqip.internal.NetworkMode.Endpoint>;
        public static valueOf(value: string): sqip.internal.NetworkMode.Endpoint;
        public static getEntries(): any;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class NetworkMonitor {
      public static class: java.lang.Class<sqip.internal.NetworkMonitor>;
      public constructor(connectivityManager: globalAndroid.net.ConnectivityManager);
      public isConnected(): boolean;
    }
  }
}

declare module sqip {
  export module internal {
    export class NetworkMonitor_Factory extends dagger.internal.Factory<sqip.internal.NetworkMonitor> {
      public static class: java.lang.Class<sqip.internal.NetworkMonitor_Factory>;
      public constructor(connectivityManagerProvider: javax.inject.Provider<globalAndroid.net.ConnectivityManager>);
      public static newInstance(connectivityManager: globalAndroid.net.ConnectivityManager): sqip.internal.NetworkMonitor;
      public get(): sqip.internal.NetworkMonitor;
      public static create(connectivityManagerProvider: javax.inject.Provider<globalAndroid.net.ConnectivityManager>): sqip.internal.NetworkMonitor_Factory;
    }
  }
}

declare module sqip {
  export module internal {
    export class Parceler<T> extends java.lang.Object {
      public static class: java.lang.Class<sqip.internal.Parceler<any>>;
      /**
       * Constructs a new instance of the sqip.internal.Parceler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { write(param0: T, param1: globalAndroid.os.Parcel, param2: number): void; create(param0: globalAndroid.os.Parcel): T; newArray(param0: number): androidNative.Array<T> });
      public constructor();
      public write(param0: T, param1: globalAndroid.os.Parcel, param2: number): void;
      public create(param0: globalAndroid.os.Parcel): T;
      public newArray(param0: number): androidNative.Array<T>;
    }
    export module Parceler {
      export class DefaultImpls {
        public static class: java.lang.Class<sqip.internal.Parceler.DefaultImpls>;
        public static newArray($this: sqip.internal.Parceler<any>, size: number): androidNative.Array<any>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class Result<S, E> extends java.lang.Object {
      public static class: java.lang.Class<sqip.internal.Result<any, any>>;
      public getError(): E;
      public isSuccess(): boolean;
      public getSuccessValue(): S;
    }
    export module Result {
      export class Companion {
        public static class: java.lang.Class<sqip.internal.Result.Companion>;
        public newSuccess(successValue: any): sqip.internal.Result<any, any>;
        public newError(error: any): sqip.internal.Result<any, any>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class ResultError<C> extends java.lang.Object {
      public static class: java.lang.Class<sqip.internal.ResultError<any>>;
      public component1(): C;
      public constructor(code: C, message: string, debugCode: string, debugMessage: string);
      public copy(code: C, message: string, debugCode: string, debugMessage: string): sqip.internal.ResultError<C>;
      public getMessage(): string;
      public getCode(): C;
      public component3(): string;
      public equals(other: any): boolean;
      public toString(): string;
      public getDebugCode(): string;
      public getDebugMessage(): string;
      public component2(): string;
      public component4(): string;
      public hashCode(): number;
    }
  }
}

declare module sqip {
  export module internal {
    export class SpeleoIdGenerator {
      public static class: java.lang.Class<sqip.internal.SpeleoIdGenerator>;
      public constructor();
      public next(): string;
    }
  }
}

declare module sqip {
  export module internal {
    export class SpeleoIdGenerator_Factory extends dagger.internal.Factory<sqip.internal.SpeleoIdGenerator> {
      public static class: java.lang.Class<sqip.internal.SpeleoIdGenerator_Factory>;
      public get(): sqip.internal.SpeleoIdGenerator;
      public static newInstance(): sqip.internal.SpeleoIdGenerator;
      public static create(): sqip.internal.SpeleoIdGenerator_Factory;
      public constructor();
    }
    export module SpeleoIdGenerator_Factory {
      export class InstanceHolder {
        public static class: java.lang.Class<sqip.internal.SpeleoIdGenerator_Factory.InstanceHolder>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class SqipActivityDebouncer {
      public static class: java.lang.Class<sqip.internal.SqipActivityDebouncer>;
      public constructor();
    }
    export module SqipActivityDebouncer {
      export class Companion {
        public static class: java.lang.Class<sqip.internal.SqipActivityDebouncer.Companion>;
        public reset(): void;
        public install(param: globalAndroid.content.Context, childEntries: string): boolean;
        public getLifecycleCallbacks$sqip_release(): sqip.internal.SqipActivityDebouncer.Companion.LifecycleCallbacks;
      }
      export module Companion {
        export class DebounceEntry {
          public static class: java.lang.Class<sqip.internal.SqipActivityDebouncer.Companion.DebounceEntry>;
          public getActivityName(): string;
          public equals(other: any): boolean;
          public constructor(parent: globalAndroid.content.Context, activityName: string);
          public hashCode(): number;
          public getActivityId(): number;
          public getParent(): globalAndroid.content.Context;
        }
        export class LifecycleCallbacks extends sqip.internal.ActivityLifecycleCallbacksAdapter {
          public static class: java.lang.Class<sqip.internal.SqipActivityDebouncer.Companion.LifecycleCallbacks>;
          public constructor();
          public onActivityResumed(activity: globalAndroid.app.Activity): void;
        }
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class SquareHeadersInterceptor {
      public static class: java.lang.Class<sqip.internal.SquareHeadersInterceptor>;
      public constructor(squareDeviceId: string, locale: java.util.Locale);
      public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
    }
    export module SquareHeadersInterceptor {
      export class Companion {
        public static class: java.lang.Class<sqip.internal.SquareHeadersInterceptor.Companion>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class SquareHeadersInterceptor_Factory extends dagger.internal.Factory<sqip.internal.SquareHeadersInterceptor> {
      public static class: java.lang.Class<sqip.internal.SquareHeadersInterceptor_Factory>;
      public static newInstance(squareDeviceId: string, locale: java.util.Locale): sqip.internal.SquareHeadersInterceptor;
      public get(): sqip.internal.SquareHeadersInterceptor;
      public constructor(squareDeviceIdProvider: javax.inject.Provider<string>, localeProvider: javax.inject.Provider<java.util.Locale>);
      public static create(squareDeviceIdProvider: javax.inject.Provider<string>, localeProvider: javax.inject.Provider<java.util.Locale>): sqip.internal.SquareHeadersInterceptor_Factory;
    }
  }
}

declare module sqip {
  export module internal {
    export class UrlModule {
      public static class: java.lang.Class<sqip.internal.UrlModule>;
      public static INSTANCE: sqip.internal.UrlModule;
      public eventsUrl(): string;
      public paymentUrl(): string;
    }
    export module UrlModule {
      export class WhenMappings {
        public static class: java.lang.Class<sqip.internal.UrlModule.WhenMappings>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class UrlModule_EventsUrlFactory extends dagger.internal.Factory<string> {
      public static class: java.lang.Class<sqip.internal.UrlModule_EventsUrlFactory>;
      public static create(): sqip.internal.UrlModule_EventsUrlFactory;
      public get(): string;
      public static eventsUrl(): string;
      public constructor();
    }
    export module UrlModule_EventsUrlFactory {
      export class InstanceHolder {
        public static class: java.lang.Class<sqip.internal.UrlModule_EventsUrlFactory.InstanceHolder>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export class UrlModule_PaymentUrlFactory extends dagger.internal.Factory<string> {
      public static class: java.lang.Class<sqip.internal.UrlModule_PaymentUrlFactory>;
      public static create(): sqip.internal.UrlModule_PaymentUrlFactory;
      public static paymentUrl(): string;
      public get(): string;
      public constructor();
    }
    export module UrlModule_PaymentUrlFactory {
      export class InstanceHolder {
        public static class: java.lang.Class<sqip.internal.UrlModule_PaymentUrlFactory.InstanceHolder>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class EventLogger {
        public static class: java.lang.Class<sqip.internal.event.EventLogger>;
        /**
         * Constructs a new instance of the sqip.internal.event.EventLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { updateCustomThemeAttributes(param0: string): void; log(param0: sqip.internal.event.IapEvent): void; uploadLogs(): void; onSaveInstanceState(param0: globalAndroid.os.Bundle): void; onRestoreInstanceState(param0: globalAndroid.os.Bundle): void });
        public constructor();
        public updateCustomThemeAttributes(param0: string): void;
        public uploadLogs(): void;
        public log(param0: sqip.internal.event.IapEvent): void;
        public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
        public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
      }
      export module EventLogger {
        export class Real extends sqip.internal.event.EventLogger {
          public static class: java.lang.Class<sqip.internal.event.EventLogger.Real>;
          public static JSON_DATA_EVENTS_KEY: string = 'jsonDataEvents';
          public static EVENT_ORDER_KEY: string = 'eventOrder';
          public static SESSION_UUID_KEY: string = 'sessionUuid';
          public static CATALOG_NAME: string = 'sqip_card_entry_android';
          public uploadLogs(): void;
          public updateCustomThemeAttributes(param0: string): void;
          public log(param0: sqip.internal.event.IapEvent): void;
          public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
          public log($this$logd$iv: sqip.internal.event.IapEvent): void;
          public updateCustomThemeAttributes(customThemeAttributes: string): void;
          public onSaveInstanceState($this$onSaveInstanceState_u24lambda_u246: globalAndroid.os.Bundle): void;
          public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
          public onRestoreInstanceState(bundle: globalAndroid.os.Bundle): void;
          public constructor(eventStreamService: sqip.internal.event.EventStreamService, eventsUploadExecutor: java.util.concurrent.ExecutorService, eventJsonAdapter: com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData>, resources: globalAndroid.content.res.Resources, apkInfo: sqip.internal.ApkInfo, locale: java.util.Locale, squareDeviceId: string);
        }
        export module Real {
          export class Companion {
            public static class: java.lang.Class<sqip.internal.event.EventLogger.Real.Companion>;
            public getProcessUuid(): string;
          }
        }
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class EventLogger_Real_Factory extends dagger.internal.Factory<sqip.internal.event.EventLogger.Real> {
        public static class: java.lang.Class<sqip.internal.event.EventLogger_Real_Factory>;
        public static create(
          eventStreamServiceProvider: javax.inject.Provider<sqip.internal.event.EventStreamService>,
          eventsUploadExecutorProvider: javax.inject.Provider<java.util.concurrent.ExecutorService>,
          eventJsonAdapterProvider: javax.inject.Provider<com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData>>,
          resourcesProvider: javax.inject.Provider<globalAndroid.content.res.Resources>,
          apkInfoProvider: javax.inject.Provider<sqip.internal.ApkInfo>,
          localeProvider: javax.inject.Provider<java.util.Locale>,
          squareDeviceIdProvider: javax.inject.Provider<string>,
        ): sqip.internal.event.EventLogger_Real_Factory;
        public constructor(eventStreamServiceProvider: javax.inject.Provider<sqip.internal.event.EventStreamService>, eventsUploadExecutorProvider: javax.inject.Provider<java.util.concurrent.ExecutorService>, eventJsonAdapterProvider: javax.inject.Provider<com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData>>, resourcesProvider: javax.inject.Provider<globalAndroid.content.res.Resources>, apkInfoProvider: javax.inject.Provider<sqip.internal.ApkInfo>, localeProvider: javax.inject.Provider<java.util.Locale>, squareDeviceIdProvider: javax.inject.Provider<string>);
        public get(): sqip.internal.event.EventLogger.Real;
        public static newInstance(eventStreamService: sqip.internal.event.EventStreamService, eventsUploadExecutor: java.util.concurrent.ExecutorService, eventJsonAdapter: com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData>, resources: globalAndroid.content.res.Resources, apkInfo: sqip.internal.ApkInfo, locale: java.util.Locale, squareDeviceId: string): sqip.internal.event.EventLogger.Real;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class EventModule {
        public static class: java.lang.Class<sqip.internal.event.EventModule>;
        public static INSTANCE: sqip.internal.event.EventModule;
        public eventsUploadExecutor(): java.util.concurrent.ExecutorService;
        public eventStreamService(retrofit: retrofit2.Retrofit): sqip.internal.event.EventStreamService;
        public eventJsonAdapter(moshi: com.squareup.moshi.Moshi): com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData>;
        public retrofit(okHttpClient: okhttp3.OkHttpClient, moshi: com.squareup.moshi.Moshi, eventsUrl: string): retrofit2.Retrofit;
      }
      export module EventModule {
        export class BindsModule {
          public static class: java.lang.Class<sqip.internal.event.EventModule.BindsModule>;
          /**
           * Constructs a new instance of the sqip.internal.event.EventModule$BindsModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { eventLogger(param0: sqip.internal.event.EventLogger.Real): sqip.internal.event.EventLogger });
          public constructor();
          public eventLogger(param0: sqip.internal.event.EventLogger.Real): sqip.internal.event.EventLogger;
        }
        export class Events {
          public static class: java.lang.Class<sqip.internal.event.EventModule.Events>;
          /**
           * Constructs a new instance of the sqip.internal.event.EventModule$Events interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
        export class EventsUrl {
          public static class: java.lang.Class<sqip.internal.event.EventModule.EventsUrl>;
          /**
           * Constructs a new instance of the sqip.internal.event.EventModule$EventsUrl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class EventModule_EventJsonAdapterFactory extends dagger.internal.Factory<com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData>> {
        public static class: java.lang.Class<sqip.internal.event.EventModule_EventJsonAdapterFactory>;
        public constructor(moshiProvider: javax.inject.Provider<com.squareup.moshi.Moshi>);
        public get(): com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData>;
        public static create(moshiProvider: javax.inject.Provider<com.squareup.moshi.Moshi>): sqip.internal.event.EventModule_EventJsonAdapterFactory;
        public static eventJsonAdapter(moshi: com.squareup.moshi.Moshi): com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class EventModule_EventStreamServiceFactory extends dagger.internal.Factory<sqip.internal.event.EventStreamService> {
        public static class: java.lang.Class<sqip.internal.event.EventModule_EventStreamServiceFactory>;
        public static create(retrofitProvider: javax.inject.Provider<retrofit2.Retrofit>): sqip.internal.event.EventModule_EventStreamServiceFactory;
        public get(): sqip.internal.event.EventStreamService;
        public constructor(retrofitProvider: javax.inject.Provider<retrofit2.Retrofit>);
        public static eventStreamService(retrofit: retrofit2.Retrofit): sqip.internal.event.EventStreamService;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class EventModule_EventsUploadExecutorFactory extends dagger.internal.Factory<java.util.concurrent.ExecutorService> {
        public static class: java.lang.Class<sqip.internal.event.EventModule_EventsUploadExecutorFactory>;
        public static eventsUploadExecutor(): java.util.concurrent.ExecutorService;
        public static create(): sqip.internal.event.EventModule_EventsUploadExecutorFactory;
        public get(): java.util.concurrent.ExecutorService;
        public constructor();
      }
      export module EventModule_EventsUploadExecutorFactory {
        export class InstanceHolder {
          public static class: java.lang.Class<sqip.internal.event.EventModule_EventsUploadExecutorFactory.InstanceHolder>;
        }
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class EventModule_RetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
        public static class: java.lang.Class<sqip.internal.event.EventModule_RetrofitFactory>;
        public static create(okHttpClientProvider: javax.inject.Provider<okhttp3.OkHttpClient>, moshiProvider: javax.inject.Provider<com.squareup.moshi.Moshi>, eventsUrlProvider: javax.inject.Provider<string>): sqip.internal.event.EventModule_RetrofitFactory;
        public constructor(okHttpClientProvider: javax.inject.Provider<okhttp3.OkHttpClient>, moshiProvider: javax.inject.Provider<com.squareup.moshi.Moshi>, eventsUrlProvider: javax.inject.Provider<string>);
        public static retrofit(okHttpClient: okhttp3.OkHttpClient, moshi: com.squareup.moshi.Moshi, eventsUrl: string): retrofit2.Retrofit;
        public get(): retrofit2.Retrofit;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class EventStreamService {
        public static class: java.lang.Class<sqip.internal.event.EventStreamService>;
        /**
         * Constructs a new instance of the sqip.internal.event.EventStreamService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { logEvents(param0: sqip.internal.event.LogEventsRequest): retrofit2.Call<sqip.internal.event.LogEventsResponse> });
        public constructor();
        public logEvents(param0: sqip.internal.event.LogEventsRequest): retrofit2.Call<sqip.internal.event.LogEventsResponse>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export abstract class IapEvent {
        public static class: java.lang.Class<sqip.internal.event.IapEvent>;
        public getErrorCode(): string;
        public getTotalChallenges(): number;
        public getVerificationDuration(): number;
        public getBuyerAction(): string;
        public getHasChallengedUser(): boolean;
        public getValidationErrorField(): string;
        public getErrorDescription(): string;
        public getThreeDSTransactionStatus(): string;
        public getThreeDSWarningSeverity(): string;
        public getName(): string;
        public getAppErrorMessage(): string;
        public getNonceErrorCode(): string;
        public getEmptyContactFields(): string;
        public getThreeDSWarningCode(): string;
        public getLocationId(): string;
        public getFlowType(): string;
        public getThreeDSServerTransactionID(): string;
        public getThreeDSWarningDescription(): string;
        public getThreeDSChallengeType(): string;
        public getThreeDSVerificationToken(): string;
        public getAmount(): number;
        public getChallengesCompleted(): number;
        public getCurrencyCode(): string;
      }
      export module IapEvent {
        export abstract class BuyerVerification extends sqip.internal.event.IapEvent {
          public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification>;
          public getErrorDescription(): string;
          public getChallengesCompleted(): number;
          public getBuyerAction(): string;
          public getThreeDSTransactionStatus(): string;
          public getVerificationDuration(): number;
          public getEmptyContactFields(): string;
          public getThreeDSChallengeType(): string;
          public getTotalChallenges(): number;
          public getThreeDSVerificationToken(): string;
          public getHasChallengedUser(): boolean;
          public getThreeDSServerTransactionID(): string;
          public getThreeDSWarningDescription(): string;
          public getAmount(): number;
          public getThreeDSWarningCode(): string;
          public getLocationId(): string;
          public getErrorCode(): string;
          public getThreeDSWarningSeverity(): string;
          public getCurrencyCode(): string;
        }
        export module BuyerVerification {
          export class BuyerVerificationCancel extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.BuyerVerificationCancel>;
            public constructor(time: number);
          }
          export class BuyerVerificationChallengePending extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.BuyerVerificationChallengePending>;
            public constructor(challengesCompleted: number, totalChallenges: number);
          }
          export class BuyerVerificationError extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.BuyerVerificationError>;
            public constructor(code: string, description: string, time: number);
          }
          export class BuyerVerificationStarted extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.BuyerVerificationStarted>;
            public constructor(buyerAction: string, amount: number, currency: string, locationId: string, emptyContactFields: string);
          }
          export class BuyerVerificationSuccess extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.BuyerVerificationSuccess>;
            public constructor(hasChallengedUser: boolean, duration: number);
          }
          export class ThreeDSAuthenticationRequestCompleted extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.ThreeDSAuthenticationRequestCompleted>;
            public constructor(status: string, challengeType: string, verificationToken: string, serverTransId: string);
          }
          export class ThreeDSChallengeCompleted extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.ThreeDSChallengeCompleted>;
            public constructor(status: string, challengeType: string, verificationToken: string, serverTransId: string);
          }
          export class ThreeDSError extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.ThreeDSError>;
            public constructor(code: string, description: string, verificationDuration: number, verificationToken: string);
          }
          export class ThreeDSSecurityWarning extends sqip.internal.event.IapEvent.BuyerVerification {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.BuyerVerification.ThreeDSSecurityWarning>;
            public constructor(warningCode: string, warningDescription: string, warningSeverity: string);
          }
        }
        export abstract class CardEntry extends sqip.internal.event.IapEvent {
          public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry>;
          public getAppErrorMessage(): string;
          public getNonceErrorCode(): string;
          public getValidationErrorField(): string;
        }
        export module CardEntry {
          export class AppError extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.AppError>;
            public constructor(errorMessage: string);
          }
          export class Cancel extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.Cancel>;
            public static INSTANCE: sqip.internal.event.IapEvent.CardEntry.Cancel;
          }
          export class ConfigurationChange extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.ConfigurationChange>;
            public static INSTANCE: sqip.internal.event.IapEvent.CardEntry.ConfigurationChange;
          }
          export class NonceBackgroundHandling extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.NonceBackgroundHandling>;
            public static INSTANCE: sqip.internal.event.IapEvent.CardEntry.NonceBackgroundHandling;
          }
          export class NonceError extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.NonceError>;
            public constructor(errorCode: string);
          }
          export class NonceReceived extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.NonceReceived>;
            public static INSTANCE: sqip.internal.event.IapEvent.CardEntry.NonceReceived;
          }
          export class Started extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.Started>;
            public static INSTANCE: sqip.internal.event.IapEvent.CardEntry.Started;
          }
          export class Submit extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.Submit>;
            public static INSTANCE: sqip.internal.event.IapEvent.CardEntry.Submit;
          }
          export class Success extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.Success>;
            public static INSTANCE: sqip.internal.event.IapEvent.CardEntry.Success;
          }
          export class ValidationError extends sqip.internal.event.IapEvent.CardEntry {
            public static class: java.lang.Class<sqip.internal.event.IapEvent.CardEntry.ValidationError>;
            public constructor(field: string);
          }
        }
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class IapEventJsonData {
        public static class: java.lang.Class<sqip.internal.event.IapEventJsonData>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<sqip.internal.event.IapEventJsonData>;
        public getSqip_base_device_locale_country_code(): string;
        public getSqip_card_entry_base_error_code(): string;
        public getSqip_base_has_react_native_plugin(): boolean;
        public getSqip_card_entry_base_has_challenged_user(): boolean;
        public component42(): string;
        public constructor(
          recordedAtMs: number,
          sqip_base_square_application_id: string,
          sqip_base_device_locale_country_code: string,
          sqip_base_device_language: string,
          sqip_base_square_device_id: string,
          sqip_base_has_flutter_plugin: boolean,
          sqip_base_has_flutter: boolean,
          sqip_base_has_react_native: boolean,
          sqip_base_has_react_native_plugin: boolean,
          sqip_base_orientation: string,
          sqip_base_screen_width_pixels: number,
          sqip_base_screen_height_pixels: number,
          sqip_base_time_zone: string,
          sqip_base_is_app_debug_build: boolean,
          sqip_base_is_sdk_debug_build: boolean,
          sqip_android_base_app_package_name: string,
          sqip_android_base_app_version_name: string,
          sqip_android_base_app_version_code: number,
          sqip_android_base_target_api_version: number,
          sqip_android_base_min_api_version: number,
          sqip_android_base_screen_density_dpi: number,
          sqip_android_base_device_year_class: number,
          sqip_android_base_apk_byte_size: number,
          sqip_android_base_uses_androidx: boolean,
          sqip_android_base_process_uuid: string,
          sqip_card_entry_base_name: string,
          sqip_card_entry_base_session_uuid: string,
          sqip_card_entry_base_session_order: number,
          sqip_card_entry_base_theme: string,
          sqip_card_entry_base_validation_error_field: string,
          sqip_card_entry_base_nonce_error_code: string,
          sqip_card_entry_base_app_error_message: string,
          sqip_card_entry_base_flow_type: string,
          sqip_card_entry_base_amount: number,
          sqip_card_entry_base_buyer_action: string,
          sqip_card_entry_base_contact_empty_fields: string,
          sqip_card_entry_base_currency: string,
          sqip_card_entry_base_location_id: string,
          sqip_card_entry_base_challenges_completed_count: number,
          sqip_card_entry_base_challenges_total_count: number,
          sqip_card_entry_base_error_code: string,
          sqip_card_entry_base_error_description: string,
          sqip_card_entry_base_has_challenged_user: boolean,
          sqip_card_entry_base_verification_duration_in_milliseconds: number,
          sqip_card_entry_base_three_ds_trans_status: string,
          sqip_card_entry_base_challenge_type: string,
          sqip_card_entry_base_verification_token: string,
          sqip_card_entry_base_three_ds_server_trans_id: string,
          sqip_card_entry_base_three_ds_warning_severity: string,
          sqip_card_entry_base_three_ds_warning_code: string,
          sqip_card_entry_base_three_ds_warning_description: string,
          sqip_base_device_model: string,
          sqip_android_base_device_sdk_int: number,
          sqip_android_base_device_manufacturer: string,
          sqip_android_base_device_brand: string,
          u_library_name: string,
          u_library_version: string,
        );
        public getSqip_android_base_device_brand(): string;
        public component32(): string;
        public component55(): string;
        public component12(): number;
        public getSqip_android_base_device_sdk_int(): number;
        public component45(): string;
        public getSqip_base_screen_height_pixels(): number;
        public component5(): string;
        public component2(): string;
        public component25(): string;
        public getRecordedAtMs(): number;
        public component35(): string;
        public getSqip_android_base_device_year_class(): number;
        public component22(): number;
        public component38(): string;
        public getSqip_card_entry_base_nonce_error_code(): string;
        public component48(): string;
        public getSqip_card_entry_base_challenges_completed_count(): number;
        public getSqip_base_has_react_native(): boolean;
        public copy(
          recordedAtMs: number,
          sqip_base_square_application_id: string,
          sqip_base_device_locale_country_code: string,
          sqip_base_device_language: string,
          sqip_base_square_device_id: string,
          sqip_base_has_flutter_plugin: boolean,
          sqip_base_has_flutter: boolean,
          sqip_base_has_react_native: boolean,
          sqip_base_has_react_native_plugin: boolean,
          sqip_base_orientation: string,
          sqip_base_screen_width_pixels: number,
          sqip_base_screen_height_pixels: number,
          sqip_base_time_zone: string,
          sqip_base_is_app_debug_build: boolean,
          sqip_base_is_sdk_debug_build: boolean,
          sqip_android_base_app_package_name: string,
          sqip_android_base_app_version_name: string,
          sqip_android_base_app_version_code: number,
          sqip_android_base_target_api_version: number,
          sqip_android_base_min_api_version: number,
          sqip_android_base_screen_density_dpi: number,
          sqip_android_base_device_year_class: number,
          sqip_android_base_apk_byte_size: number,
          sqip_android_base_uses_androidx: boolean,
          sqip_android_base_process_uuid: string,
          sqip_card_entry_base_name: string,
          sqip_card_entry_base_session_uuid: string,
          sqip_card_entry_base_session_order: number,
          sqip_card_entry_base_theme: string,
          sqip_card_entry_base_validation_error_field: string,
          sqip_card_entry_base_nonce_error_code: string,
          sqip_card_entry_base_app_error_message: string,
          sqip_card_entry_base_flow_type: string,
          sqip_card_entry_base_amount: number,
          sqip_card_entry_base_buyer_action: string,
          sqip_card_entry_base_contact_empty_fields: string,
          sqip_card_entry_base_currency: string,
          sqip_card_entry_base_location_id: string,
          sqip_card_entry_base_challenges_completed_count: number,
          sqip_card_entry_base_challenges_total_count: number,
          sqip_card_entry_base_error_code: string,
          sqip_card_entry_base_error_description: string,
          sqip_card_entry_base_has_challenged_user: boolean,
          sqip_card_entry_base_verification_duration_in_milliseconds: number,
          sqip_card_entry_base_three_ds_trans_status: string,
          sqip_card_entry_base_challenge_type: string,
          sqip_card_entry_base_verification_token: string,
          sqip_card_entry_base_three_ds_server_trans_id: string,
          sqip_card_entry_base_three_ds_warning_severity: string,
          sqip_card_entry_base_three_ds_warning_code: string,
          sqip_card_entry_base_three_ds_warning_description: string,
          sqip_base_device_model: string,
          sqip_android_base_device_sdk_int: number,
          sqip_android_base_device_manufacturer: string,
          sqip_android_base_device_brand: string,
          u_library_name: string,
          u_library_version: string,
        ): sqip.internal.event.IapEventJsonData;
        public getSqip_android_base_app_package_name(): string;
        public getSqip_card_entry_base_currency(): string;
        public getSqip_android_base_device_manufacturer(): string;
        public getSqip_card_entry_base_three_ds_warning_code(): string;
        public getSqip_card_entry_base_location_id(): string;
        public component46(): string;
        public component36(): string;
        public component56(): string;
        public component34(): number;
        public getSqip_base_time_zone(): string;
        public getSqip_base_square_device_id(): string;
        public component13(): string;
        public component44(): number;
        public component1(): number;
        public component16(): string;
        public getSqip_card_entry_base_validation_error_field(): string;
        public component26(): string;
        public component30(): string;
        public component43(): boolean;
        public getSqip_android_base_process_uuid(): string;
        public equals(other: any): boolean;
        public component50(): string;
        public getSqip_card_entry_base_verification_duration_in_milliseconds(): number;
        public component41(): string;
        public component51(): string;
        public component54(): string;
        public component39(): number;
        public getSqip_base_device_language(): string;
        public getU_library_name(): string;
        public getSqip_android_base_uses_androidx(): boolean;
        public component19(): number;
        public getSqip_base_is_app_debug_build(): boolean;
        public component52(): string;
        public component28(): number;
        public component33(): string;
        public component18(): number;
        public getSqip_card_entry_base_flow_type(): string;
        public getSqip_card_entry_base_verification_token(): string;
        public getSqip_base_is_sdk_debug_build(): boolean;
        public getSqip_card_entry_base_challenge_type(): string;
        public hashCode(): number;
        public component9(): boolean;
        public getSqip_card_entry_base_name(): string;
        public getSqip_card_entry_base_three_ds_trans_status(): string;
        public component6(): boolean;
        public component8(): boolean;
        public getSqip_card_entry_base_three_ds_warning_description(): string;
        public component7(): boolean;
        public writeToParcel(out: globalAndroid.os.Parcel, flags: number): void;
        public component31(): string;
        public component4(): string;
        public toString(): string;
        public getSqip_base_device_model(): string;
        public component23(): number;
        public component37(): string;
        public component53(): number;
        public component17(): string;
        public component57(): string;
        public component3(): string;
        public component10(): string;
        public component47(): string;
        public component14(): boolean;
        public describeContents(): number;
        public getSqip_card_entry_base_challenges_total_count(): number;
        public component15(): boolean;
        public component24(): boolean;
        public getSqip_card_entry_base_session_uuid(): string;
        public getSqip_card_entry_base_theme(): string;
        public component27(): string;
        public component11(): number;
        public getSqip_android_base_app_version_code(): number;
        public getSqip_card_entry_base_three_ds_server_trans_id(): string;
        public component21(): number;
        public getSqip_base_has_flutter_plugin(): boolean;
        public getSqip_card_entry_base_contact_empty_fields(): string;
        public getSqip_base_has_flutter(): boolean;
        public getSqip_card_entry_base_three_ds_warning_severity(): string;
        public component49(): string;
        public getSqip_base_square_application_id(): string;
        public getSqip_android_base_screen_density_dpi(): number;
        public getSqip_base_orientation(): string;
        public component29(): string;
        public getSqip_android_base_app_version_name(): string;
        public getSqip_android_base_min_api_version(): number;
        public getSqip_base_screen_width_pixels(): number;
        public getSqip_android_base_target_api_version(): number;
        public getSqip_card_entry_base_amount(): number;
        public getSqip_card_entry_base_buyer_action(): string;
        public component20(): number;
        public getU_library_version(): string;
        public getSqip_card_entry_base_error_description(): string;
        public component40(): number;
        public getSqip_android_base_apk_byte_size(): number;
        public getSqip_card_entry_base_session_order(): number;
        public getSqip_card_entry_base_app_error_message(): string;
      }
      export module IapEventJsonData {
        export class Creator extends globalAndroid.os.Parcelable.Creator<sqip.internal.event.IapEventJsonData> {
          public static class: java.lang.Class<sqip.internal.event.IapEventJsonData.Creator>;
          public newArray(size: number): androidNative.Array<sqip.internal.event.IapEventJsonData>;
          public createFromParcel(parcel: globalAndroid.os.Parcel): sqip.internal.event.IapEventJsonData;
          public constructor();
        }
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class IapEventJsonDataJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.event.IapEventJsonData> {
        public static class: java.lang.Class<sqip.internal.event.IapEventJsonDataJsonAdapter>;
        public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.event.IapEventJsonData): void;
        public fromJson(it: com.squareup.moshi.JsonReader): sqip.internal.event.IapEventJsonData;
        public constructor(moshi: com.squareup.moshi.Moshi);
        public toString(): string;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class JsonDataEventWrapper {
        public static class: java.lang.Class<sqip.internal.event.JsonDataEventWrapper>;
        public getUuid(): string;
        public getJson_data(): string;
        public component1(): string;
        public component2(): number;
        public component6(): string;
        public component4(): string;
        public toString(): string;
        public getApp_name(): string;
        public getCatalog_name(): string;
        public constructor(catalog_name: string, recorded_at_usec: number, json_data: string, app_name: string, uuid: string, secret_token: string, es2_debug_trace_id: string);
        public equals(other: any): boolean;
        public getSecret_token(): string;
        public component7(): string;
        public component3(): string;
        public hashCode(): number;
        public component5(): string;
        public getEs2_debug_trace_id(): string;
        public copy(catalog_name: string, recorded_at_usec: number, json_data: string, app_name: string, uuid: string, secret_token: string, es2_debug_trace_id: string): sqip.internal.event.JsonDataEventWrapper;
        public getRecorded_at_usec(): number;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class JsonDataEventWrapperJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.event.JsonDataEventWrapper> {
        public static class: java.lang.Class<sqip.internal.event.JsonDataEventWrapperJsonAdapter>;
        public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.event.JsonDataEventWrapper): void;
        public constructor(moshi: com.squareup.moshi.Moshi);
        public toString(): string;
        public fromJson(it: com.squareup.moshi.JsonReader): sqip.internal.event.JsonDataEventWrapper;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class LogEventsRequest {
        public static class: java.lang.Class<sqip.internal.event.LogEventsRequest>;
        public component2(): boolean;
        public equals(other: any): boolean;
        public hashCode(): number;
        public component1(): java.util.List<sqip.internal.event.JsonDataEventWrapper>;
        public getSync(): boolean;
        public constructor(events: java.util.List<sqip.internal.event.JsonDataEventWrapper>, sync: boolean);
        public copy(events: java.util.List<sqip.internal.event.JsonDataEventWrapper>, sync: boolean): sqip.internal.event.LogEventsRequest;
        public toString(): string;
        public getEvents(): java.util.List<sqip.internal.event.JsonDataEventWrapper>;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class LogEventsRequestJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.event.LogEventsRequest> {
        public static class: java.lang.Class<sqip.internal.event.LogEventsRequestJsonAdapter>;
        public fromJson(it: com.squareup.moshi.JsonReader): sqip.internal.event.LogEventsRequest;
        public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.event.LogEventsRequest): void;
        public constructor(moshi: com.squareup.moshi.Moshi);
        public toString(): string;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class LogEventsResponse {
        public static class: java.lang.Class<sqip.internal.event.LogEventsResponse>;
        public getSuccess_count(): number;
        public component3(): number;
        public equals(other: any): boolean;
        public constructor(success_count: number, failure_count: number, invalid_count: number);
        public component2(): number;
        public hashCode(): number;
        public component1(): number;
        public getFailure_count(): number;
        public toString(): string;
        public getInvalid_count(): number;
        public copy(success_count: number, failure_count: number, invalid_count: number): sqip.internal.event.LogEventsResponse;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module event {
      export class LogEventsResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.event.LogEventsResponse> {
        public static class: java.lang.Class<sqip.internal.event.LogEventsResponseJsonAdapter>;
        public fromJson(failure_count: com.squareup.moshi.JsonReader): sqip.internal.event.LogEventsResponse;
        public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.event.LogEventsResponse): void;
        public constructor(moshi: com.squareup.moshi.Moshi);
        public toString(): string;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class CreateCardNonceError {
        public static class: java.lang.Class<sqip.internal.nonce.CreateCardNonceError>;
        public codeAsEnum(): sqip.internal.nonce.CreateCardNonceError.Code;
        public component1(): string;
        public copy(code: string, detail: string, field: string, category: string): sqip.internal.nonce.CreateCardNonceError;
        public component4(): string;
        public toString(): string;
        public getField(): string;
        public getCategory(): string;
        public equals(other: any): boolean;
        public component3(): string;
        public hashCode(): number;
        public constructor(code: string, detail: string, field: string, category: string);
        public getDetail(): string;
        public component2(): string;
        public getCode(): string;
      }
      export module CreateCardNonceError {
        export class Code {
          public static class: java.lang.Class<sqip.internal.nonce.CreateCardNonceError.Code>;
          public static INVALID_CARD: sqip.internal.nonce.CreateCardNonceError.Code;
          public static INVALID_EXPIRATION: sqip.internal.nonce.CreateCardNonceError.Code;
          public static INVALID_VALUE: sqip.internal.nonce.CreateCardNonceError.Code;
          public static MISSING_REQUIRED_PARAMETER: sqip.internal.nonce.CreateCardNonceError.Code;
          public static NOT_AUTHORIZED: sqip.internal.nonce.CreateCardNonceError.Code;
          public static RATE_LIMITED: sqip.internal.nonce.CreateCardNonceError.Code;
          public static UNSUPPORTED_CARD_BRAND: sqip.internal.nonce.CreateCardNonceError.Code;
          public static UNSUPPORTED_CLIENT_VERSION: sqip.internal.nonce.CreateCardNonceError.Code;
          public static getEntries(): any;
          public static values(): androidNative.Array<sqip.internal.nonce.CreateCardNonceError.Code>;
          public static valueOf(value: string): sqip.internal.nonce.CreateCardNonceError.Code;
        }
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class CreateCardNonceErrorCode {
        public static class: java.lang.Class<sqip.internal.nonce.CreateCardNonceErrorCode>;
        public static INVALID_CARD: sqip.internal.nonce.CreateCardNonceErrorCode;
        public static NO_NETWORK: sqip.internal.nonce.CreateCardNonceErrorCode;
        public static UNSUPPORTED_CARD: sqip.internal.nonce.CreateCardNonceErrorCode;
        public static USAGE_ERROR: sqip.internal.nonce.CreateCardNonceErrorCode;
        public static values(): androidNative.Array<sqip.internal.nonce.CreateCardNonceErrorCode>;
        public static getEntries(): any;
        public static valueOf(value: string): sqip.internal.nonce.CreateCardNonceErrorCode;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class CreateCardNonceErrorJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.nonce.CreateCardNonceError> {
        public static class: java.lang.Class<sqip.internal.nonce.CreateCardNonceErrorJsonAdapter>;
        public fromJson(detail: com.squareup.moshi.JsonReader): sqip.internal.nonce.CreateCardNonceError;
        public constructor(moshi: com.squareup.moshi.Moshi);
        public toString(): string;
        public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.nonce.CreateCardNonceError): void;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class CreateCardNonceErrorResponse {
        public static class: java.lang.Class<sqip.internal.nonce.CreateCardNonceErrorResponse>;
        public constructor(errors: java.util.List<sqip.internal.nonce.CreateCardNonceError>);
        public equals(other: any): boolean;
        public hashCode(): number;
        public getErrors(): java.util.List<sqip.internal.nonce.CreateCardNonceError>;
        public component1(): java.util.List<sqip.internal.nonce.CreateCardNonceError>;
        public copy(errors: java.util.List<sqip.internal.nonce.CreateCardNonceError>): sqip.internal.nonce.CreateCardNonceErrorResponse;
        public toString(): string;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class CreateCardNonceErrorResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.nonce.CreateCardNonceErrorResponse> {
        public static class: java.lang.Class<sqip.internal.nonce.CreateCardNonceErrorResponseJsonAdapter>;
        public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.nonce.CreateCardNonceErrorResponse): void;
        public constructor(moshi: com.squareup.moshi.Moshi);
        public toString(): string;
        public fromJson(this_: com.squareup.moshi.JsonReader): sqip.internal.nonce.CreateCardNonceErrorResponse;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class CreateCardNonceSuccessResponse {
        public static class: java.lang.Class<sqip.internal.nonce.CreateCardNonceSuccessResponse>;
        public getCard_nonce(): string;
        public copy(card_nonce: string, card: sqip.internal.CardDataResponse): sqip.internal.nonce.CreateCardNonceSuccessResponse;
        public equals(other: any): boolean;
        public component1(): string;
        public hashCode(): number;
        public constructor(card_nonce: string, card: sqip.internal.CardDataResponse);
        public component2(): sqip.internal.CardDataResponse;
        public getCard(): sqip.internal.CardDataResponse;
        public toString(): string;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class CreateCardNonceSuccessResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.nonce.CreateCardNonceSuccessResponse> {
        public static class: java.lang.Class<sqip.internal.nonce.CreateCardNonceSuccessResponseJsonAdapter>;
        public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.nonce.CreateCardNonceSuccessResponse): void;
        public constructor(moshi: com.squareup.moshi.Moshi);
        public toString(): string;
        public fromJson(card: com.squareup.moshi.JsonReader): sqip.internal.nonce.CreateCardNonceSuccessResponse;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class DebugErrorCodes {
        public static class: java.lang.Class<sqip.internal.nonce.DebugErrorCodes>;
        public static INSTANCE: sqip.internal.nonce.DebugErrorCodes;
        public static UNEXPECTED_JSON_ERROR_RESPONSE: string = 'unexpected_json_error_response';
        public static UNEXPECTED_EMPTY_RESPONSE_ERROR_LIST: string = 'unexpected_empty_response_error_list';
        public static UNEXPECTED_JSON_RESPONSE: string = 'unexpected_json_response';
        public static UNEXPECTED_RETROFIT_FAILURE: string = 'unexpected_retrofit_failure';
        public static UNEXPECTED_BUYER_VERIFICATION_FAILURE: string = 'unexpected_buyer_verification_failure';
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class DeviceInfoRequest {
        public static class: java.lang.Class<sqip.internal.nonce.DeviceInfoRequest>;
        public getS16(): boolean;
        public component2(): boolean;
        public component6(): string;
        public component13(): string;
        public getS1(): boolean;
        public getS12(): boolean;
        public getS20(): string;
        public component16(): string;
        public getS2(): boolean;
        public getS8(): number;
        public getS3(): string;
        public getS7(): string;
        public component3(): boolean;
        public getS14(): string;
        public component12(): number;
        public component19(): string;
        public equals(other: any): boolean;
        public getS0(): string;
        public hashCode(): number;
        public component5(): string;
        public getS9(): number;
        public getS17(): string;
        public getS4(): string;
        public getS10(): number;
        public getS13(): number;
        public component18(): string;
        public getS15(): string;
        public component1(): string;
        public copy(s0: string, s1: boolean, s2: boolean, s3: string, s4: string, s6: string, s7: string, s8: number, s9: number, s10: number, s12: boolean, s13: number, s14: string, s15: string, s16: boolean, s17: string, s18: string, s19: string, s20: string): sqip.internal.nonce.DeviceInfoRequest;
        public component4(): string;
        public getS18(): string;
        public toString(): string;
        public constructor(s0: string, s1: boolean, s2: boolean, s3: string, s4: string, s6: string, s7: string, s8: number, s9: number, s10: number, s12: boolean, s13: number, s14: string, s15: string, s16: boolean, s17: string, s18: string, s19: string, s20: string);
        public component9(): number;
        public component11(): boolean;
        public component10(): number;
        public getS19(): string;
        public component14(): string;
        public component17(): string;
        public component7(): string;
        public component15(): boolean;
        public getS6(): string;
        public component8(): number;
      }
    }
  }
}

declare module sqip {
  export module internal {
    export module nonce {
      export class DeviceInfoRequestJsonAdapter extends com.squareup.moshi.JsonAdapter<sqip.internal.nonce.DeviceInfoRequest> {
        public static class: java.lang.Class<sqip.internal.nonce.DeviceInfoRequestJsonAdapter>;
        public fromJson(s1: com.squareup.moshi.JsonReader): sqip.internal.nonce.DeviceInfoRequest;
        public toJson(writer: com.squareup.moshi.JsonWriter, value_: sqip.internal.nonce.DeviceInfoRequest): void;
        public constructor(moshi: com.squareup.moshi.Moshi);
        public toString(): string;
      }
    }
  }
}

//Generics information:
//sqip.internal.Parceler:1
//sqip.internal.Result:2
//sqip.internal.ResultError:1
