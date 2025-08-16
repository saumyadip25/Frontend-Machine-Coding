# Config-Driven Form Component

A React form component that generates forms dynamically based on configuration objects with real-time validation.

## 🚀 What We Built

- **Configuration-driven forms**: Define entire forms using JavaScript objects
- **4 field types**: Input, Select, Radio, Checkbox
- **Real-time validation**: Shows errors as you type
- **Config-based validation**: Validation rules defined in configuration
- **Modular components**: Clean, reusable architecture

## 📋 Supported Field Types

| Component  | Description                  | Example               |
| ---------- | ---------------------------- | --------------------- |
| `input`    | Text, email, password inputs | Name, Email, Password |
| `select`   | Dropdown selection           | City selection        |
| `radio`    | Radio button group           | Gender selection      |
| `checkbox` | Single checkbox              | Terms agreement       |

## 📖 Configuration Structure

### Why userConfig is Defined This Way

The `userConfig` array contains objects where each object represents a form field. This structure allows us to:

1. **Define entire forms declaratively** - No need to write JSX for each field
2. **Centralize validation rules** - All validation logic in config
3. **Make forms reusable** - Same component, different configs
4. **Enable dynamic forms** - Config can come from APIs or databases

### Basic Field Configuration

```javascript
const userConfig = [
  {
    name: "email", // Unique field identifier
    component: "input", // Field type to render
    inputType: "email", // HTML input type
    label: "Email", // Display label
    required: true, // Is field required
    defaultValue: "", // Initial value
    placeholder: "Enter your Email", // Placeholder text
    validation: {
      // Validation rules
      required: "Email is required",
      email: "Please enter a valid email",
    },
  },
];
```

## 🔧 Field Types Implementation

### Input Fields

```javascript
{
  name: "name",
  component: "input",
  inputType: "text",           // text, email, password
  label: "Name",
  required: true,
  validation: {
    required: "Name is required",
    minLength: { value: 2, message: "Too short" },
    maxLength: { value: 20, message: "Too long" }
  }
}
```

### Select Fields

```javascript
{
  name: "city",
  component: "select",
  label: "City",
  required: true,
  defaultValue: "",            // Empty for placeholder
  placeholder: "Select city",
  options: [
    { label: "Bengaluru", value: "bengaluru" },
    { label: "Delhi", value: "delhi" }
  ],
  validation: {
    required: "Please select a city"
  }
}
```

### Radio Fields

```javascript
{
  name: "gender",
  component: "radio",
  label: "Gender",
  defaultValue: "male",        // Pre-selected option
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" }
  ]
  // No validation needed - has default value
}
```

### Checkbox Fields

```javascript
{
  name: "terms",
  component: "checkbox",
  label: "I agree to Terms & Conditions",
  required: true,
  defaultValue: false,
  validation: {
    required: "You must agree to terms"
  }
}
```

## ✅ Validation System

### Available Validation Rules

```javascript
validation: {
  // Required validation
  required: "Custom error message",

  // Length validation (for inputs)
  minLength: { value: 6, message: "Minimum 6 characters" },
  maxLength: { value: 20, message: "Maximum 20 characters" },

  // Email validation (for email inputs)
  email: "Please enter valid email"
}
```

### When Validation Triggers

- **Real-time**: As you type in input fields
- **Immediate feedback**: Shows/hides errors instantly
- **Submit validation**: Final check before form submission

## 🏗️ Architecture

### Component Structure

```
Form Component
├── useFormData hook (manages form state)
├── useFormValidation hook (handles validation)
└── FormField Components
    ├── Input Component
    ├── Select Component
    ├── Radio Component
    └── Checkbox Component
```

### Key Functions

```javascript
// Initialize form data from config
const useFormData = (config) => {
  /* returns [formData, setFormData] */
};

// Handle validation logic
const useFormValidation = (config, formData) => {
  /* returns validation state */
};

// Validate individual field
const getFieldError = (field, value) => {
  /* returns error message or empty */
};
```

## 🔄 How It Works

1. **Config defines form structure** - Fields, types, validation rules
2. **Form component reads config** - Renders appropriate field components
3. **User interacts with fields** - onChange triggers validation
4. **Real-time feedback** - Errors shown immediately
5. **Submit validation** - Final check before submission

## 📊 Form Submission Output

```javascript
// When form is submitted successfully:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "gender": "male",
  "city": "bengaluru",
  "terms": true
}
```

## 🎯 Benefits of This Approach

1. **Declarative**: Describe what you want, not how to build it
2. **Reusable**: Same form component, different configurations
3. **Maintainable**: Change validation without touching component code
4. **Scalable**: Easy to add new field types and validation rules
5. **Config-driven**: Non-developers can modify forms via configuration

## 🔧 Usage

```javascript
import Form from "./Form";
import { userConfig } from "./configData";

function App() {
  return <Form config={userConfig} />;
}
```

That's it! The form renders automatically based on your configuration. ✨
