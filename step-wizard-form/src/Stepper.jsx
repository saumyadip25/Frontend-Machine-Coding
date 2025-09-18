import React from "react";
import "./Stepper.css";

const Stepper = ({ size, current }) => {
  return (
    <div className="stepper-container">
      {Array(size)
        .fill(0)
        .map((_, index) => (
          <div className="cirle-line-container" key={index}>
            <div
              className={`step-circle ${
                index < current
                  ? "completed"
                  : index === current
                  ? "active"
                  : "pending"
              }`}
            >
              {index + 1}
            </div>
            {index < size - 1 && (
              <div
                className={`step-line ${
                  index < current ? "completed" : "pending"
                }`}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default Stepper;
