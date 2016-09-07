import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import home from './home/reducer';

const rootReducer = combineReducers({
	routing,
	home
});

export default rootReducer;