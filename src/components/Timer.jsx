import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(300); // 5 minutes (300 seconds)
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(300); // Reset to 5 minutes
    setIsRunning(false);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Timer</h2>
      <div style={{ fontSize: "2rem", margin: "10px 0" }}>{formatTime(time)}</div>
      <button
        onClick={startTimer}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          fontSize: "1rem",
          background: "#63B4FF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Start Timer
      </button>
      <button
        onClick={pauseTimer}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          fontSize: "1rem",
          background: "#FF8C00",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Pause Timer
      </button>
      <button
        onClick={resetTimer}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          background: "#FF5E57",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Reset Timer
      </button>
    </div>
  );
};

export default Timer;