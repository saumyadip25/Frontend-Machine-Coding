import { useState } from "react";
import Stepper from "./Stepper";
import Personal from "./Personal";
import Company from "./Company";
import Confirm from "./Confirm";

const SIZE = 3;

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    personal: { name: "", age: "" },
    company: { companyName: "", yoe: "" },
  });

  const [errors, setErrors] = useState({
    personal: { name: "", age: "" },
    company: { companyName: "", yoe: "" },
  });

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));

    if (section === "personal" && field === "name") {
      setErrors((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          name: value.length === 0 ? "Length must be greater than 0" : "",
        },
      }));
    }

    if (section === "personal" && field === "age") {
      setErrors((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          age: value <= 18 ? "Age must be greater than 18" : "",
        },
      }));
    }

    if (section === "company" && field === "companyName") {
      setErrors((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          companyName: value.length === 0 ? "Company name is required" : "",
        },
      }));
    }

    if (section === "company" && field === "yoe") {
      setErrors((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          yoe: value <= 2 ? "YOE must be greater than 2" : "",
        },
      }));
    }
  };

  const validateForm = (formPage) => {
    if (formPage === 0) {
      let valid = true;
      if (formData.personal.name.length === 0) {
        setErrors((prev) => ({
          ...prev,
          personal: { ...prev.personal, name: "Length must be greater than 0" },
        }));
        valid = false;
      }
      if (formData.personal.age <= 18) {
        setErrors((prev) => ({
          ...prev,
          personal: { ...prev.personal, age: "Age must be greater than 18" },
        }));
        valid = false;
      }
      return valid;
    }

    if (formPage === 1) {
      let valid = true;
      if (formData.company.companyName.length === 0) {
        setErrors((prev) => ({
          ...prev,
          company: {
            ...prev.company,
            companyName: "Company name must be greater than 0",
          },
        }));
        valid = false;
      }
      if (formData.company.yoe <= 2) {
        setErrors((prev) => ({
          ...prev,
          company: {
            ...prev.company,
            yoe: "YOE must be greater than 2",
          },
        }));
        valid = false;
      }
      return valid;
    }
    return true;
  };

  const goToStep = (step) => {
    if (step < 0) return;
    if (step > SIZE) return;
    setCurrentStep(step);
  };

  return (
    <div>
      <Stepper size={SIZE} current={currentStep} />
      <div
        style={{
          display: "flex",
          height: "200px",
          border: "solid 1px black",
          alignItems: "center",
        }}
      >
        {currentStep === 0 && (
          <Personal
            formData={formData}
            errors={errors}
            handleChange={handleChange}
          />
        )}
        {currentStep === 1 && (
          <Company
            formData={formData}
            errors={errors}
            handleChange={handleChange}
          />
        )}
        {currentStep === 2 && (
          <Confirm personal={formData.personal} company={formData.company} />
        )}
        {currentStep === 3 && <div> All details sent to server </div>}
      </div>

      <button onClick={() => goToStep(currentStep - 1)}>Prev</button>
      <button
        onClick={() => {
          if (validateForm(currentStep)) {
            goToStep(currentStep + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
