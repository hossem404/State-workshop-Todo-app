import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handlechange(this.props.todo.text)}
        />
        <label>{this.props.todo.text}</label>
      </>
    );
  }
}

export default Todo;