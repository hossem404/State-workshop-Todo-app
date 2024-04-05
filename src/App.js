import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        text: "Coding",
        completed: true,
      },
      {
        text: "Build to todo app",
        completed: true,
      },
      {
        text: "Reading",
        completed: false,
      },
    ],
  };
  handlechange = (text) => {
    const newtodos = this.state.todos.map((todo) =>
      todo.text === text ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: newtodos });
  };

  handleAdd = (text) => {
    const newTodo = {
      text: text,
      completed: false,
    };

    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos={this.state.todos} handlechange={this.handlechange} />
        <AddTask handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;