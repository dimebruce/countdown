import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const targetDate = new Date('2023-07-04T12:30:00'); // Establece la fecha objetivo (puedes cambiarla a la fecha deseada)
  const [countdown, setCountdown] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = getTimeRemaining(targetDate);
      setCountdown(timeRemaining);

      if (timeRemaining.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  function getTimeRemaining(endDate) {
    const total = Date.parse(endDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="App">
      <h1>Tiempo para ver a Jorgais</h1>
      <img src="https://media.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy-downsized-large.gif" alt="" className="mx-3"/>
      <div className="Countdown">
        <div>
          <span>{countdown.days}</span>
          <span>Days</span>
        </div>
        <div>
          <span>{countdown.hours}</span>
          <span>Hours</span>
        </div>
        <div>
          <span>{countdown.minutes}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span>{countdown.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
      
      <div>
          <h2> 🫶</h2>
        </div>
    </div>
  );
}

export default App;

