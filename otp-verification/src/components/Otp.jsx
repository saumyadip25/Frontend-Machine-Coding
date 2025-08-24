import { useState, useRef, useEffect } from "react";
import "./Otp.css";

const Otp = ({ size }) => {
  const [values, setValues] = useState(Array(size).fill(""));
  const refs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newValues = [...values];
    newValues[index] = value.slice(-1); // only keep last char
    setValues(newValues);

    if (value) {
      if (index < size - 1) {
        refs.current[index + 1]?.focus();
      } else {
        buttonRef.current?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Entered:", values.join(""));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {Array.from({ length: size }).map((_, index) => (
          <input
            key={index}
            type="number"
            ref={(el) => (refs.current[index] = el)}
            value={values[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <button ref={buttonRef}>Submit</button>
    </form>
  );
};

export default Otp;
