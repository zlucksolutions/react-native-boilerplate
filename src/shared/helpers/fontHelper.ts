import { PixelRatio, Platform } from 'react-native';
import { deviceUtils } from '@shared/utils/deviceUtils';

const scale = deviceUtils.dimensions.width / 375; // Base width of 375 for scaling

type FontWeightType = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type FontFamilyType = 'regular' | 'medium' | 'light' | 'thin' | 'bold';

interface FontHelperType {
  scaleFont: (size: number) => number;
  fonts: Record<FontFamilyType, string>;
  sizes: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    body: number;
    caption: number;
    small: number;
  };
  weights: Record<string, FontWeightType>;
  lineHeights: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    body: number;
    caption: number;
    small: number;
  };
  letterSpacing: {
    tight: number;
    normal: number;
    wide: number;
  };
  getScaledFontSize: (size: keyof FontHelperType['sizes']) => number;
  getFontStyle: (
    size: keyof FontHelperType['sizes'],
    weight?: keyof FontHelperType['weights'],
    family?: FontFamilyType
  ) => {
    fontSize: number;
    fontWeight: FontWeightType;
    fontFamily: string;
    lineHeight: number;
  };
}

export const fontHelper: FontHelperType = {
  // Scale font size based on screen width
  scaleFont: (size: number): number => {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  },

  // Font families
  fonts: {
    regular: Platform.select({
      ios: 'Poppins-Regular',
      android: 'Poppins-Regular',
      default: 'Poppins-Regular',
    }) as string,
    medium: Platform.select({
      ios: 'Poppins-Medium',
      android: 'Poppins-Medium',
      default: 'Poppins-Medium',
    }) as string,
    light: Platform.select({
      ios: 'Poppins-Light',
      android: 'Poppins-Light',
      default: 'Poppins-Light',
    }) as string,
    thin: Platform.select({
      ios: 'Poppins-Thin',
      android: 'Poppins-Thin',
      default: 'Poppins-Thin',
    }) as string,
    bold: Platform.select({
      ios: 'Poppins-Bold',
      android: 'Poppins-Bold',
      default: 'Poppins-Bold',
    }) as string,
  },

  // Font sizes
  sizes: {
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    body: 14,
    caption: 12,
    small: 10,
  },

  // Font weights
  weights: {
    thin: '100',
    ultraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
    black: '900',
  },

  // Line heights
  lineHeights: {
    h1: 40,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 22,
    body: 20,
    caption: 16,
    small: 14,
  },

  // Letter spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
  },

  // Get scaled font size
  getScaledFontSize: (size: keyof typeof fontHelper.sizes): number => {
    return fontHelper.scaleFont(fontHelper.sizes[size]);
  },

  // Get font style object
  getFontStyle: (
    size: keyof typeof fontHelper.sizes,
    weight: keyof typeof fontHelper.weights = 'regular',
    family: keyof typeof fontHelper.fonts = 'regular'
  ) => {
    return {
      fontSize: fontHelper.getScaledFontSize(size),
      fontWeight: fontHelper.weights[weight],
      fontFamily: fontHelper.fonts[family],
      lineHeight: fontHelper.lineHeights[size],
    };
  },
}; 