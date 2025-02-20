import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import {isUndefined} from 'lodash';

export interface Props {
  children?: any;
  transparentStatusBar?: boolean;
  statusBarColor?: any;
  safeAreaView?: boolean;
  safeAreaViewHeader?: boolean;
  containerStyle?: any;
  darkContent?: any;
  containerBgColor?: any;
  isDark?: boolean;
  statusBarStyle?: any;
  noStatusBar?: boolean;
  isOnboarding?: boolean;
  title?: string;
  onLeftPress?: () => void;
  headerLeftIcon?: any;
  imageTitle?: any;
}

export default function Container(props: Props) {
  const {
    children,
    transparentStatusBar,
    statusBarColor = '#fff',
    safeAreaView,
    safeAreaViewHeader,
    containerStyle,
    darkContent,
    containerBgColor,
    isDark,
    statusBarStyle,
    noStatusBar,
    isOnboarding,
  } = props;
  const style: any = {
    flex: 0,
    alignItems: 'center',
    backgroundColor: !transparentStatusBar
      ? statusBarColor || isDark
        ? statusBarColor
        : '#fff'
      : 'transparent',
  };
  return (
    <>
      <StatusBar
        translucent={transparentStatusBar}
        backgroundColor={statusBarColor ?? 'transparent'}
        barStyle={
          !isUndefined(statusBarStyle)
            ? statusBarStyle
            : isDark
              ? 'light-content'
              : 'dark-content'
        }
        // barStyle={darkContent ? 'dark-content' : 'light-content'}
      />
      {!noStatusBar && (
        <View
          style={[
            styles.statusBar,
            isOnboarding && styles.statusHeightForIphone14Pro,
            isDark && styles.darkStatusBar,
            !isUndefined(statusBarColor) && {
              backgroundColor: statusBarColor,
            },
          ]}
        />
      )}
      {safeAreaView !== false && <SafeAreaView style={style} />}
      {safeAreaView !== false && safeAreaViewHeader !== false && (
        <SafeAreaView
          style={[
            styles.safeViewContainer,
            isDark && styles.darkSafeViewContainer,
            containerStyle,
          ]}>
          {children}
        </SafeAreaView>
      )}
      {(safeAreaView === false || safeAreaViewHeader === false) && (
        <View
          style={[
            styles.container,
            isDark && styles.darkContainer,
            !isUndefined(containerBgColor) && {
              backgroundColor: containerBgColor,
            },
            safeAreaViewHeader === false && styles.statusBarMarginTop,
          ]}>
          {children}
        </View>
      )}
    </>
  );
}


const styles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkSafeViewContainer: {},
  container: {
    flex: 1,
    alignItems: 'center',
  },
  darkContainer: {},
  statusBarMarginTop: {
    marginTop: StatusBar.currentHeight,
  },
  statusBar: {
    // backgroundColor: colors.primaryWhite,
  },
  darkStatusBar: {
    // backgroundColor: colors.primaryBlack,
  },
  statusHeightForIphone14Pro: {},
});
