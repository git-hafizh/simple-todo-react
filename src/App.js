import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      listTask: {
        id: 1, 
        msg: "",
        isCompleted: false
      },
    };

    this.inputTodo = this.inputTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

  }

  addTodo(e) {
    e.preventDefault();
    const newTask = this.state.listTask;

    // prevent user to add empty todo
    if(!newTask.msg || /^\s*$/.test(newTask.msg)){
      return alert("Todo cannot be empty");
    }

    if (newTask !== "") {
      const tasks = [...this.state.task, newTask];
      this.setState({
        task: tasks,
        listTask: {
          id: "",
          msg: "",
        },
      });
    }
    e.target.reset();
    console.log(this.state.listTask)
  }

  inputTodo(e) {
    this.setState({
      listTask: {
        id: Math.floor(Math.random() * 1000),
        msg: e.target.value,
      },
    });
  }

  deleteTodo(id) {
    const taskState = this.state.task;
    const taskFiltered = taskState.filter((item) => item.id !== id);
    this.setState({
      task: taskFiltered,
    });
  }

  render() {
    const { task } = this.state;

    return (
      <div className="bg">
        <h4>Simple To-Do List</h4>
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.inputTodo}
            className="input-todo"
            placeholder="Add todo..."
          />
          <button id="add-btn" type="submit">
            +
          </button>
        </form>
        {task.map((item) => {
          return (
            <div className="list-task" key={item.id}>
              <span id="todo-task" key={item.id} style={{ textDecoration: item.done ? "line-through" : "" }}>
                {item.msg}
              </span>
              <button id="del-btn" onClick={() => this.deleteTodo(item.id)}>X</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
