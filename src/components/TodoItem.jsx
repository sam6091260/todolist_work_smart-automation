import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="things" key={todo.id}>
      <div
        className="todo-thing"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        <span className="material-icons">clear</span>
      </button>
    </li>
  );
};

export default TodoItem;
