// eslint-disable-next-line n/no-path-concat
// process.env.EXPO_ROUTER_APP_ROOT = __dirname + '/src/app'

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      'expo-router/babel',
      'nativewind/babel',
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@assets': './assets',
            '@config': './config'
          }
        }
      ]
    ]
  }
}
