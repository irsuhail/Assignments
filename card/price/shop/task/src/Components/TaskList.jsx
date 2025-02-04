import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id} 
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
