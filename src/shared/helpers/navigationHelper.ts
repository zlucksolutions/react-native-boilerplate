import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigationHelper = {
  navigate: (name: string, params?: object) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name as never, params as never);
    }
  },

  push: (name: string, params?: object) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.push(name, params));
    }
  },

  replace: (name: string, params?: object) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(name, params));
    }
  },

  pop: (count: number = 1) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.pop(count));
    }
  },

  popToTop: () => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.popToTop());
    }
  },

  reset: (routes: { name: string; params?: object }[], index: number = 0) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index,
          routes,
        })
      );
    }
  },

  goBack: () => {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  },

  getCurrentRoute: () => {
    if (navigationRef.isReady()) {
      return navigationRef.getCurrentRoute();
    }
    return null;
  },

  setParams: (params: object) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.setParams(params));
    }
  },

  // Utility method to check if navigation is possible
  canNavigate: () => {
    return navigationRef.isReady();
  },

  // Utility method to get current navigation state
  getState: () => {
    if (navigationRef.isReady()) {
      return navigationRef.getState();
    }
    return null;
  },
}; 