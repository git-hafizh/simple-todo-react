import React from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (task) => {
    if (!task.msg || /^\s*$/.test(task.msg)) {
      return alert("Todo cannot be empty");
    }

    const newTodos = [...todos, task];
    setTodos(newTodos);

    console.log(todos);
  };

  const deleteTodo = (id) => {
    const newTodo = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodo)
}

const updateTodo = (id, newTodo) => {
  if (!newTodo.msg || /^\s*$/.test(newTodo.msg)) {
    return alert("Todo cannot be empty");
  }

  //
  setTodos(prev => prev.map(item => (item.id === id ? newTodo : item)))
}

const completeTodo = (id) => {
  const newTodo = todos.map(todo => {
    if(todo.id === id){
      todo.isComplete = !todo.isComplete
    }
    return todo;
  })
  setTodos(newTodo)
}

  return (
    <div className="bg">
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
