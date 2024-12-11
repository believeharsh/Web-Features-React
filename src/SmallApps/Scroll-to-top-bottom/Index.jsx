import useFetch from "../CustomHooks/UseFetch/UseFetch";

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const handleScroll = (scrollWhere) => {
    if (scrollWhere === "bottom") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    } else if (scrollWhere === "top") {
      window.scrollTo({
        top: 0, // Scroll to the top of the document
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <button
        className="bg-blue-800 px-1 py-1 text-black font-bold "
        onClick={() => handleScroll("bottom")}
      >
        Scroll to Bottom
      </button>

      <div className="my-4">
        {pending && <p>Data is being loaded! Please wait...</p>}
        {error && <p>Error has occurred: {error}</p>}
        {data?.products?.length > 0 &&
          data.products.map((dataItem) => (
            <p key={dataItem.id}>{dataItem.title}</p>
          ))}
      </div>

      <button
        className="bg-blue-800 px-1 py-1 text-black font-bold "
        onClick={() => handleScroll("top")}
      >
        Scroll to Top
      </button>
    </>
  );
};

export default ScrollToTopAndBottom;
