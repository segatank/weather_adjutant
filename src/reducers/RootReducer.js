import FETCH_WEATHER from '../actions/ActionTypes'

export const initialState = {
  temp: 20,
  cloudiness: 'sunny',
  wind: '100m',
  preassure: 'a lot'
}

export function rootReducer (state = initialState, action) {
  
  return state
}
