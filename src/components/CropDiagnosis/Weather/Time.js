import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.time}>
      <h2>{currentTime.toLocaleTimeString()}</h2>
      <p>{currentTime.toLocaleDateString()}</p>
    </div>
  );
};

export default Time;
