import { useState } from "react";
import FormField from "./FormField";
import useFormValidation from "./useFormValidation";

const getInitialData = (formData) => {
  let newFormatData = {};

  formData.forEach((val) => {
    newFormatData = { ...newFormatData, [val.name]: val.defaultValue };
  });

  return newFormatData;
};

const Form = ({ config }) => {
  const [formData, setFormData] = useState(() => getInitialData(config));
  const { errors, validateField, validateAll } = useFormValidation(
    config,
    formData
  );

  const handleFieldChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    validateField(fieldName, fieldValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (isValid) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    } else {
      console.log("Validation errors:", errors);
      alert("Please fix errors before submitting");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        Config-Driven Form
      </h2>

      <form onSubmit={handleSubmit}>
        {config.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name]}
            onChange={handleFieldChange}
            error={errors[field.name]}
          />
        ))}

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            type="submit"
            style={{
              padding: "12px 24px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
