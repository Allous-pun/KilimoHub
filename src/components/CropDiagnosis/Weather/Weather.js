import React from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Time from './Time';
import styles from './Weather.module.css';

const Weather = () => {
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.timeSection}>
        <Time />
      </div>
      <div className={styles.currentWeatherSection}>
        <CurrentWeather />
      </div>
      <div className={styles.forecastSection}>
        <Forecast />
      </div>
    </div>
  );
};

export default Weather;
