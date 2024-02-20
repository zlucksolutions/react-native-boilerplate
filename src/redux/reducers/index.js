import {combineReducers} from 'redux';
import AppReducer from './AppReducer';
import RandomUserReducer from './RandomUserReducer';
import NavigationReducer from './NavigationReducer';

export default combineReducers({
  app: AppReducer,
  randomUser: RandomUserReducer,
  nav: NavigationReducer,
});
