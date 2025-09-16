import { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startProgress = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const resetProgress = () => {
    setIsAnimating(false);
  };

  return (
    <div>
      <div className="container">
        <div className={`fill ${isAnimating ? "animate" : ""}`}></div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={startProgress}>Start Progress</button>
        <button onClick={resetProgress}>Reset</button>
      </div>
    </div>
  );
};

export default ProgressBar;
