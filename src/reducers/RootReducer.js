import { FETCH_WEATHER } from '../actions/ActionTypes'


export function rootReducer (state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload, ...state]
    default:
      return state
  }
  return state
}
