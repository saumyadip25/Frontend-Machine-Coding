import { useState } from "react";
import Dropdown from "./Dropdown";
import useFetchData from "./useFetchData";
import useDebounce from "./useDebounce";

const TypeAhead = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const debouncedSearch = useDebounce((searchTerm) => {
    setDebouncedValue(searchTerm);
  }, 500);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // If input is empty, clear search term immediately
    if (!inputValue.trim()) {
      setDebouncedValue("");
    } else {
      debouncedSearch(inputValue);
    }
  };

  const { data, loading, error } = useFetchData(debouncedValue);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <input
          style={{ height: "30px", width: "300px" }}
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
        {data.length > 0 && value.trim() && (
          <Dropdown dropdownList={data} loading={loading} searchTerm={value} />
        )}
      </div>
    </div>
  );
};

export default TypeAhead;
