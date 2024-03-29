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
    if (name === 'tea') {
      part = 'leaf';
      caffeine = '15–70 mg/cup';
      age = '4,000+ years';
    } else if (name === 'coffee') {
      part = 'bean';
      caffeine = '80–185 mg/cup';
      age = '1,000+ years';
    }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeine}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
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
    <Drink name="tea" />
    <Drink name="coffee" />
  </div>
  )
}

// Arbitrary JSX: This term simply means JSX code that you write outside of a React component's render method or return statement. It's not associated with any particular component.

export default Conditional
