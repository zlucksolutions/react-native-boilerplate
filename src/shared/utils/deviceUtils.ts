import { Platform, Dimensions, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

export const deviceUtils = {
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  
  dimensions: {
    width,
    height,
    screenWidth: width,
    screenHeight: height,
  },

  hasNotch: DeviceInfo.hasNotch(),
  
  getStatusBarHeight: () => {
    return Platform.OS === 'ios' ? (deviceUtils.hasNotch ? 44 : 20) : StatusBar.currentHeight || 0;
  },

  getBottomSpace: () => {
    return deviceUtils.hasNotch ? 34 : 0;
  },

  isTablet: DeviceInfo.isTablet(),

  getDeviceId: () => DeviceInfo.getDeviceId(),

  getBuildNumber: () => DeviceInfo.getBuildNumber(),

  getVersion: () => DeviceInfo.getVersion(),

  getBrand: () => DeviceInfo.getBrand(),

  getModel: () => DeviceInfo.getModel(),

  isEmulator: async () => await DeviceInfo.isEmulator(),

  getUniqueId: () => DeviceInfo.getUniqueId(),

  getSystemVersion: () => DeviceInfo.getSystemVersion(),

  isLandscape: () => {
    const dim = Dimensions.get('window');
    return dim.width >= dim.height;
  },

  isPortrait: () => {
    const dim = Dimensions.get('window');
    return dim.height >= dim.width;
  },
}; 