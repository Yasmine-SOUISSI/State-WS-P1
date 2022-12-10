import React from "react";
import Button from "../Shared/Button";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
      task: this.props.task,
    };
  }

  render() {
    return (
      <div className="todo">
        <h2 className={this.props.status}>{this.props.task}</h2>
        <Button
          textButton="Delete"
          onClick={() => this.props.deleteTodo(this.props.id)}
        />
        <Button
          textButton={this.props.status}
          onClick={() => this.props.handleDone(this.props.id)}
        />
      </div>
    );
  }
}

export default Todo;
