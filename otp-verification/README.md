# OTP Verification Component

A React OTP (One-Time Password) verification component built with Vite that provides a clean, user-friendly interface for entering verification codes.

## Features

- Configurable number of OTP input fields
- Auto-focus on next input field when digit is entered
- Backspace navigation to previous field
- Automatic focus management
- Clean styling with hover and focus effects
- Form submission handling

## Project Structure

```
src/
├── App.jsx           # Main app component
├── components/
│   ├── Otp.jsx      # OTP input component
│   └── Otp.css      # Component styling
└── main.jsx         # App entry point
```

## Code Logic

### App Component (`src/App.jsx`)
- Simple wrapper that renders the OTP component with 6 input fields

### OTP Component (`src/components/Otp.jsx`)

#### State Management
- `values`: Array storing the value of each input field (initialized with empty strings)
- `refs`: Array of refs to manage focus on input fields
- `buttonRef`: Ref for the submit button

#### Key Functions

**`handleChange(e, index)`**
- Extracts the last character entered (prevents multiple digits)
- Updates the values array for the current input
- Auto-focuses the next input field or submit button when complete

**`handleKeyDown(e, index)`**
- Handles backspace navigation
- Moves focus to previous input when backspace is pressed on empty field

**`handleSubmit(e)`**
- Prevents default form submission
- Logs the complete OTP to console

#### Focus Management
- Auto-focuses first input field on component mount
- Progressive focus movement as user types
- Focus moves to submit button after last digit

### Styling (`src/components/Otp.css`)
- Square input fields (30x30px) with center-aligned text
- Blue focus border and shadow effects
- Gradient submit button with hover and focus states
- Removes number input spinners for clean appearance

## Usage

```jsx
import Otp from "./components/Otp";

// Render OTP component with 6 input fields
<Otp size={6} />
```

## Installation & Development

```bash
npm install
npm run dev
```
