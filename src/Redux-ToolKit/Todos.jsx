import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, editTodo } from './feature-todo';
import AddTodo from './AddTodo';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  
  // 🔹 State to track the todo being edited
  const [editableTodo, setEditableTodo] = useState(null);

  const handleEditTodo = (todo) => {
    setEditableTodo(todo); // Set todo to be edited
  };

  return (
    <>
      <AddTodo editableTodo={editableTodo} setEditableTodo={setEditableTodo} />
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              className="text-white font-bold"
              onClick={() => handleEditTodo(todo)}
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
