import {isNull} from 'lodash';
import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

interface Props {
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
  children?: any;
  hasHeader?: boolean;
  hasFooter?: boolean;
  extraScrollHeight?: number;
  showsVerticalScrollIndicator?: boolean;
  disableKBDismissScroll?: boolean;
  enableResetScrollToCoords?: boolean;
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled' | undefined;
  bounces?: boolean;
  refreshControl?: any;
  resetToCoords?: {x: number; y: number};
  overScrollMode?: string;
  scrollEnable?: boolean;
}

const Content: React.FC<Props> = props => {
  const [isVisible, setIsVisible] = useState(true);
  let keyboardWillShowSub: any;
  let keyboardWillHideSub: any;
  let rootRef: any;
  let scrollviewRef: any;

  useEffect(() => {
    keyboardWillShowSub = Keyboard.addListener(
      'keyboardDidShow',
      keyboardWillShow,
    );
    keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      keyboardWillHide,
    );

    return () => {
      if (!isNull(keyboardWillShowSub)) {
        keyboardWillShowSub?.remove();
      }
      if (!isNull(keyboardWillHideSub)) {
        keyboardWillHideSub?.remove();
      }
    };
  }, []);

  const keyboardWillShow = () => {
    setIsVisible(false);
  };

  const keyboardWillHide = () => {
    setIsVisible(true);
  };

  const getStyle = (): any => {
    const {style} = props;
    const tmpStyle: any = [styles.content];
    if (style) {
      tmpStyle.push(style);
    }
    return tmpStyle;
  };

  const getContentContainerStyle = (): any => {
    const {contentContainerStyle, hasHeader, hasFooter} = props;
    const style: any = [styles.contentContainerStyle];
    if (contentContainerStyle) {
      style.push(contentContainerStyle);
    }
    if (hasFooter === true && isVisible) {
      style.push({paddingBottom: styles.footerHeight});
    }
    if (hasHeader === false) {
      style.push({paddingTop: 0});
    }
    return style;
  };

  const {
    children,
    extraScrollHeight,
    showsVerticalScrollIndicator,
    disableKBDismissScroll,
    keyboardShouldPersistTaps,
    bounces,
    refreshControl,
    resetToCoords,
    enableResetScrollToCoords,
    overScrollMode,
    scrollEnable,
  } = props;

  const style = getStyle();
  const contentContainerStyle = getContentContainerStyle();

  return (
    <KeyboardAwareScrollView
      enableResetScrollToCoords={enableResetScrollToCoords}
      refreshControl={refreshControl}
      overScrollMode={overScrollMode}
      scrollEnabled={scrollEnable}
      automaticallyAdjustContentInsets={false}
      bounces={bounces}
      resetScrollToCoords={
        disableKBDismissScroll
          ? resetToCoords
            ? resetToCoords
            : undefined
          : {x: 0, y: 0}
      }
      keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
      ref={(c: any) => {
        scrollviewRef = c;
        rootRef = c;
      }}
      style={style}
      contentContainerStyle={contentContainerStyle}
      extraScrollHeight={extraScrollHeight}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default Content;


const styles = StyleSheet.create({
  footerHeight: 100,
  content: {
    width: '100%',
  },
  contentContainerStyle: {
    // paddingTop: '50rem',
  },
});
