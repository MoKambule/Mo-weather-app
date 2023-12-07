function updateweather(response) {
  let temperatureElement = document.querySelector(".weather-app-temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
}

function searchCity(city) {
  let apiKey = "323b9fb4ca5t30fbc37551af865ea4ob";
  let apiURL =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
  axios.get(apiURL).then(updateweather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityelement = document.querySelector("#city");
  cityelement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElemnt = document.querySelector("#search-form");
searchFormElemnt.addEventListener("submit", handleSearch);
