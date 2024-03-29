import React from 'react'
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  console.log(guest)
  return <h2>Tea cup for guest #{guest}</h2>;
}


const PureComp = () => {
  return (
    <div>
     <Cup />
      <Cup />
      <Cup />
    
      
    </div>
  )
}

export default PureComp
