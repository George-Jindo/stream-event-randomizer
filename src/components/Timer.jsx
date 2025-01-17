import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(300); // 5 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(300);
  };

  const progressPercentage = (time / 300) * 100;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Timer</h2>
      <div className="text-4xl font-bold text-center mb-4">{`${Math.floor(
        time / 60
      )}:${String(time % 60).padStart(2, "0")}`}</div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={startTimer}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Start Timer
        </button>
        <button
          onClick={pauseTimer}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400"
        >
          Pause Timer
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
        >
          Reset Timer
        </button>
      </div>
      <div className="w-full bg-gray-700 h-4 rounded">
        <div
          className="bg-green-500 h-4 rounded"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
