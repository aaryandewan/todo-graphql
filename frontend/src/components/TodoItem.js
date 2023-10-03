import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <li>
      <strong>{todo.title}</strong>
      <p>{todo.description}</p>
      <div>
        <button>Edit</button> {/* We'll implement this later */}
        <button>Delete</button> {/* We'll implement this later */}
      </div>
    </li>
  );
};

export default TodoItem;
