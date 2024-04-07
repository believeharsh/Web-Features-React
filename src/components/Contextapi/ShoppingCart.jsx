import React from "react";
import UseCart from "./UseCart";

function ShoppingCart() {
  const { cart, removeFromCart } = UseCart();

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between py-2 border-b"
            >
              <span className="">{item.name}</span>
              <span className="text-gray-600">${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default ShoppingCart;
