import { createStore } from 'redux';
import { rootReducer, initialState } from '../reducers/RootReducer'


//const store = createStore(rootReducer, initialState);
const store = createStore(rootReducer);

export default store;
