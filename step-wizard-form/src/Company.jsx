// Company.js
import React from "react";

const Company = ({ formData, errors, handleChange }) => {
  return (
    <form>
      <div style={{ margin: "10px" }}>
        <label>
          Company Name:{" "}
          <input
            type="text"
            value={formData.company.companyName}
            onChange={(e) =>
              handleChange("company", "companyName", e.target.value)
            }
            placeholder="Enter company name"
          />
        </label>
        {errors.company.companyName && (
          <div style={{ color: "red" }}> {errors.company.companyName} </div>
        )}
      </div>

      <div style={{ margin: "10px" }}>
        <label>
          Years of Experience:{" "}
          <input
            type="number"
            value={formData.company.yoe}
            onChange={(e) => handleChange("company", "yoe", e.target.value)}
            placeholder="Enter YOE"
          />
        </label>
        {errors.company.yoe && (
          <div style={{ color: "red" }}> {errors.company.yoe} </div>
        )}
      </div>
    </form>
  );
};

export default Company;
