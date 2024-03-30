import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Cheese',
  count: 1,
}, {
  id: 1,
  name: 'Milk',
  count: 5,
}, {
  id: 2,
  name: 'BreadPacket',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p =>
      p.count > 0
    );
    setProducts(nextProducts)
  }

  return (

    <div className="bg-slate-900 text-white font-mono text-xl px-2 py-2  ">
    <ul>
      {products.map(product => (
        <li key={product.id} className='mx-2 pt-2'>
          {product.name}
          {''}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }} className='bg-blue-500 text-white border-dotted border-white px-1 py-[0.5] border-[.5px] rounded-md mx-[1px]'>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }} className='bg-blue-500 text-white border-dotted border-white px-1 py-[0.5] border-[.5px] rounded-md mx-[1px]'>
            –
          </button>
        </li>
      ))}

    </ul>
    </div>
    
  );
}
