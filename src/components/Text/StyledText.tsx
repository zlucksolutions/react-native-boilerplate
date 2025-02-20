import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { typography, TypographyType } from '@shared/theme';

interface StyledTextProps extends RNTextProps {
  variant?: keyof TypographyType;
  children: React.ReactNode;
}

export const StyledText: React.FC<StyledTextProps> = ({
  variant = 'bodyRegular',
  style,
  children,
  ...props
}) => {
  return (
    <RNText style={[typography[variant], style]} {...props}>
      {children}
    </RNText>
  );
}; 