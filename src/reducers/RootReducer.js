import { FETCH_WEATHER } from '../actions/ActionTypes'

export const initialState = {
  temp: 20,
  cloudiness: 'sunny',
  wind: '100m',
  preassure: 'a lot'
}

//export function rootReducer (state = initialState, action) {  //old
export function rootReducer (state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload, ...state];
    default:
      return state;
  }
  return state
}
