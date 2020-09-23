import React from "react";
import "./TodoForm.css";
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({addTodo, edit}) {
  const [value, setValue] = React.useState(edit ? edit.msg : "");

  function handleSubmit(e) {
    e.preventDefault();

    addTodo({
      id: uuidv4(),
      msg: value,
    })

    setValue("")
  }


  return (
    <div>
      {/* <h4>Simple To-Do List</h4> */}
      <form onSubmit={handleSubmit}>
        {edit ? (
        <div>
        <input
          placeholder="Add todo..."
          className="input-todo"
          name="task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button id="update-btn" onClick={handleSubmit} type="submit">
          Update
        </button>
        </div>
        ) : (
          <div>
          <input
            placeholder="Add todo..."
            className="input-todo"
            name="task"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button id="add-btn" onClick={handleSubmit} type="submit">
            +
          </button>
          </div>
        )
      }
      </form>
    </div>
  );
}
