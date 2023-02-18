export default {
  expo: {
    name: 'splitter',
    slug: 'splitter',
    version: '1.0.0',
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
      fallbackToCacheTimeout: 0
    },
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
      ...process.env
    }
  }
}
