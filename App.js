import { createStore, applyMiddleware, } from 'redux';
import {
	createReduxContainer,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { Provider, connect } from 'react-redux';
import React from 'react';

import Navigation from './Redux/Navigation';
import appReducer from './Redux/Reducer';

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const middleware = createReactNavigationReduxMiddleware(
	state => state.navReducer,
);

const App = createReduxContainer(Navigation);
const mapStateToProps = (state) => ({
	state: state.navReducer,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
	appReducer,
	applyMiddleware(middleware),
);

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}