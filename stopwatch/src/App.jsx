import { useState, useRef, useEffect } from "react";

const getTime = (counter) => {
  const HH = Math.floor(counter / 3600);
  const hh = `${HH}`.padStart(2, "0");
  const MM = Math.floor((counter % 3600) / 60);
  const mm = `${MM}`.padStart(2, "0");
  const SS = `${counter % 60}`.padStart(2, "0");

  return `${hh}:${mm}:${SS}`;
};

function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalId.current = setInterval(() => {
        setCounter((count) => count + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
    setCounter(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>Time in HH:MM:SS format</div>
      <div>{getTime(counter)}</div>
      <div>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
