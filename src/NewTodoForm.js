import React, {Component} from "react";
import {v4 as uuidv4} from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {item: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = {...this.state, id: uuidv4(), completed: false};
    this.props.addTodo(newTodo);
    this.setState({item: ""});
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="todo">New Todo </label>
        <input
          type="text"
          name="item"
          id="todo"
          placeholder="New Todo"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button>ADD TODO</button>
      </form>
    );
  }
}

export default NewTodoForm;
