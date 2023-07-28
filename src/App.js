// App.js
import React, { useState } from 'react';
import Weather from './Components/Weather';
import './App.css'; // Import the custom CSS file

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(''); // Add weatherCondition state

  const handleWeatherChange = (condition) => {
    setWeatherCondition(condition);
  };

  return (
    <div className={`app ${weatherCondition}`}>
      <Weather setWeatherData={setWeatherData} handleWeatherChange={handleWeatherChange} />
    </div>
  );
};

export default App;
