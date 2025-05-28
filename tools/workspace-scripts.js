module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @nativescript/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@nativescript': {
      // @nativescript/payments
      payments: {
        build: {
          script: 'nx run payments:build.all',
          description: '@nativescript/payments: Build',
        },
      },
      // @nativescript/google-pay
      'google-pay': {
        build: {
          script: 'nx run google-pay:build.all',
          description: '@nativescript/google-pay: Build',
        },
      },
      // @nativescript/apple-pay
      'apple-pay': {
        build: {
          script: 'nx run apple-pay:build.all',
          description: '@nativescript/apple-pay: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      payments: {
        script: 'nx run payments:focus',
        description: 'Focus on @nativescript/payments',
      },
      'google-pay': {
        script: 'nx run google-pay:focus',
        description: 'Focus on @nativescript/google-pay',
      },
      'apple-pay': {
        script: 'nx run apple-pay:focus',
        description: 'Focus on @nativescript/apple-pay',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
