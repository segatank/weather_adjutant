
import { getDataFromApi } from '../api/Api';

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_ERROR = "FETCH_ERROR";

const setWeather = data => ({
  type: FETCH_WEATHER,
  payload: data
});

const fetchFailed = _ => ({
  type: FETCH_ERROR
});

export function fetchWeather(city = "") {
  return async function(dispatch) {
    try {
      const { cod, ...restData } = await getDataFromApi(city);
      cod === "200" ? dispatch(setWeather(restData)) : dispatch(fetchFailed());
    } catch (_) {
      console.log("API error", "Payload: ", city);
      dispatch(fetchFailed());
    }
  };
}
