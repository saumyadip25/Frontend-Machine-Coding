import { useState } from "react";
import { getFieldError } from "./utils";

const useFormValidation = (config, formData) => {
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    const field = config.find((f) => f.name === fieldName);
    const error = getFieldError(field, value);

    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));

    return error;
  };

  const validateAll = () => {
    const newErrors = {};
    config.forEach((field) => {
      const error = getFieldError(field, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateField, validateAll };
};

export default useFormValidation;
