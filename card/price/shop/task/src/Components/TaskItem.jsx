import React from "react";

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none", // Strike-through for completed tasks
      }}
    >
      <span
        onClick={() => toggleComplete(task.id)}
        style={{ cursor: "pointer", marginRight: "10px" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
