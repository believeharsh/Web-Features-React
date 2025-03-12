import "./styles.css";
import { useState, useEffect } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const NumberOfProductsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const totalProducts = data.length;
  const noOfPages = Math.ceil(totalProducts / NumberOfProductsPerPage);
  const startPage = currentPage * NumberOfProductsPerPage;
  const endPage = startPage + NumberOfProductsPerPage;

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=500");
      const json = await response.json();
      setData(json.products);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlechangePage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className="App">
      <h1>Pagination Frontend Heavy</h1>
      <div className="Pagination-container">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          ⬅️
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={`page-Number ${n === currentPage ? "activeBTN" : ""}`}
            onClick={() => handlechangePage(n)}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          ➡️
        </button>
      </div>

      <div className="Product-Container">
        {data.slice(startPage, endPage).map((product) => (
          <div className="SingleProduct" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="image"
            />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Pagination ; 