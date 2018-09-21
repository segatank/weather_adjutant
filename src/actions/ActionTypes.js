
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

  return {
    type: FETCH_WEATHER,
    payload: 'some_result'
  };
}
