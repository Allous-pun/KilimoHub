import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";

const API_KEY = "095d5769e0f77d20dd2f537424cc1746";
const API_URL = "https://api.openweathermap.org/data/2.5/";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Nairobi"); // Default city
  const [searchCity, setSearchCity] = useState(""); // For city search

  // Fetch weather data when city changes
  useEffect(() => {
    fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("Error fetching weather data:", err));
  }, [city]);

  // Handle search
  const handleSearch = () => {
    if (searchCity.trim() !== "") {
      setCity(searchCity);
      setSearchCity("");
    }
  };

  return (
    <div className={styles.currentWeatherContainer}>
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Enter city name"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>

      {/* Weather Info */}
      <div className={styles.weatherInfo}>
        {weather ? (
          <>
            <h3>
              {weather.name}, {weather.sys.country}
            </h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>{weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
            {weather.rain && weather.rain["1h"] && (
              <p>Rainfall (Last Hour): {weather.rain["1h"]} mm</p>
            )}
          </>
        ) : (
          <p>Loading current weather...</p>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
