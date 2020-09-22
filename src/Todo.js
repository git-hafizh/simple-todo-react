import React from "react";
import "./Todo.css";
import { BsTrashFill } from 'react-icons/bs';

const Todo = ({ todos, id, deleteTodo }) => {
  const [edit, setEdit] = React.useState({
    id: null,
    msg: "",
  });


  return todos.map((todo, index) => (
        <div id="todo-task" key={index}>
          <div key={todo.id}>
            {todo.msg}
            <BsTrashFill id="del-btn" onClick={() => deleteTodo(todo.id)}/>
          </div>
        </div>
      ))
};

export default Todo;
