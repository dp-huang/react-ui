import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Panel, Button, Glyphicon, Modal, Row, Col } from 'react-bootstrap';
import * as actions from '../../reducers/home/actions';

require('../../../libs/bootstrap-3.3.6-dist/css/bootstrap.min.css');
require('./home.less');

class Home extends Component {
	constructor(props) {
		super(props);
	}

	onCreate() {
		const content = this.refs.createInput.value;
		this.props.dispatch(actions.create(this.props.homeProps.values || [], content));
		this.refs.createInput.value = '';
	}

	onDelete(id) {
		this.props.dispatch(actions.deleteItem(this.props.homeProps.values || [], id));
	}

	render() {
		const newsValues = this.props.homeProps.values || [];
		const rows = newsValues.map(item => {
			return (
				<Row key={item.id}>
					<Col className='content'>{item.value}</Col>
					<Col className='buttons'>
                        <Button bsSize="sm" style={{marginLeft: '5px'}} onClick={this.onDelete.bind(this, item.id)}>
                            <Glyphicon glyph="trash"/>
                        </Button>
                    </Col>
				</Row>
			);
		});
		return (
			<div className='home'>
				<Panel header='News' bsStyle='info' className='news'>
					<div className='item'>
						{rows}
					</div>
					<div className='createDiv'>
						<input ref='createInput' className='form-control createInput' /> <Button className='createBtn' onClick={this.onCreate.bind(this)}>Create</Button>
					</div>
				</Panel>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		homeProps: state.home
	}
})(Home);