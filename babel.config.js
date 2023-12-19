module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@enums': './src/enums',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@services': './src/services',
          '@store': './src/store',
          '@styles': './src/styles',
        },
      },
    ]
  ],
};
