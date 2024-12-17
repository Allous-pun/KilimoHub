import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css';

const API_KEY = "095d5769e0f77d20dd2f537424cc1746";
const API_URL = "https://api.openweathermap.org/data/2.5/";

const Forecast = () => {
  const [forecast, setForecast] = useState(null);
  const city = "Nairobi"; // Default city (set as a constant)

  useEffect(() => {
    fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => setForecast(data))
      .catch(err => console.error("Error fetching forecast data:", err));
  }, [city]);

  return (
    <div className={styles.forecast}>
      <h3>5-Day Forecast</h3>
      {forecast ? (
        <div className={styles.forecastList}>
          {forecast.list.slice(0, 5).map((item, index) => (
            <div key={index} className={styles.forecastItem}>
              <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
              <p>{item.weather[0].description}</p>
              <p>Temp: {item.main.temp}°C</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
};

export default Forecast;
