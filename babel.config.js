module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo',['module:metro-react-native-babel-preset', {
      unstable_disableES6Transforms: true
  }]],
  };
};
