import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialProducts = [
  {
    id: uuidv4(),
    name: "Cheese",
    count: 1,
  },
  {
    id: uuidv4(),
    name: "Milk",
    count: 5,
  },
  {
    id: uuidv4(),
    name: "BreadPacket",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);
  const [name, setName] = useState('');

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleDecreaseClick(productId) {
    let nextProducts = [];
    
    for (let product of products) {
      if (product.id === productId) {
        const updatedCount = product.count - 1;
        if (updatedCount > 0) {
          nextProducts.push({
            ...product,
            count: updatedCount,
          });
        }
      } else {
        nextProducts.push(product);
      }
    }
    
    setProducts(nextProducts);
  }

  function handleDelete(productId) {
    setProducts(products.filter(a => a.id !== productId));
  }

  const HandleAdd = () => {
    const newProduct = { id: uuidv4(), name: name.trim(), count: 1 };
    setProducts([...products, newProduct]);
    setName('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 text-white font-mono text-xl p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="mb-4">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Add a product..."
            className="w-full p-2 rounded-md text-black"
          />
          <button 
            onClick={HandleAdd}
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Add to Cart
          </button>
        </div>
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-md">
              <span className="font-semibold">{product.name}</span>
              <span className="flex items-center space-x-4">
                <button
                  onClick={() => handleIncreaseClick(product.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded-md transition-colors"
                >
                  +
                </button>
                <span className="font-bold text-lg">{product.count}</span>
                <button
                  onClick={() => handleDecreaseClick(product.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 py-1 rounded-md transition-colors"
                >
                  –
                </button>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-md transition-colors"
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}