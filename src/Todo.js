import React, {Component} from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      item: this.props.item,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("TODO Component Did Update");
  //   console.log(prevProps.item);
  //   console.log(this.props.item);
  //   console.log(prevState);
  //   console.log(this.state);
  // }

  componentWillUnmount() {
    console.log("In Component Will Unmount");
  }
  handleDelete() {
    this.props.removeTodo(this.props.id);
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.item);
    this.setState({isEditing: false});
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleCompletion(evt) {
    // evt.preventDefault();
    this.props.toggleCompletion(this.props.id);
  }

  toggleForm() {
    this.setState({isEditing: !this.state.isEditing});
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <label></label>
            <input
              type="text"
              value={this.state.item}
              name="item"
              id="item"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleCompletion}
          >
            {this.props.item}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-edit" />
            </button>
            <button onClick={this.handleDelete}>
              <i className="fa-solid fa-trash" />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}
export default Todo;
