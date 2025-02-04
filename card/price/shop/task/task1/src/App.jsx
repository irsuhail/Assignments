import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('Low');
  const [filter, setFilter] = useState({ status: 'All', priority: 'All' });

 
  const addTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = {
        id: Date.now(),
        title: taskInput,
        priority: priority,
        completed: false
      };
      setTasks((prevTasks) => {
        return [...prevTasks, newTask].sort((a, b) => {
          const priorityOrder = ['High', 'Medium', 'Low'];
          return priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority);
        });
      });
      setTaskInput('');
      setPriority('Low');
    } else {
      alert("Please enter a valid task.");
    }
  };

  
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filter.status === 'All' || (filter.status === 'Completed' ? task.completed : !task.completed);
    const matchesPriority = filter.priority === 'All' || task.priority === filter.priority;
    return matchesStatus && matchesPriority;
  });

  return (
    <div className="App">
      <h1>Advanced Task Manager</h1>
      
      {}
      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={addTask}>Add Task</button>

      {}
      <div className="filters">
        <label>Status:</label>
        <select onChange={(e) => setFilter({ ...filter, status: e.target.value })} value={filter.status}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <label>Priority:</label>
        <select onChange={(e) => setFilter({ ...filter, priority: e.target.value })} value={filter.priority}>
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {}
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
