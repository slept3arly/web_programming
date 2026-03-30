import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const box = {
    width: "260px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #333",
    borderRadius: "6px"
  };

  const input = {
    width: "100%",
    margin: "6px 0",
    padding: "6px"
  };

  const button = {
    margin: "5px",
    padding: "6px 10px"
  };

  const getWeatherDescription = (code) => {
    const map = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      61: "Light rain",
      63: "Moderate rain",
      65: "Heavy rain",
      71: "Snow fall",
      80: "Rain showers"
    };
    return map[code] || "Unknown";
  };

  const fetchWeather = async () => {
    try {
      // Step 1: Get coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        setError("City not found");
        setWeather(null);
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      // Step 2: Fetch weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        code: weatherData.current_weather.weathercode,
        humidity: weatherData.hourly.relativehumidity_2m[0]
      });

      setError("");

    } catch (err) {
      setError("Error fetching data");
      setWeather(null);
    }
  };

  return (
    <div style={box}>
      <h2>Weather App</h2>

      <input
        style={input}
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button style={button} onClick={fetchWeather}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.city}</h3>
          <p>Temperature: {weather.temp} °C</p>
          <p>Description: {getWeatherDescription(weather.code)}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.wind} km/h</p>
        </div>
      )}

      <p style={{ position: "fixed", bottom: "10px", left: "10px", fontSize: "12px" }}>
        Name: Vinayak Natiyal <br />
        Reg No: 24BCE2195
      </p>
    </div>
  );
}

export default App;

