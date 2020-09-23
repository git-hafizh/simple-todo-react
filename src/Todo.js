import React from "react";
import "./Todo.css";
import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import TodoForm from "./TodoForm";

const Todo = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
  const [edit, setEdit] = React.useState({
    id: null,
    msg: "",
  });
  
  const submitUpdate = (msg) => {
    updateTodo(edit.id, msg)
    setEdit({
      id: null,
      msg: ""
    })
  }

  if(edit.id){
    return <TodoForm edit={edit} addTodo={submitUpdate}/>
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-task from-bottom complete" : "todo-task from-bottom"} key={index}>
      <div className="todo-item" onClick={() => completeTodo(todo.id)} key={todo.id}>
        {todo.msg}
      </div>
      <div className="btn">
        <BsTrashFill id="del-btn" onClick={() => deleteTodo(todo.id)} />
        <FaEdit id="edit-btn" onClick={() => setEdit({ id: todo.id, msg: todo.msg})} />
      </div>
    </div>
  ));
};

export default Todo;
