# Simple Weather App

A clean and simple Weather Application built with React.js and Node.js.

## Features
- Search implementation to find weather for any city.
- Displays current Temperature, Weather Condition, Humidity, and Wind Speed.
- Error handling for invalid cities.
- Clean and responsive UI.

## Prerequisites
- Node.js installed on your machine.
- An OpenWeatherMap API Key.

## Setup Instructions

### 1. Backend Setup
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your API key:
   ```env
   PORT=5000
   OPENWEATHER_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```bash
   npm start
   ```
   (or `node server.js` if you haven't set up a start script yet)

### 2. Frontend Setup
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

## Technologies Used
- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **API**: OpenWeatherMap

## Notes
- This project is designed for educational purposes.
- API keys are secured in the backend `.env` file.
