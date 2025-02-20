import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { typography, TypographyType } from '@shared/theme/typography';
import { useTheme } from '@shared/theme/ThemeProvider';

export interface StyledTextProps extends TextProps {
  variant?: keyof TypographyType;
  color?: string;
  align?: TextStyle['textAlign'];
  children: React.ReactNode;
}

export const StyledText: React.FC<StyledTextProps> = ({
  variant = 'body1',
  color,
  align,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <Text
      style={[
        typography[variant],
        {
          color: color || theme.colors.text,
          textAlign: align,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
}; 