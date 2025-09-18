// Confirm.js
import React from "react";

const Confirm = ({ personal, company }) => {
  const renderRow = (label, value) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "8px 0",
        padding: "2px 12px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        background: "#f9f9f9",
      }}
    >
      <strong>{label}</strong>
      <span>{value || "-"}</span>
    </div>
  );

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h3 style={{ textAlign: "center", marginBottom: "16px" }}>
        Confirm Your Details
      </h3>

      {renderRow("Name", personal.name)}
      {renderRow("Age", personal.age)}
      {renderRow("Company Name", company.companyName)}
      {renderRow("Years of Experience", company.yoe)}
    </div>
  );
};

export default Confirm;
