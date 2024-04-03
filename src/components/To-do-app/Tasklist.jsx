import React from "react";

const Tasklist = ({ toggleTaskCompletion, deleteTask, Tasks }) => {
  return (
    <>
      <div className="">
        <ul>
          {Tasks.map((task) => {
            return (
              <li
                key={task.id}
                className={`flex items-center justify-between p-2 border-b ${
                  task.completed ? "bg-gray-200" : ""
                }`}
              >
                <span
                  className={`cursor-pointer ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.text}
                </span>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Tasklist;
