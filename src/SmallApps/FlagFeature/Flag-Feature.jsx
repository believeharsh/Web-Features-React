import { useContext } from "react";
// import Accordian from "../accordian";
import LightDarkMode from "../Light-Dark-Mode/Main";
// import RandomColor from "../random-color";
import TicTacToe from "../Tic-Tac-Toe/Index";
// import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./Context/Index";
// import menus from "../tree-view/data";
// import TabTest from "../custom-tabs/tab-test";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    // {
    //   key: "showRandomColorGenerator",
    //   component: <RandomColor />,
    // },
    // {
    //   key: "showAccordian",
    //   component: <Accordian />,
    // },
    // {
    //   key: "showTreeView",
    //   component: <TreeView  menus={menus} />,
    // },
    // {
    //     key : 'showTabs',
    //     component : <TabTest/>
    // }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}