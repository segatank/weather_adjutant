import { FETCH_WEATHER, FETCH_ERROR } from '../actions/ActionTypes'


export function rootReducer (state = {data: [], status: ''}, action) {
  switch(action.type) {
    case FETCH_WEATHER:
    console.log(action)
      return {data: [action.payload], status: 'ok'}
    case FETCH_ERROR:
      return {...state, status: 'error'}
    default:
      return state
  }
}
