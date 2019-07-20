import { Provider, connect } from 'react-redux';
import React from 'react';
import { Store, App } from './Redux/Store';

const mapStateToProps = (state) => ({
	state: state.navReducer,
});
const AppWithNavigationState = connect(mapStateToProps)(App);
import GlobalTimer from './Data/GlobalTimer';

export default class Root extends React.Component {
	constructor(props) {
		super(props);
		GlobalTimer();
	}

	render() {
		return (
			<Provider store={Store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}