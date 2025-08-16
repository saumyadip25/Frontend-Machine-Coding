export const getFieldError = (field, value) => {
  // If no validation rules, no error
  if (!field.validation) return "";

  const { validation } = field;

  // Required validation
  if (validation.required) {
    if (field.component === "checkbox" && !value) {
      return validation.required;
    }
    if (field.component === "select" && !value) {
      return validation.required;
    }
    if (!value || value.toString().trim() === "") {
      return validation.required;
    }
  }

  // Skip other validations if empty (and not required)
  if (!value || value.toString().trim() === "") return "";

  // Email validation
  if (validation.email && field.inputType === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return validation.email;
    }
  }

  // Min length validation
  if (validation.minLength && value.length < validation.minLength.value) {
    return validation.minLength.message;
  }

  // Max length validation
  if (validation.maxLength && value.length > validation.maxLength.value) {
    return validation.maxLength.message;
  }

  return "";
};
