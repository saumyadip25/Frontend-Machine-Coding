import ErrorMessage from "./ErrorMessage";

const Radio = ({ field, value, onChange, error }) => {
  const { options, name } = field;

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={handleChange}
            checked={value === option.value}
          />
          <span>{option.label}</span>
        </label>
      ))}
      <ErrorMessage error={error} />
    </div>
  );
};

export default Radio;
