
const API_KEY = "eaa83a5cca70c54b19c91e237911560b";   //unique key from account registration on openweathermap
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city='London') {
  const url = `${ROOT_URL}&q=${city},us`;
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);
  xhr.send();

  let request = '';
  if (xhr.status !== 200) {
    console.error( xhr.status + ': ' + xhr.statusText );
  } else {
    request = xhr.responseText;
    return {
      type: FETCH_WEATHER,
      payload: request
    };
  }
}
