import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import Home from './containers/home/Home.jsx';
import About from './containers/about/About.jsx';


const NotFound = React.createClass({render() {return (<h1>404 Not Found</h1>);}});

export default function getRoutes(store) {

	const init = (nextState, replace) => {
		let { app } = store.getState();
	}

	return (
		<Route>
			<Route path="/" component={Home}>
				<IndexRoute component={Home}/>
				<Route path="home" component={Home}/>
				<Route path="about" component={About}/>
			</Route>
			<Route path="*" component={NotFound} status={404} />
		</Route>
	);
}