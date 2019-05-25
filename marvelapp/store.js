import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducers';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

// Middleware for the React Navigation with Redux implementation. 
const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

// Create the store
const store = createStore(AppReducer, applyMiddleware(middleware));
 
export default store;