// WeatherCard.js
import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Fetching the data</div>;
  }

  const { name, main, weather } = weatherData;
  const weatherCondition = weather[0]?.main.toLowerCase();
  let backgroundClass = '';

  if (weatherCondition.includes('rain')) {
    backgroundClass = 'rain-background';
  } else if (weatherCondition.includes('sun')) {
    backgroundClass = 'sun-background';
  } else if (weatherCondition.includes('clouds')) {
    backgroundClass = 'cloudy-background';
  } else if (weatherCondition.includes('clear')) {
    backgroundClass = 'clear-background';
  }
  else if (weatherCondition.includes('drizzle')) {
    backgroundClass = 'drizzle-background';
  }
console.log("condition",weatherCondition)

  return (
    <div className={`weather-card ${backgroundClass}`}>
      <h2>Weather in {name}</h2>
      <p className="temperature">Temperature: {main?.temp}°C</p>
      <p className="humidity">Humidity: {main?.humidity}%</p>
      <p className="conditions">Conditions: {weather[0]?.main}</p>
    </div>
  );
};

export default WeatherCard;
