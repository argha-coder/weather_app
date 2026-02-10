import React from 'react';

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const { city, temperature, description, humidity, windSpeed } = data;

    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <div className="weather-info">
                <div className="temp">{Math.round(temperature)}°C</div>
                <div className="desc">{description}</div>
            </div>
            <div className="details">
                <div className="detail-item">
                    <span>Humidity</span>
                    <span>{humidity}%</span>
                </div>
                <div className="detail-item">
                    <span>Wind Speed</span>
                    <span>{windSpeed} m/s</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
