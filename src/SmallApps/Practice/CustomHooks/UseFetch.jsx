import { useState, useEffect } from "react";

const useFetch = (url, optional = {}) => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const [data, setData] = useState(null);

  const getFetchData = async (geturl) => {
    try {
      setPending(true);
      const response = await fetch(geturl);
      if (!response.ok) {
        throw new Error(response.text);
      }
      const data = await response.json();
      setData(data);
      console.log(data) ;
      setPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPending(false);
    }
  };

  useEffect(() => {
    getFetchData(url);
  }, [url]);
  return { data, error, pending };
};

export default useFetch ; 