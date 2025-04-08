// ----------------------------
// Sample tree data
// ----------------------------
const data = [
  {
    id: 1,
    name: "Parent 1",
    children: [
      {
        id: 2,
        name: "Child 1-1",
        children: [
          { id: 4, name: "Grandchild 1-1-1" },
          { id: 5, name: "Grandchild 1-1-2" }
        ]
      },
      {
        id: 3,
        name: "Child 1-2"
      }
    ]
  },
  {
    id: 6,
    name: "Parent 2",
    children: [{ id: 7, name: "Child 2-1" }]
  }
];

// ----------------------------
// Function to build parent map
// ----------------------------
function buildParentMap(data) {
  const map = {};

  function dfs(node, parent = null) {
    if (parent) {
      map[node.id] = parent.id;
    }
    node.children?.forEach((child) => dfs(child, node));
  }

  data.forEach((node) => dfs(node));
  return map;
}



// ----------------------------
// Testing the function
// ----------------------------
const result = buildParentMap(data);
console.log("Parent Map:", result);

/*
Expected Output:
{
  2: 1,
  3: 1,
  4: 2,
  5: 2,
  7: 6
}
*/
