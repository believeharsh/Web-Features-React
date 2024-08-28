import React from "react";
import UseTooltip from "./components/ToolTip/UseTooltip";
import Conditional from "./components/Conditional-Rendering/Conditional";
import RenderingList from "./components/Rendering-List/RenderingList";
import PureComp from "./components/PureComp/PureComp";
import UseImmer from "./components/UseImmer/UseImmer";
import List from "./components/Update-Obj-Inside-arr/List";
import UseShoppingCart from "./components/ShoppingCart/UseShoppingCart";
import CartProvider from "./components/Contextapi/CartProvider";
import Maincontainer from "./components/To-do-app/Maincontainer";
import ShoppingCart from "./components/Contextapi/ShoppingCart";

const App = () => {
  return (
    <CartProvider>
      {/* <UseShoppingCart/> */}
      {/* <List/> */}
      {/* <UseImmer/> */}
      <RenderingList/>
    </CartProvider>
  );
};

export default App;
