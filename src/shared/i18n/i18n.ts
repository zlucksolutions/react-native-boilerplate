import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

const LANGUAGE_STORAGE_KEY = '@language_preference';

// Get device language
const getDeviceLanguage = () => {
  const deviceLanguages = RNLocalize.getLocales();
  return deviceLanguages[0]?.languageCode || 'en';
};

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      settings: 'Settings',
      theme: {
        title: 'Theme',
        morning: 'Morning',
        afternoon: 'Afternoon',
        evening: 'Evening',
        night: 'Night',
        toggle: 'Toggle Theme',
      },
      language: {
        title: 'Language',
        en: 'English',
        es: 'Spanish',
      },
      navigation: {
        home: 'Home',
        settings: 'Settings',
        components: 'Components',
        tests: 'Tests',
      },
      components: {
        headers: 'Headers',
        buttons: 'Buttons',
        cards: 'Cards',
        inputs: 'Inputs',
        variants: {
          filled: 'Filled',
          outlined: 'Outlined',
          text: 'Text',
          elevated: 'Elevated',
          underlined: 'Underlined',
          transparent: 'Transparent',
          primary: 'Primary',
        },
      },
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido',
      settings: 'Ajustes',
      theme: {
        title: 'Tema',
        morning: 'Mañana',
        afternoon: 'Tarde',
        evening: 'Atardecer',
        night: 'Noche',
        toggle: 'Cambiar Tema',
      },
      language: {
        title: 'Idioma',
        en: 'Inglés',
        es: 'Español',
      },
      navigation: {
        home: 'Inicio',
        settings: 'Ajustes',
        components: 'Componentes',
        tests: 'Pruebas',
      },
      components: {
        headers: 'Encabezados',
        buttons: 'Botones',
        cards: 'Tarjetas',
        inputs: 'Entradas',
        variants: {
          filled: 'Relleno',
          outlined: 'Contorno',
          text: 'Texto',
          elevated: 'Elevado',
          underlined: 'Subrayado',
          transparent: 'Transparente',
          primary: 'Primario',
        },
      },
    },
  },
  // Add more language resources here
};

const loadSavedLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    return savedLanguage || getDeviceLanguage();
  } catch (error) {
    console.error('Error loading saved language:', error);
    return getDeviceLanguage();
  }
};

export const changeLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    await i18n.changeLanguage(language);
  } catch (error) {
    console.error('Error saving language preference:', error);
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Load saved language on initialization
loadSavedLanguage().then((language) => {
  i18n.changeLanguage(language);
});

export default i18n; 