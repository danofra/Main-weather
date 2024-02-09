const BASE_URL = "https://api.openweathermap.org/data/2.5/find";
const API_KEY = "8e7d49c1240032d1fc306f1ccd642d40";
async function searchAPI(city) {
  let url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  console.log(url);
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log("error", err);
  }
}
export default searchAPI;