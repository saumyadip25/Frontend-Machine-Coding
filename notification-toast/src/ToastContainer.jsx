import "./ToastContainer.css";

const ToastContainer = ({ position, children }) => {
  return <div className={`toast-container ${position}`}>{children}</div>;
};

export default ToastContainer;
