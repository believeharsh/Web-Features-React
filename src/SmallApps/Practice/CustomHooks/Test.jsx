import React from "react";
import useFetch from "./UseFetch";

const UseFetchHookTestPractice = () => {
  const { data, error, pending } = useFetch("https://dummyjson.com/products", {});
  return (
    <>
      <div className="bg-slate-900 text-white font-xl font-thin px-2 py-2">
        {error && <p>error has occured : {error}</p>}
        {data?.products?.length > 0 &&
          data.products.map((dataItem) => (
            <p key={dataItem.id}>{dataItem.title}</p>
          ))}
      </div>
    </>
  );
};

export default UseFetchHookTestPractice;
