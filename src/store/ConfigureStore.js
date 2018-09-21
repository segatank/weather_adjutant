import { createStore } from 'redux';
import { rootReducer, initialState } from '../reducers/RootReducer'


const store = createStore(rootReducer, initialState);

export default store;
