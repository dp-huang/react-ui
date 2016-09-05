import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import getRoutes from '../routes.js';

export default class Root extends Component {
	render() {
		const { store, history } = this.props;
        return (
            <Provider store={store}>
                <Router history={history} routes={getRoutes(store)} />
            </Provider>
        );
	}
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};