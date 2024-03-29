import React from 'react'
function Item({ name, isPacked }) {
    // if (isPacked) {
    //   // return <li className="item">{name} ✔</li>;
    //   return null; 
    // }
    // return <li className="item">{name}</li>;

// but rather doing this we can conclude this line form this to this  : 
    return (
        <li className="item">
          {isPacked ? name + ' ✔' : name}
        </li>
      );
  }

  function Drink({ name }) {
    let part, caffeine, age;
    if (name === 'Tea') {
      part = 'leaf';
      caffeine = '15–70 mg/cup';
      age = '4,000+ years';
    } else if (name === 'Coffee') {
      part = 'bean';
      caffeine = '80–185 mg/cup';
      age = '1,000+ years';
    }

    // the same thing can be done by using ternory operator but you can choose whom you'd like to go with!

    return (
      <section className="bg-slate-900 border-white border-1 px-2 py-2 text-white">
        <h1 className="text-2xl font-mono">{name}</h1>
        {
            <hr/>
        }
        <dl className="border-dashed border-[1px] border-white mt-2 rounded-xl px-2 py-2">
          <dt>Part of plant
          <span> { " : " + part}</span>
          </dt>
        
          <dt>Caffeine content
          <span> { " : " + caffeine} </span>
          </dt>
     
          <dt>Age
          <span> { " : " + age}</span>
          </dt>
     
        </dl>
      </section>
    );
  }

const Conditional = () => {
  return (
    // <div>
    // <section>
    //   <h1>Sally Ride's Packing List</h1>
    //   <ul>
    //     <Item 
    //       isPacked={true} 
    //       name="Space suit" 
    //     />
    //     <Item 
    //       isPacked={true} 
    //       name="Helmet with a golden leaf" 
    //     />
    //     <Item 
    //       isPacked={false} 
    //       name="Photo of Tam" 
    //     />
    //   </ul>
    // </section>
      
      
    // </div>
    <div>
    <Drink name="Tea" />
    <Drink name="Coffee" />
  </div>
  )
}

// Arbitrary JSX: This term simply means JSX code that you write outside of a React component's render method or return statement. It's not associated with any particular component.

export default Conditional
