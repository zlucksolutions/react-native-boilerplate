import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { useTheme } from '@shared/theme/ThemeProvider';

export const toastConfig = {
  success: (props: any) => {
    const { theme } = useTheme();
    return (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: theme.colors.success,
          backgroundColor: theme.colors.card,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontWeight: '600',
          color: theme.colors.text,
        }}
        text2Style={{
          fontSize: 14,
          color: theme.colors.text,
        }}
      />
    );
  },
  error: (props: any) => {
    const { theme } = useTheme();
    return (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: theme.colors.error,
          backgroundColor: theme.colors.card,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontWeight: '600',
          color: theme.colors.text,
        }}
        text2Style={{
          fontSize: 14,
          color: theme.colors.text,
        }}
      />
    );
  },
  info: (props: any) => {
    const { theme } = useTheme();
    return (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: theme.colors.primary,
          backgroundColor: theme.colors.card,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontWeight: '600',
          color: theme.colors.text,
        }}
        text2Style={{
          fontSize: 14,
          color: theme.colors.text,
        }}
      />
    );
  },
};

export const showToast = (type: 'success' | 'error' | 'info', message: string, description?: string) => {
  Toast.show({
    type,
    text1: message,
    text2: description,
    position: 'top',
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 50,
  });
}; 