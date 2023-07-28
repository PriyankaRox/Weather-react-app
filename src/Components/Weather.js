import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import './Weather.css';
import rainbowImage from './rainbow.jpg';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [invalidInput, setInvalidInput] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const API_KEY = '32f35c15c68dc92082839cc9badaa72d';
    const fetchWeatherData = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            const data = await response.json();
            if (data.cod === '404') {
                alert('Invalid state name');
                setWeatherData(null);
            } else {
                setWeatherData(data);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!city) {
            window.alert('Please enter a city');
            return;
        }

        fetchWeatherData();
        setCity('');
        setShowInput(false)
    };
    const handleCheckWeather = () => {
        setShowInput(true); 
    };
    const handleClearCity = () => {
        setCity('');
        setShowInput(false); 
        setWeatherData(null); 
    };

    return (
        <div className="weather-container">
            <div className="header">
                <img src={rainbowImage} alt="Rainbow" className="rainbow-image" />
               {!showInput && ( <button className="header-text" onClick={handleCheckWeather}>Weather</button>)}
            </div>
            {(
                <form className="form" onSubmit={handleFormSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            value={city}
                            onChange={handleCityChange}
                            placeholder="Enter city"
                            className="input-field"
                        />
                        {city && (
                            <button type="button" className="clear-button" onClick={handleClearCity}>
                                &#x2716; 
                            </button>
                        )}
                    </div>
                    <button type="submit" className="submit-button">
                        Get Weather
                    </button>
                </form>
            )}
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
};

export default Weather;
