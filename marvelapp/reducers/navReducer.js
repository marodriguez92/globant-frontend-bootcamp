import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { RootNavigator } from '../components/AppNavigator';

/* 
The Navigation Reducer is autamatically made with the createNavigationReducer
function. The reducer depends on the RootNavigator you pass in.
*/
const navReducer = createNavigationReducer(RootNavigator);

export default navReducer;