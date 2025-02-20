import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@shared/theme/ThemeProvider';
import { changeLanguage } from '@shared/i18n/i18n';
import { ThemeVariant } from '@shared/theme/theme';

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'language.en' },
  { code: 'es', name: 'language.es' },
];

const THEME_VARIANTS: ThemeVariant[] = ['morning', 'afternoon', 'evening', 'night'];

export const SettingsScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, currentTheme, setThemeVariant } = useTheme();

  const handleLanguageChange = async (langCode: string) => {
    await changeLanguage(langCode);
  };

  const renderSection = (title: string) => (
    <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
      {t(title)}
    </Text>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.section}>
        {renderSection('language.title')}
        <View style={styles.optionsContainer}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={[
                styles.optionButton,
                {
                  backgroundColor:
                    i18n.language === lang.code
                      ? theme.colors.primary
                      : theme.colors.card,
                },
              ]}
              onPress={() => handleLanguageChange(lang.code)}>
              <Text
                style={[
                  styles.optionText,
                  {
                    color:
                      i18n.language === lang.code
                        ? theme.colors.background
                        : theme.colors.text,
                  },
                ]}>
                {t(lang.name)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        {renderSection('theme.title')}
        <View style={styles.optionsContainer}>
          {THEME_VARIANTS.map((variant) => (
            <TouchableOpacity
              key={variant}
              style={[
                styles.optionButton,
                {
                  backgroundColor:
                    currentTheme === variant
                      ? theme.colors.primary
                      : theme.colors.card,
                },
              ]}
              onPress={() => setThemeVariant(variant)}>
              <Text
                style={[
                  styles.optionText,
                  {
                    color:
                      currentTheme === variant
                        ? theme.colors.background
                        : theme.colors.text,
                  },
                ]}>
                {t(`theme.${variant}`)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    gap: 10,
  },
  optionButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 