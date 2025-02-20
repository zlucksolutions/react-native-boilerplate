import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '@shared/theme/ThemeProvider';

export type ButtonVariant = 'filled' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'filled',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const { theme } = useTheme();

  const getContainerStyle = () => {
    const baseStyle: ViewStyle = {
      ...styles.container,
      opacity: disabled ? 0.6 : 1,
    };

    const sizeStyle = {
      ...styles[size],
    };

    const variantStyle: ViewStyle = {
      backgroundColor:
        variant === 'filled' ? theme.colors.primary : 'transparent',
      borderWidth: variant === 'outlined' ? 2 : 0,
      borderColor: variant === 'outlined' ? theme.colors.primary : undefined,
    };

    return [baseStyle, sizeStyle, variantStyle, style];
  };

  const getTextStyle = () => {
    const baseStyle: TextStyle = {
      ...styles.text,
      color:
        variant === 'filled'
          ? theme.colors.background
          : theme.colors.primary,
    };

    const sizeStyle = {
      fontSize: size === 'large' ? 18 : size === 'medium' ? 16 : 14,
    };

    return [baseStyle, sizeStyle, textStyle];
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={getContainerStyle()}>
      {loading ? (
        <ActivityIndicator
          color={variant === 'filled' ? theme.colors.background : theme.colors.primary}
          size="small"
        />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  text: {
    fontWeight: '600',
  },
}); 