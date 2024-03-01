import React, { useRef, useState, useEffect } from "react";
import "../style/style.scss";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import Progress from "./Progress";
import SortToggle from "./SortToggle";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // 存儲待辦事項清單的陣列
  const [input, setInput] = useState(""); // 存儲輸入框的內容，用於添加新的待辦事項
  const [isAddingTodo, setIsAddingTodo] = useState(false); // 用於控制當添加新的待辦事項時是否滾動到底部
  const listRef = useRef(null); // 用於引用待辦事項清單的 <ul> 元素

  // 新增todo list
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // 如果輸入為空，則不新增
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput(""); // 清空输入框
    setIsAddingTodo(true); // 添加thing動作為true
  };

  // 當todos新增事項，自動滾動至底部
  useEffect(() => {
    if (listRef.current && isAddingTodo) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
      setIsAddingTodo(false);
    }
  }, [todos, isAddingTodo]);

  // 切換todo的完成狀態
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 刪除指定的todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 排序完成的todo到底部
  const sortTodoToBottom = () => {
    const switchElement = document.getElementById("switchID1");
    if (!switchElement.checked) return; // 若是關閉狀態，則不執行
    const uncompletedTodos = todos.filter((todo) => !todo.completed); // 未完成
    const completedTodos = todos.filter((todo) => todo.completed); // 已完成
    setTodos([...uncompletedTodos, ...completedTodos]); // 將未完成事項放在已完成前
  };

  // 待辦事項完成率
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const completionRate = totalTodos
    ? Math.round((completedTodos / totalTodos) * 100)
    : 0;

  return (
    <div className="container">
      <div className="body-container">
        <nav className="header">
          <h1>Todo List</h1>
          <i>Add things to do</i>
        </nav>
        <Progress completionRate={completionRate} />
        <ul className="todo-area" ref={listRef}>
          {todos.length === 0 ? (
            <li className="empty-todo"> Is there anything to do? </li>
          ) : (
            todos.map((todo) => (
              <TodoItem
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </ul>
        <SortToggle sortTodoToBottom={sortTodoToBottom} />
        <TodoInput
          input={input}
          setInput={setInput}
          handleAddTodo={handleAddTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
