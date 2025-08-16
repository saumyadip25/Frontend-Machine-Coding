export const userConfig = [
  {
    name: "name",
    component: "input",
    inputType: "text",
    label: "Name",
    required: true,
    defaultValue: "",
    placeholder: "Enter your Name",
    validation: {
      required: "Name is required",
      minLength: { value: 2, message: "Name must be at least 2 characters" },
      maxLength: { value: 20, message: "Name cannot exceed 20 characters" },
    },
  },
  {
    name: "email",
    component: "input",
    inputType: "email",
    label: "Email",
    required: true,
    defaultValue: "",
    placeholder: "Enter your Email",
    validation: {
      required: "Email is required",
      email: "Please enter a valid email address",
    },
  },
  {
    name: "password",
    component: "input",
    inputType: "password",
    label: "Password",
    required: true,
    defaultValue: "",
    placeholder: "Enter your Password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
      maxLength: { value: 20, message: "Password cannot exceed 20 characters" },
    },
  },
  {
    name: "gender",
    component: "radio",
    label: "Gender",
    required: false,
    defaultValue: "male",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    name: "city",
    component: "select",
    label: "City",
    required: true,
    defaultValue: "",
    placeholder: "Select city",
    options: [
      { label: "Bengaluru", value: "bengaluru" },
      { label: "Delhi", value: "delhi" },
      { label: "Mumbai", value: "mumbai" },
    ],
    validation: {
      required: "Please select a city",
    },
  },
  {
    name: "terms",
    component: "checkbox",
    label: "I agree to Terms & Conditions",
    required: true,
    defaultValue: false,
    validation: {
      required: "You must agree to the terms and conditions",
    },
  },
];
