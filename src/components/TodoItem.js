import React from "react";

const TodoItem = React.memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <div
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </div>
      <button onClick={() => onDelete(todo.id)}>-</button>
    </li>
  );
});

export default TodoItem;
