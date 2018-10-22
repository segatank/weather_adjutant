import {
  FETCH_WEATHER,
  FETCH_ERROR
} from '../actions/ActionTypes';

const INIT_STATE = { data: [], status: '' };

export function rootReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        data: [action.payload],
        status: 'ok'
      };
    case FETCH_ERROR:
      return {
        ...state,
        status: 'error'
      };
    default:
      return state;
  }
}
