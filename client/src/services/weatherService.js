import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/weather';

export const getWeather = async (city) => {
    try {
        const response = await axios.get(`${API_URL}?city=${city}`);
        return response.data;
    } catch (error) {
        console.error("API Call Failed:", error);
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        // Fallback to error message (e.g. "Network Error")
        throw new Error(error.message || 'Failed to fetch weather data');
    }
};
