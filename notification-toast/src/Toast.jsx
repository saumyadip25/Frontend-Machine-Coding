import "./Toast.css";
import { useState, useEffect } from "react";

const Toast = ({ type, text, autoHideDurtaion = 3000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, autoHideDurtaion);

    return () => clearTimeout(timer);
  }, [type, text]);

  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <div className={`toast ${type}`}>
      <div className="text">{text}</div>
      <button className="cross" onClick={handleClose}>
        x
      </button>
    </div>
  );
};

export default Toast;
