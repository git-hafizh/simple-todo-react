import React from "react";
import "./App.css";
import ListTasks from "./ListTasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      listTask: {
        text: "",
        key: ""
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleInput(e) {
    this.setState({
      listTask: {
        text: e.target.value,
        key: Date.now()
      },
    });
  }

  addTodo(e) {
    e.preventDefault();
    const task = this.state.listTask;

    //if task not in the list 
    if(task.text !== ""){
      //then add to the list
      const tasks = [...this.state.task, task];
      this.setState({
        task: tasks,
        listTask: {
          text: "",
          key: ""
        }
      })
    }else {
      alert("task has already been added")
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <p id="title">Simple To-Do List</p>
            <form onSubmit={this.addTodo}>
              <div className="adding-todo">
                <input
                  onChange={this.handleInput}
                  id="input-add"
                  placeholder="Add todo..."
                ></input>
              </div>
              <button id="add-todo" type="submit">+</button>
            </form>
            <ListTasks task={this.state.task}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
