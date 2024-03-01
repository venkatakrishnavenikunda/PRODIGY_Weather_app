// Get your API key from OpenWeatherMap and replace 'YOUR_API_KEY' with it.
const apiKey = '285c037e2c52620f47e56f724ed4e967';

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const place = document.querySelector('.place');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');
const icon = document.querySelector('.icon');

searchButton.addEventListener('click', () => {
  const city = searchInput.value;

  // Construct the API URL
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=285c037e2c52620f47e56f724ed4e967";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      place.textContent = `${data.name}, ${data.sys.country}`;
      temperature.textContent = `${data.main.temp}°C`;
      description.textContent = data.weather[0].description;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windspeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
      icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});