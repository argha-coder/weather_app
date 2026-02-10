const axios = require('axios');

const getWeather = async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ message: 'City name is required' });
    }

    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        console.log(`Received request for city: ${city}`);
        console.log(`Using API Key: ${apiKey ? 'Yes (Length: ' + apiKey.length + ')' : 'No'}`);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const data = response.data;

        const weatherData = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].main,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        };

        res.status(200).json(weatherData); // Send formatted data
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                return res.status(404).json({ message: 'City not found' });
            } else if (error.response.status === 401) {
                return res.status(401).json({ message: 'Invalid or missing API key in server' });
            }
        }
        console.error('Error seeking weather data:', error.message);
        res.status(500).json({ message: 'Server error fetching weather data' });
    }
};

module.exports = { getWeather };
