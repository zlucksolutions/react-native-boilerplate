import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, brandThemes, ThemeVariant, morningTheme } from '@shared/theme/theme';

interface ThemeContextType {
  theme: Theme;
  currentTheme: ThemeVariant;
  setThemeVariant: (variant: ThemeVariant) => Promise<void>;
  setBrandTheme: (brandName: string) => Promise<void>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: morningTheme, // Provide default theme
  currentTheme: 'morning',
  setThemeVariant: async () => {},
  setBrandTheme: async () => {},
});

const THEME_STORAGE_KEY = '@theme_preferences';

const getDefaultThemeVariant = (): ThemeVariant => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 20) return 'evening';
  return 'night';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>(getDefaultThemeVariant());
  const [currentBrand, setCurrentBrand] = useState('default');
  const [theme, setTheme] = useState<Theme>(brandThemes.default[getDefaultThemeVariant()]);

  useEffect(() => {
    loadThemePreferences();
  }, []);

  useEffect(() => {
    // Update theme whenever currentTheme or currentBrand changes
    if (brandThemes[currentBrand]?.[currentTheme]) {
      setTheme(brandThemes[currentBrand][currentTheme]);
    } else {
      // Fallback to default theme if something goes wrong
      console.warn('Invalid theme configuration, falling back to default theme');
      setTheme(brandThemes.default.morning);
      setCurrentTheme('morning');
      setCurrentBrand('default');
    }
  }, [currentTheme, currentBrand]);

  const loadThemePreferences = async () => {
    try {
      const preferences = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (preferences) {
        const { themeVariant, brand } = JSON.parse(preferences);
        if (brandThemes[brand]?.[themeVariant]) {
          setCurrentTheme(themeVariant);
          setCurrentBrand(brand);
        } else {
          throw new Error('Invalid theme preferences');
        }
      }
    } catch (error) {
      console.warn('Error loading theme preferences:', error);
      // Reset to default theme if there's an error
      setCurrentTheme(getDefaultThemeVariant());
      setCurrentBrand('default');
    }
  };

  const saveThemePreferences = async (themeVariant: ThemeVariant, brand: string) => {
    try {
      await AsyncStorage.setItem(
        THEME_STORAGE_KEY,
        JSON.stringify({ themeVariant, brand })
      );
    } catch (error) {
      console.error('Error saving theme preferences:', error);
    }
  };

  const setThemeVariant = async (variant: ThemeVariant) => {
    setCurrentTheme(variant);
    await saveThemePreferences(variant, currentBrand);
  };

  const setBrandTheme = async (brandName: string) => {
    if (brandThemes[brandName]) {
      setCurrentBrand(brandName);
      await saveThemePreferences(currentTheme, brandName);
    }
  };

  const contextValue = {
    theme,
    currentTheme,
    setThemeVariant,
    setBrandTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 