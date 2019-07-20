import { createStore, applyMiddleware } from 'redux';
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import appReducer from './Reducer';
import Navigation from './Navigation';

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const middleware = createReactNavigationReduxMiddleware(
    state => state.navReducer,
);

export const App = createReduxContainer(Navigation);

export const Store = createStore(
    appReducer,
    applyMiddleware(middleware),
);

export default { Store, App };