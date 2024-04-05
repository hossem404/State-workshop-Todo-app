import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <div key={index}>
            <Todo todo={todo} handlechange={this.props.handlechange} />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;