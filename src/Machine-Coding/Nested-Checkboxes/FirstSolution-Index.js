import Data from "./Data.json";
import { useState } from "react";

const CheckBox = ({ list, level = 0, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child?.children && updateChildren(child);
        });
      };

      if (node.children) {
        updateChildren(node);
      }

      const verifyCheck = (node) => {
        if (!node.children) return newState[node.id] || false;
        const allChildrenChecked = node.children.every((child) =>
          verifyCheck(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      Data.forEach((node) => verifyCheck(node));
      return newState;
    });
  };

  // console.log(checked);
  return (
    <div
      style={{
        marginLeft: `${level * 20}px`,
        padding: "4px 0",
        textAlign: "left",
        fontSize: "15px",
      }}
    >
      <label className="">
        <input
          type="checkbox"
          checked={checked[list.id] || false}
          onChange={(e) => handleChange(e.target.checked, list)}
        />
        <span>{list.name}</span>
      </label>

      {list.children &&
        list.children.map((child) => (
          <CheckBox
            key={child.id}
            list={child}
            level={level + 1}
            checked={checked}
            setChecked={setChecked}
          />
        ))}
    </div>
  );
};

export default function App() {
  const [checked, setChecked] = useState({});
  return (
    <div className="App">
      <h1>Nested Checkboxes</h1>
      {Data.map((node) => (
        <CheckBox
          key={node.id}
          list={node}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
    </div>
  );
}