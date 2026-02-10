import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { getWeather } from './services/weatherService';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      console.error('Full Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Weather App</h1>
        <SearchBar onSearch={fetchWeather} />

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
