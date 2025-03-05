import React,  { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const [showResult, setShowResult] = useState(false);

  const handleInputChnage = (e) => {
    setInput(e.target.value);
  };

  const fetchData = async () => {
    console.log("Api Call  ", input);
    try {
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await res.json();
      console.log(json);
      setData(json.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>Auto Search Complete</h1>
      <div className="">
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => handleInputChnage(e)}
          onBlur={() => setShowResult(false)}
          onFocus={() => setShowResult(true)}
        />
      </div>

      {showResult && (
        <div className="result-container">
          {data.map((recipe) => (
            <p key={recipe.id}>{recipe.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}
export default App ; 