const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "8e7d49c1240032d1fc306f1ccd642d40";
async function detailsApi(details) {
  let url = `${BASE_URL}?id=${details}&appid=${API_KEY}`;
  console.log(url);
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log("error", err);
  }
}
export default detailsApi;
