import React from 'react'
import UseTooltip from './components/ToolTip/UseTooltip'
import Conditional from './components/Conditional-Rendering/Conditional'
import RenderingList from './components/Rendering-List/RenderingList'
import PureComp from './components/PureComp/PureComp'
import UseImmer from './components/UseImmer/UseImmer'
import List from './components/Update-Obj-Inside-arr/List'
import UseShoppingCart from './components/ShoppingCart/UseShoppingCart'
import Profile from './components/Contextapi/Profile'

import { ContextProvider } from './components/Contextapi/MyContext'




const App = () => {
  return (
 
    <ContextProvider>
    <Profile/>
       
    {/* <UseTooltip/> */}
    {/* <Conditional/> */}
    {/* <RenderingList/> */}
    {/* <PureComp/> */}
    {/* <UseImmer/> */}
    {/* <List/> */}
    {/* <UseShoppingCart/> */}
    </ContextProvider>
  

    
  )
}

export default App
