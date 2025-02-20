import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@shared/theme/ThemeProvider';
import Icon from 'react-native-vector-icons/Ionicons';

export type HeaderVariant = 'primary' | 'transparent' | 'elevated';

interface HeaderProps {
  title: string;
  variant?: HeaderVariant;
  leftIcon?: string;
  rightIcon?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  variant = 'primary',
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  style,
  titleStyle,
}) => {
  const { theme } = useTheme();

  const getContainerStyle = () => {
    const baseStyle: ViewStyle = {
      ...styles.container,
      backgroundColor:
        variant === 'transparent'
          ? 'transparent'
          : theme.colors.surface,
      borderBottomColor: theme.colors.border,
      borderBottomWidth: variant === 'elevated' ? 1 : 0,
      shadowColor: variant === 'elevated' ? theme.colors.text : undefined,
      shadowOffset:
        variant === 'elevated'
          ? {
              width: 0,
              height: 2,
            }
          : undefined,
      shadowOpacity: variant === 'elevated' ? 0.1 : 0,
      shadowRadius: variant === 'elevated' ? 8 : 0,
      elevation: variant === 'elevated' ? 4 : 0,
    };

    return [baseStyle, style];
  };

  const iconColor = theme.colors.text;

  return (
    <View style={getContainerStyle()}>
      <View style={styles.leftContainer}>
        {leftIcon && (
          <TouchableOpacity
            onPress={onLeftPress}
            style={styles.iconButton}
            disabled={!onLeftPress}>
            <Icon name={leftIcon} size={24} color={iconColor} />
          </TouchableOpacity>
        )}
      </View>
      <Text
        style={[
          styles.title,
          { color: theme.colors.text },
          titleStyle,
        ]}>
        {title}
      </Text>
      <View style={styles.rightContainer}>
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightPress}
            style={styles.iconButton}
            disabled={!onRightPress}>
            <Icon name={rightIcon} size={24} color={iconColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftContainer: {
    width: 40,
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
  },
}); 