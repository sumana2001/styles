// Array of weather conditions
const weatherConditions = [
  {
    weather: 'Clear',
    icon: '☀️',
    backgroundImage: 'url("./images/clear.jpg")'
  },
  {
    weather: 'Clouds',
    icon: '☁️',
    backgroundImage: 'url("./images/clouds.jpg")'
  },
  {
    weather: 'Rain',
    icon: '🌧️',
    backgroundImage: 'url("./images/rain.jpg")'
  },
  {
    weather: 'Thunderstorm',
    icon: '⛈️',
    backgroundImage: 'url("./images/thunderstorm.jpg")'
  },
  {
    weather: 'Snow',
    icon: '🌨️',
    backgroundImage: 'url("./images/snow.jpg")'
  }
];

// Function to randomly select a weather condition
function randomWeather() {
  const randomIndex = Math.floor(Math.random() * weatherConditions.length);
  return weatherConditions[randomIndex];
}

// Get elements
const weatherText = document.getElementById('weather-text');
const weatherIcon = document.getElementById('weather-icon');
const body = document.body;
const weatherContainer = document.getElementById('weather-container');
const showWeatherBtn = document.getElementById('show-weather-btn');

// Function to show weather
function showWeather() {
  const weather = randomWeather();
  weatherText.textContent = weather.weather;
  weatherIcon.textContent = weather.icon;
  body.style.backgroundImage = weather.backgroundImage;
  weatherContainer.style.display = 'block';
}

// Add event listener to button
showWeatherBtn.addEventListener('click', showWeather);