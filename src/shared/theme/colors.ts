export const palette = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Primary colors
  primary100: '#E6F2FF',
  primary300: '#66B2FF',
  primary500: '#007AFF',
  primary700: '#0055B3',
  primary900: '#003166',

  // Secondary colors
  secondary100: '#F0F4F8',
  secondary300: '#B3C5D6',
  secondary500: '#718096',
  secondary700: '#2D3748',
  secondary900: '#1A202C',

  // Success colors
  success100: '#E6F6EC',
  success500: '#00875A',
  success900: '#004D34',

  // Error colors
  error100: '#FEE2E2',
  error500: '#EF4444',
  error900: '#991B1B',

  // Warning colors
  warning100: '#FEF3C7',
  warning500: '#F59E0B',
  warning900: '#92400E',

  // Info colors
  info100: '#E0F2FE',
  info500: '#0EA5E9',
  info900: '#075985',

  // Grayscale
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
};

export const semanticColors = {
  light: {
    // Background colors
    background: palette.white,
    backgroundAlt: palette.gray100,
    surface: palette.white,
    surfaceAlt: palette.gray100,

    // Text colors
    text: palette.gray900,
    textMuted: palette.gray600,
    textInverse: palette.white,

    // Border colors
    border: palette.gray200,
    borderFocus: palette.primary500,

    // Action colors
    primary: palette.primary500,
    primaryPressed: palette.primary700,
    secondary: palette.secondary500,
    secondaryPressed: palette.secondary700,

    // Status colors
    success: palette.success500,
    error: palette.error500,
    warning: palette.warning500,
    info: palette.info500,

    // Component specific
    card: palette.white,
    cardBorder: palette.gray200,
    input: palette.white,
    inputBorder: palette.gray300,
    toast: palette.gray800,
  },
  dark: {
    // Background colors
    background: palette.gray900,
    backgroundAlt: palette.gray800,
    surface: palette.gray800,
    surfaceAlt: palette.gray700,

    // Text colors
    text: palette.gray100,
    textMuted: palette.gray400,
    textInverse: palette.gray900,

    // Border colors
    border: palette.gray700,
    borderFocus: palette.primary500,

    // Action colors
    primary: palette.primary500,
    primaryPressed: palette.primary700,
    secondary: palette.secondary500,
    secondaryPressed: palette.secondary700,

    // Status colors
    success: palette.success500,
    error: palette.error500,
    warning: palette.warning500,
    info: palette.info500,

    // Component specific
    card: palette.gray800,
    cardBorder: palette.gray700,
    input: palette.gray800,
    inputBorder: palette.gray600,
    toast: palette.gray200,
  },
}; 