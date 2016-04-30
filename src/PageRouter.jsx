import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import Home from './js/Home.jsx';
import About from './js/About.jsx';
import NotFound from './js/NotFound.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					{this.props.children}
				</ul>
			</div>
		);
	}
}

class PageRouter extends React.Component {
	render() {
		return(
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="home" component={Home}/>
					<Route path="about" component={About}/>
				</Route>
				<Route path="*" component={NotFound} />
			</Router>
		);
	}
}

export default PageRouter;