import useFetch from "./UseFetch";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch("https://dummyjson.com/products" , {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Use Fetch Hook Demo
      </h1>

      {pending && (
        <h3 className="text-lg text-gray-300 animate-pulse">
          Loading... Please wait
        </h3>
      )}

      {error && (
        <h3 className="text-lg text-red-500 bg-red-800 p-4 rounded-lg shadow-md">
          {error}
        </h3>
      )}

      {data?.products?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-6">
          {data.products.map((productItem) => (
            <div
              key={productItem.id}
              className="bg-gray-700 p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={productItem.thumbnail}
                alt={productItem.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400">
                {productItem.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                {productItem.description.slice(0, 50)}...
              </p>
              <p className="text-lg font-bold mt-2 text-yellow-400">
                ${productItem.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
