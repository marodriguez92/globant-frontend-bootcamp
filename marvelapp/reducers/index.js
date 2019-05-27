import { combineReducers } from 'redux';
import nav from './navReducer';
import dataReducer from './dataReducer';

const AppReducer = combineReducers({
  nav,
  dataReducer
});

export default AppReducer;