import {PROD_API_URL, STAGE_API_URL} from '@env';
import {Platform} from 'react-native';

export const AppMode = {
  PROD: 'PROD',
  STAGE: 'STAGE',
};
export let APP_MODE = AppMode.STAGE; //PROD / STAGE

export const API_URL = APP_MODE !== 'PROD' ? STAGE_API_URL : PROD_API_URL;

//Package name
export const IOS_PACKAGE = 'com.zluckrn.demo';
export const ANDROID_PACKAGE = 'com.zluckrn.demo';
export const PACKAGE_NAME =
  Platform.OS === 'ios' ? IOS_PACKAGE : ANDROID_PACKAGE;
