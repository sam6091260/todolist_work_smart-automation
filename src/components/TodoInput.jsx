import React from "react";

const TodoInput = ({ input, setInput, handleAddTodo }) => {
  return (
    <div className="todo-input-area">
      <p>Add to list</p>
      <form className="todo-input" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="submit" type="submit">
          <span className="material-icons">add</span>
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
