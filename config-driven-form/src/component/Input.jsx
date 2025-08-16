import ErrorMessage from "./ErrorMessage";

const Input = ({ field, value, onChange, error }) => {
  const { inputType = "text", placeholder, name } = field;

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value || ""}
        onChange={handleChange}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "200px",
        }}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export default Input;
