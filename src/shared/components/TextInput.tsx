import React, { useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { useTheme } from '@shared/theme/ThemeProvider';

export type TextInputVariant = 'outlined' | 'filled' | 'underlined';

interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  label?: string;
  error?: string;
  variant?: TextInputVariant;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  variant = 'outlined',
  containerStyle,
  inputStyle,
  labelStyle,
  onFocus,
  onBlur,
  ...rest
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const getContainerStyle = () => {
    const baseStyle: ViewStyle = {
      ...styles.container,
    };

    const variantStyle: ViewStyle = {
      ...styles[variant],
      borderColor: error
        ? theme.colors.error
        : isFocused
        ? theme.colors.primary
        : theme.colors.border,
      backgroundColor:
        variant === 'filled'
          ? error
            ? `${theme.colors.error}15`
            : isFocused
            ? `${theme.colors.primary}10`
            : theme.colors.surfaceVariant
          : 'transparent',
    };

    return [baseStyle, variantStyle, containerStyle];
  };

  const getInputStyle = () => {
    const baseStyle: TextStyle = {
      ...styles.input,
      color: theme.colors.text,
    };

    const variantStyle: TextStyle = {
      paddingVertical: variant === 'underlined' ? 8 : 12,
    };

    return [baseStyle, variantStyle, inputStyle];
  };

  const getLabelStyle = () => {
    const baseStyle: TextStyle = {
      ...styles.label,
      color: error
        ? theme.colors.error
        : isFocused
        ? theme.colors.primary
        : theme.colors.text,
    };

    return [baseStyle, labelStyle];
  };

  return (
    <View style={styles.wrapper}>
      {label && <Text style={getLabelStyle()}>{label}</Text>}
      <View style={getContainerStyle()}>
        <RNTextInput
          {...rest}
          style={getInputStyle()}
          placeholderTextColor={theme.colors.text + '80'}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
        />
      </View>
      {error && (
        <Text style={[styles.error, { color: theme.colors.error }]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
  },
  container: {
    borderRadius: 8,
    marginTop: 4,
  },
  outlined: {
    borderWidth: 1,
    borderRadius: 8,
  },
  filled: {
    borderWidth: 1,
    borderRadius: 8,
  },
  underlined: {
    borderBottomWidth: 1,
    borderRadius: 0,
  },
  input: {
    paddingHorizontal: 12,
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  error: {
    fontSize: 12,
    marginTop: 4,
  },
}); 