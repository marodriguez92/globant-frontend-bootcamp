import { combineReducers } from 'redux';
import nav from './navReducer';

const AppReducer = combineReducers({
  nav
});

export default AppReducer;