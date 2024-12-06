import React from 'react'
import Tabs from './Tabs'


const RandomComponent = () => {
    return (
        <div className="">
            RandomComponent is here 
        </div>
    )
}
const ParentOfTabs = () => {
    const tabs = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content: <RandomComponent />,
        },
      ];

      const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex) ; 
      }
  return (
    <div>
      <Tabs tabContent={tabs} onChange={handleChange}/>
      
    </div>
  )
}

export default ParentOfTabs
