import { useState, useEffect, useCallback } from "react";

const useDataFetch = ({ limit, offset }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${offset}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [limit, offset]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data, error };
};

export default useDataFetch;
