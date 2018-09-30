
const API_KEY = "eaa83a5cca70c54b19c91e237911560b";   //unique key from account registration on openweathermap
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//https://api.openweathermap.org/data/2.5/forecast?appid=eaa83a5cca70c54b19c91e237911560b&q=London,us
export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_ERROR = "FETCH_ERROR";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  let xhr = new XMLHttpRequest();
//console.log(url)
  xhr.open('GET', url, false);
  xhr.send();

  let request = '';
  if (xhr.status !== 200) {
    console.log( `Api warning: ${xhr.status} ${xhr.statusText}` );
    return {
      type: FETCH_ERROR,
      payload: []
    }
  } else {
    request = JSON.parse(xhr.responseText);

    return {
      type: FETCH_WEATHER,
      payload: request
    };
  }
}
