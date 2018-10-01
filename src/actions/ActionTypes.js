const API_KEY = "eaa83a5cca70c54b19c91e237911560b"; //unique key from account registration on openweathermap
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//https://api.openweathermap.org/data/2.5/forecast?appid=eaa83a5cca70c54b19c91e237911560b&q=London,us
export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_ERROR = "FETCH_ERROR";

const setWhater = data => ({
  type: FETCH_WEATHER,
  payload: data
});

const fetchFailed = _ => ({
  type: FETCH_ERROR
});

async function getDataFromApi(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const data = await fetch(url, {});
  return data.json();
}

export function fetchWeather(city = "") {
  return async function(dispatch) {
    try {
      const { cod, ...restData } = await getDataFromApi(city);
      cod === "200" ? dispatch(setWhater(restData)) : dispatch(fetchFailed());
    } catch (_) {
      console.log("API error", "Payload: ", city);
      dispatch(fetchFailed());
    }
  };
}
