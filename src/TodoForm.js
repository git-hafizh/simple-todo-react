import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({addTodo}) {
  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addTodo({
      id: uuidv4(),
      msg: value
    })

    setValue("")
  }


  return (
    <div>
      <h4>Simple To-Do List</h4>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add todo..."
          className="input-todo"
          name="task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button id="add-btn" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
