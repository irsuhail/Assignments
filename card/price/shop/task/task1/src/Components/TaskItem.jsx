import React from "react";

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none", 
        backgroundColor: task.priority === "High" ? "#ffcccc" : "white", 
        padding: "10px",
        margin: "5px 0",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    >
      <span
        onClick={() => toggleComplete(task.id)}
        style={{ cursor: "pointer", fontWeight: task.completed ? "normal" : "bold" }}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
