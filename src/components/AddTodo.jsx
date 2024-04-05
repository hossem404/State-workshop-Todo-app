import React from "react";

class AddTask extends React.Component {
  state = {
    input: "",
  };
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.input !== "") this.props.handleAdd(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <input type="submit" value="Add task" />
      </form>
    );
  }
}

export default AddTask;