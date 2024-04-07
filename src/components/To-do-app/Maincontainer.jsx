import React, { useState } from "react";
import Task from "./AddTask";
import Tasklist from "./Tasklist";

const Maincontainer = () => {
  const InitlaTasks = [
    { id: 121, text: "Workout", completed: false },
    { id: 122, text: "Reading", completed: false },
    { id: 124, text: "Coding", completed: false },
  ];
  const [tasks, setTasks] = useState(InitlaTasks);

  const addTask = (task) => {
    const isTaskExists = tasks.some((t) => t.text === task);

    if (!isTaskExists) {
      let newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    } else {
      alert("this Task is already there ");
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };
  const editTask = (taskId, newText) => {
  setTasks(tasks.map((task) => task.id === taskId ? {...task, text:newText} : task ))
  };
 

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div>
          <Task addTask={addTask} />
          <Tasklist
            Tasks={tasks}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      </div>
    </>
  );
};

export default Maincontainer;
