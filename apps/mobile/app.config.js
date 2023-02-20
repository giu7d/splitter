export default {
  expo: {
    name: 'splitter',
    slug: 'splitter',
    version: '1.0.0',
    owner: 'giu7d',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    jsEngine: 'hermes',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF'
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/916828f4-940a-42fa-a42d-a662c47baf27'
    },
    runtimeVersion: '47.0.0',
    assetBundlePatterns: ['**/*'],
    plugins: ['expo-community-flipper'],
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
