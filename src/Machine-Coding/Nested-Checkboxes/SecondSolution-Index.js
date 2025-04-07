import "./styles.css";
import Data from "./Data.json";
import { useState, useEffect, useRef } from "react";

const buildParentMap = (data) => {
  const map = {};
  const dfs = (node, parent = null) => {
    if (parent) {
      map[node.id] = parent.id;
    }
    node.children?.forEach((child) => dfs(child, node));
  };
  data.forEach((node) => dfs(node));
  return map;
};

const findNodeById = (nodes, id) => {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findNodeById(node.children, id);
      if (found) return found;
    }
  }
  return null;
};

const CheckBox = ({ list, level = 0, checked, setChecked, parentMap }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          if (child.children) updateChildren(child);
        });
      };

      const updateParents = (childId) => {
        const parentId = parentMap[childId];
        if (!parentId) return;

        const parentNode = findNodeById(Data, parentId);
        const allChecked = parentNode.children.every(
          (child) => newState[child.id]
        );

        newState[parentId] = allChecked;
        updateParents(parentId); // recursive
      };

      if (node.children) updateChildren(node);
      updateParents(node.id);

      return newState;
    });
  };

  return (
    <div
      style={{
        marginLeft: `${level * 20}px`,
        padding: "4px 0",
        textAlign: "left",
        fontSize: "15px",
      }}
    >
      <label>
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
            parentMap={parentMap}
          />
        ))}
    </div>
  );
};

export default function App() {
  const [checked, setChecked] = useState({});
  const parentMap = useRef({});

  useEffect(() => {
    parentMap.current = buildParentMap(Data);
  }, []);

  return (
    <div className="App">
      <h1>Nested Checkboxes</h1>
      {Data.map((node) => (
        <CheckBox
          key={node.id}
          list={node}
          checked={checked}
          setChecked={setChecked}
          parentMap={parentMap.current}
        />
      ))}
    </div>
  );
}