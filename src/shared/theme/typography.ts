import { TextStyle } from 'react-native';

export const fontFamilies = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
};

export const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

export const fontWeights = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

type FontSize = keyof typeof fontSizes;
type LineHeight = keyof typeof lineHeights;
type FontWeight = keyof typeof fontWeights;

export const createFontStyle = (
  size: FontSize = 'base',
  weight: FontWeight = 'normal',
  lineHeight: LineHeight = 'normal',
): TextStyle => ({
  fontSize: fontSizes[size],
  fontWeight: fontWeights[weight],
  lineHeight: fontSizes[size] * lineHeights[lineHeight],
});

export const typography = {
  h1: createFontStyle('4xl', 'bold', 'tight'),
  h2: createFontStyle('3xl', 'bold', 'tight'),
  h3: createFontStyle('2xl', 'bold', 'tight'),
  h4: createFontStyle('xl', 'bold', 'tight'),
  h5: createFontStyle('lg', 'bold', 'tight'),
  h6: createFontStyle('base', 'bold', 'tight'),
  
  subtitle1: createFontStyle('xl', 'medium', 'normal'),
  subtitle2: createFontStyle('lg', 'medium', 'normal'),
  
  body1: createFontStyle('base', 'normal', 'relaxed'),
  body2: createFontStyle('sm', 'normal', 'relaxed'),
  
  button: createFontStyle('base', 'medium', 'normal'),
  caption: createFontStyle('xs', 'normal', 'normal'),
  overline: {
    ...createFontStyle('xs', 'medium', 'normal'),
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
  },
};

export type TypographyType = typeof typography; 