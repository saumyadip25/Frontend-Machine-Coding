import Input from "./component/Input";
import Select from "./component/Select";
import Radio from "./component/Radio";
import Checkbox from "./component/Checkbox";

const COMPONENT_MAP = {
  input: Input,
  select: Select,
  radio: Radio,
  checkbox: Checkbox,
};

const FormField = ({ field, value, onChange, error }) => {
  const Component = COMPONENT_MAP[field.component];

  if (!Component) {
    return <div>Unknown component: {field.component}</div>;
  }

  return (
    <div
      style={{ display: "flex", marginBottom: "16px", alignItems: "center" }}
    >
      {field.component !== "checkbox" && (
        <label
          style={{ width: "150px", fontWeight: "500", marginRight: "12px" }}
        >
          {field.label}
          {field.required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      <div>
        <Component
          field={field}
          value={value}
          onChange={onChange}
          error={error}
        />
      </div>
    </div>
  );
};

export default FormField;
