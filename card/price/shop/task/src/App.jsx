import React, { useState } from "react";
import TaskList from "./components/TaskList";
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);


  function addTask() {
    if (taskInput.trim() !== "") { 
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    } else {
      alert("Please enter a valid task."); 
    }
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
