// Personal.js
import React from "react";

const Personal = ({ formData, errors, handleChange }) => {
  return (
    <form>
      <div style={{ margin: "10px" }}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={formData.personal.name}
            onChange={(e) => handleChange("personal", "name", e.target.value)}
            placeholder="Enter your name"
          />
        </label>
        {errors.personal.name && (
          <div style={{ color: "red" }}> {errors.personal.name} </div>
        )}
      </div>
      <div style={{ margin: "10px" }}>
        <label>
          Age:
          <input
            type="number"
            value={formData.personal.age}
            onChange={(e) => handleChange("personal", "age", e.target.value)}
            placeholder="Enter your age"
          />
        </label>
        {errors.personal.age && (
          <div style={{ color: "red" }}> {errors.personal.age} </div>
        )}
      </div>
    </form>
  );
};

export default Personal;
