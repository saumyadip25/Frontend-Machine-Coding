const ErrorMessage = ({ error }) =>
  error ? (
    <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
      {error}
    </div>
  ) : null;

export default ErrorMessage;
