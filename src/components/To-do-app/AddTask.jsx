import React, { useState } from 'react'

const Task = ({addTask}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        addTask(inputValue);
        setInputValue('');
      }
    };
  return (
  <>
     <form onSubmit={handleSubmit}>
     <div className="flex mb-4" >
     <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter task"
        className="w-full rounded border-gray-300 p-2 mr-2"
      />
      <button type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >Add Task
      </button>
     </div>
      
    </form>
  </>
  )
}

export default Task
