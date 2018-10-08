const API_KEY = 'eaa83a5cca70c54b19c91e237911560b'; //unique key from account registration on openweathermap
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//https://api.openweathermap.org/data/2.5/forecast?appid=eaa83a5cca70c54b19c91e237911560b&q=London,us

export async function getDataFromApi(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const data = await fetch(url, {});

  return data.json();
}
