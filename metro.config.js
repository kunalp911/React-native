const util = require('util');
if (util.styleText && !util.__styleTextPatched) {
  const origStyleText = util.styleText;
  util.styleText = function(format, text) {
    if (Array.isArray(format)) {
      return format.reduce((str, fmt) => origStyleText(fmt, str), text);
    }
    return origStyleText(format, text);
  };
  util.__styleTextPatched = true;
}

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
