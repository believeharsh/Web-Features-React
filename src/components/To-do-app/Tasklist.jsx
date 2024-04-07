import React, { useState } from "react";

const Tasklist = ({ toggleTaskCompletion, deleteTask, Tasks , editTask}) => {
  const [EditTaskId, setEditTaskId] = useState(null);
  const [EditedTaskText, setEditedTaskText] = useState('');

  const handleEditInputChange = (event) => {
    setEditedTaskText(event.target.value);
  };
  const handleEditSubmit = (taskId) => {
    if(EditedTaskText !== ''){
      editTask(taskId, EditedTaskText);
      setEditTaskId(null);
      setEditedTaskText('');
    }
    else{
      alert("Input filed can't be empty")
    }
    
  };
  const handleKeyPress = (event, taskId) => {
    if (event.key === 'Enter') {
      handleEditSubmit(taskId);
    }
  };
  return (
    <>
      <div className="">
        <ul>
          {Tasks.map((task) => {
            const isEditing = task.id === EditTaskId ;
            return (
              <li key={task.id} className={`flex items-center justify-between p-2 border-b ${task.completed ? "bg-gray-200" : ""}`}>
            {isEditing ? (
              <input
                type="text"
                value={EditedTaskText}
                onChange={handleEditInputChange}
                onKeyDown={(event) => handleKeyPress(event, task.id)}
                className="border  rounded px-2 py-1"
              />
            ) : (
              <span
                className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.text}
              </span>
            )}
            <div>
              {!isEditing && (
                <>
                  <button
                    className="text-blue-500 hover:text-blue-600 mr-2"
                    onClick={() => setEditTaskId(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </>
              )}
              {isEditing && (
                <button
                  className="text-green-500 hover:text-green-600"
                  onClick={() => handleEditSubmit(task.id)}
                >
                  Save
                </button>
              )}
            </div>
          </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Tasklist;
