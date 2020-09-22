import React from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (task) => {
    const newTodos = [...todos, task];
    setTodos(newTodos);

    console.log(todos);
  };

  const deleteTodo = (id) => {
    const newTodo = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodo)
}

  return (
    <div className="bg">
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;
