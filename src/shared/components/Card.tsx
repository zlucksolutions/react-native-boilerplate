import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Pressable,
} from 'react-native';
import { useTheme } from '@shared/theme/ThemeProvider';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  style,
  onPress,
}) => {
  const { theme } = useTheme();

  const getContainerStyle = () => {
    const baseStyle: ViewStyle = {
      ...styles.container,
      backgroundColor: theme.colors.surface,
    };

    const variantStyle: ViewStyle = {
      ...styles[variant],
      borderColor: variant === 'outlined' ? theme.colors.border : undefined,
      backgroundColor:
        variant === 'filled' ? theme.colors.surfaceVariant : theme.colors.surface,
      shadowColor: theme.colors.text,
    };

    return [baseStyle, variantStyle, style];
  };

  const Wrapper = onPress ? Pressable : View;

  return (
    <Wrapper
      style={getContainerStyle()}
      onPress={onPress}
      android_ripple={
        onPress
          ? {
              color: theme.colors.primary,
              borderless: false,
            }
          : undefined
      }>
      {children}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    margin: 8,
  },
  elevated: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  outlined: {
    borderWidth: 1,
  },
  filled: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
}); 