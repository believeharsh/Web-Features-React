import { useState, useEffect } from "react";

const useFetch = (url, optional = {} ) => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (geturl) => {
    try {
      setPending(true);
      const response = await fetch(geturl, optional);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json(); 
      setData(result);
      setError(null);
    } catch (err) {
      console.error(err.message); 
      setError(err.message);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, error, pending };
};

export default useFetch;
