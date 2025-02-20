import { DefaultTheme } from '@react-navigation/native';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  error: string;
  success: string;
  warning: string;
  surface: string;
  surfaceVariant: string;
  onSurface: string;
}

export interface Theme {
  dark: boolean;
  colors: ThemeColors;
}

export type ThemeVariant = 'morning' | 'afternoon' | 'evening' | 'night';

export interface BrandTheme {
  morning: Theme;
  afternoon: Theme;
  evening: Theme;
  night: Theme;
}

export const morningTheme: Theme = {
  dark: false,
  colors: {
    primary: '#32CD32',
    secondary: '#39FF14', 
    background: '#F0FFF0',
    card: '#FFFFFF',
    text: '#212121',
    border: '#BDBDBD',
    notification: '#E57373',
    error: '#E57373',
    success: '#81C784', 
    warning: '#FFB74D',
    surface: '#FFFFFF',
    surfaceVariant: '#E8F5E9',
    onSurface: '#212121', 
  },
};

export const afternoonTheme: Theme = {
  dark: false,
  colors: {
    primary: '#ffba00',
    secondary: '#FFD54F',
    background: '#FFF3E0',
    card: '#FFFFFF',
    text: '#212121',
    border: '#E0E0E0',
    notification: '#D32F2F',
    error: '#D32F2F',
    success: '#388E3C',
    warning: '#FB8C00',
    surface: '#FFFFFF',
    surfaceVariant: '#F5F5F5',
    onSurface: '#212121',
  },
};

export const eveningTheme: Theme = {
  dark: true,
  colors: {
    primary: '#FFB74D', // Light Orange
    secondary: '#FFCC80', // Muted Orange
    background: '#332620', // Dark Brownish Gray
    card: '#42342E', // Medium Brownish Gray
    text: '#E0E0E0', // Light Gray
    border: '#546E7A',
    notification: '#F48FB1', // Pink
    error: '#F48FB1',
    success: '#A5D6A7',
    warning: '#FFB300',
    surface: '#42342E',
    surfaceVariant: '#455A64',
    onSurface: '#E0E0E0',
  },
};

export const nightTheme: Theme = {
  dark: true,
  colors: {
    primary: '#9C27B0', // Deep Purple
    secondary: '#BA68C8', // Lavender
    background: '#1E1A23', // Very Dark Purple Tint
    card: '#2C2631', // Dark Purple Gray
    text: '#EEEEEE', // Very Light Gray
    border: '#455A64',
    notification: '#E57373', // Muted Red
    error: '#E57373',
    success: '#A5D6A7',
    warning: '#FFCA28',
    surface: '#2C2631',
    surfaceVariant: '#37474F',
    onSurface: '#EEEEEE',
  },
};

export const brandThemes: Record<string, BrandTheme> = {
  default: {
    morning: morningTheme,
    afternoon: afternoonTheme,
    evening: eveningTheme,
    night: nightTheme,
  },
}; 