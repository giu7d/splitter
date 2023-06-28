/** @type {import('expo/config').ExpoConfig} */
module.exports = {
  expo: {
    name: 'splitter',
    slug: 'splitter',
    version: '1.0.0',
    owner: 'giu7d',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    jsEngine: 'hermes',
    runtimeVersion: 'exposdk:48.0.0',
    assetBundlePatterns: ['**/*'],
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF'
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/916828f4-940a-42fa-a42d-a662c47baf27'
    },
    plugins: [
      '@config-plugins/detox',
      [
        'expo-updates',
        {
          username: 'giu7d'
        }
      ],
      [
        'expo-build-properties',
        {
          ios: {
            flipper: true,
            newArchEnabled: true
          },
          android: {
            newArchEnabled: true
          }
        }
      ]
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.prisma.splitter'
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      },
      package: 'com.prisma.splitter'
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      ...process.env,
      eas: {
        projectId: '916828f4-940a-42fa-a42d-a662c47baf27'
      }
    }
  }
}
