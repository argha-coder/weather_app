const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weatherRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

if (!process.env.OPENWEATHER_API_KEY || process.env.OPENWEATHER_API_KEY.includes('YOUR_OPENWEATHER_API_KEY_HERE')) {
    console.warn('⚠️  WARNING: You have not set your OpenWeatherMap API Key in server/.env!');
    console.warn('⚠️  Requests will fail with "Invalid API Key".');
}

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api/weather', weatherRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Listening on 0.0.0.0:${PORT} (Accessible via localhost and 127.0.0.1)`);
});
