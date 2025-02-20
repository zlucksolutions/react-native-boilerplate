module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@shared': './src/shared',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@constants': './src/constants',
          '@features': './src/features'
        }
      }
    ]
  ]
};
