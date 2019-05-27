import { createStackNavigator } from 'react-navigation';
import routes from '../config/routes';
import {
    createReduxContainer, 
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

const middleware = createReactNavigationReduxMiddleware(
    state => state.nav
);

// Creates a stack navigator with specified routes. 
const RootNavigator = createStackNavigator(routes);

/* 
React Navigation needs an AppContainer in oder to function, 
that problem is solved with createAppContainer() from 'react-navigation'
that function is replaced for createReduxContainer() from 'react-navigation-redux-helpers'. 
*/
const AppWithNavigationState = createReduxContainer(RootNavigator);

// Need to subscribe to the nav state, wich is allocated in the store. 
const mapStateToProps = (state) => ({
    state: state.nav,
});

// Make the connection required from 'react-redux'. 
const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {RootNavigator, AppNavigator, middleware};
