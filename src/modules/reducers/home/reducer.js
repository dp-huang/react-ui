import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
	value: ''
});

export default function homeProperties(state = initialState, action = {}) {
	switch(action.type) {
		case types.CREATE:
			const values = action.data.values;
			//create the new id
			const newId = values.length === 0 ? 0 : Math.max(...values.map(a => a.id)) + 1;
			const newValues = [...values, {id: newId, value: action.data.value}];
			return state.merge({
				values: newValues
			});
		case types.DELETE:
			const idToDel = action.data.idToDel;
			return state.merge({
				values: action.data.values.filter(a => a.id !== idToDel)
			});
		default:
			return state;
	}
}