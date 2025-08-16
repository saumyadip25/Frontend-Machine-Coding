import ErrorMessage from "./ErrorMessage";

const Select = ({ field, value, onChange, error }) => {
  const { options, name, placeholder } = field;

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <>
      <select
        value={value || ""}
        onChange={handleChange}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "200px",
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage error={error} />
    </>
  );
};

export default Select;
