import { combineReducers } from 'redux';
import nav from './navReducer';
import DataReducer from './dataReducer';

const AppReducer = combineReducers({
  nav,
  DataReducer
});

export default AppReducer;