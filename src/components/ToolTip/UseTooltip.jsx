import React from 'react'
import Tooltip from './Tooltip'


const UseTooltip = () => {
  return (
    <div>
     <div className="flex justify-center items-center h-screen">
        <Tooltip message={"✨Hey I'm Tooltip"}>
          <button>Subscribe</button>
        </Tooltip>
      </div>
      
    </div>
  )
}

export default UseTooltip
