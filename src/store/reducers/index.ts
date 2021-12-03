import { combineReducers } from 'redux';
import InitReducer, { initAppStateIF } from './InitReducer';
import NavigationReducer from './NavigationReducer';
import DetailsReducer, { detailsStateIF } from './DetailsReducer';

export interface reducerStateIF {
  app: initAppStateIF;
  nav: any;
  details: detailsStateIF
}

const rootReducer = combineReducers({
  app: InitReducer,
  nav: NavigationReducer,
  details: DetailsReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;