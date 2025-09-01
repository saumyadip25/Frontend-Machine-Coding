import { useState } from "react";

const DataManager = ({ render }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Pass state and functions to render prop
  return render({ data, loading, fetchData });
};

export default DataManager;
