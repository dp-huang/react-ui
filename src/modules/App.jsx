import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { pathname } = this.props.location;
        const children = React.cloneElement(this.props.children || <span />, { key: pathname });

		return (
			<div>{children}</div>
		);
	}
}

export default App;