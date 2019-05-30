import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    AppReducer, 
    applyMiddleware(thunk),
);
 
export default store;