import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(
		rootReducer,
		initialState
	);
	return store;
}