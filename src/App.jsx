import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const targetDate = new Date('2023-07-04T12:30:00'); // Establece la fecha objetivo (puedes cambiarla a la fecha deseada)
  // const targetDate = new Date('2023-06-20T12:30:00'); // Establece la fecha objetivo (puedes cambiarla a la fecha deseada)
  // const targetDate = new Date('2023-06-20T19:10:00'); // Establece la fecha objetivo (puedes cambiarla a la fecha deseada)
  // const targetDate = new Date('2023-06-19T19:59:00'); // Pruebas
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
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    // Ajustar las variables a cero si el tiempo restante es negativo
    if (total <= 0) {
      seconds = 0;
      minutes = 0;
      hours = 0;
      days = 0;
    }
  
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
      {countdown.total <= 0 ? (
        <>
          <h1>¡Ya estamos juntos!</h1>
          <div className="img-container">
            <img src="https://media.giphy.com/media/OfkGZ5H2H3f8Y/giphy.gif" alt="GIF" />
          </div>
        </>
      ) : countdown.days === 0 && countdown.hours < 24 ? (
        <>
          <h1>Faltan menos de 24 hrs ¡Es hoy!</h1>
          <div className="img-container">
            <img src="https://media.giphy.com/media/3rgXBK5ADOuzBWVfjO/giphy.gif" alt="GIF" />
          </div>
        </>
      ) : (
        <>
          <h1>Tiempo para ver a Jorgais</h1>
          <div className="img-container">
            <img src="https://media.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy-downsized-large.gif" alt="GIF" />
          </div>
        </>
      )}
  
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
