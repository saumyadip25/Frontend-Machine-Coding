const Checkbox = ({ field, value, onChange }) => {
  const { name, label } = field;

  const handleChange = (e) => {
    onChange(name, e.target.checked);
  };

  return (
    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input type="checkbox" checked={value || false} onChange={handleChange} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
