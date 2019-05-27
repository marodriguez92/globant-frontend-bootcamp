import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers';
import { middleware } from './components/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware, thunk));
 
export default store;