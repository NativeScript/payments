import { NativeScriptConfig } from '@nativescript/core';

export default {
  ios: {
    SPMPackages: [
      {
        name: 'SquareInAppPaymentsSDK',
        libs: ['SquareBuyerVerificationSDK', 'SquareInAppPaymentsSDK'],
        repositoryURL: 'https://github.com/square/in-app-payments-ios',
        version: '1.6.3',
      },
    ],
  },
} as NativeScriptConfig;
