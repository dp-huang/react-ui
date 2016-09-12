import * as types from './actionTypes';

export function create(values, value) {	
	return (dispatch) => {
		return dispatch({type: types.CREATE, data: {values: values || [], value: value}});
	}
}

export function deleteItem(values, idToDel) {
	return (dispatch) => {
		return dispatch({type: types.DELETE, data: {values: values || [], idToDel: idToDel}});
	}
}

