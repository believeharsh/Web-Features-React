import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Cheese",
    count: 1,
  },
  {
    id: 2,
    name: "Milk",
    count: 5,
  },
  {
    id: 3,
    name: "BreadPacket",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setproducts] = useState(initialProducts);
  const [name, setName] = useState('');
  let nextid = 0; 

  function handleIncreaseClick(productId) {
    setproducts(
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
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.count > 0);
    setproducts(nextProducts);
  }
   function HandleDelete (productid) {
       setproducts(products.filter(a => a.id !== productid))
      // let check = products.filter(a => a.id !== productid)
      // console.log(check)
   }

    const HandleAdd = () => {
      const insertAt = 0; // Could be any index
      const nextArtists = [
        // Items before the insertion point:
        ...products.slice(0, insertAt),
        // New item:
        { id: nextid++, name: name , count:1},
        // Items after the insertion point:
        ...products.slice(insertAt)
      ];
      setproducts(nextArtists);
      setName('');
    }
  return (
    <div className="bg-slate-900 text-white font-mono text-xl px-2 py-2  ">
    <div className="text-black">
    <input
      value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className="bg-blue-500 text-white border-dotted border-white px-1 py-[0.5] border-[.5px] rounded-md mx-[1px]" onClick={() => HandleAdd()}>
        Add on Cart
      </button>
    </div>
      <ul className="border-white border-dashed border-[1px] px-1 py-1 mt-2" >
        {products.map((product) => (
          <li key={product.id} className="mx-2 pt-2">
            {product.name}
            {""}(<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
              className="bg-blue-500 text-white border-dotted border-white px-1 py-[0.5] border-[.5px] rounded-md mx-[1px]"
            >
              +
            </button>
            <button
              onClick={() => {
                handleDecreaseClick(product.id);
              }}
              className="bg-blue-500 text-white border-dotted border-white px-1 py-[0.5] border-[.5px] rounded-md mx-[1px]"
            >
              –
            </button>
            <button onClick={() => HandleDelete(product.id)}
            className="bg-blue-500 text-white border-dotted border-white px-1 py-[0.5] border-[.5px] rounded-md mx-[1px]"
            >Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
