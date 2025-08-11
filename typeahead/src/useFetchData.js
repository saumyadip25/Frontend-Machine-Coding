// API - 'https://dummyjson.com/recipes/search?q=Margherita'

import { useEffect, useState } from "react";

const useFetchData = (searchKey) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(searchKey);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data.recipes || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchKey) {
      fetchData();
    }
  }, [searchKey]);

  return { data, loading, error };
};

export default useFetchData;
