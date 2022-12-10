import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    todos: [
      { id: 1, task: "Learn React", status: "Undone", },
      { id: 2, task: "Learn Redux", status: "Undone" },
      { id: 3, task: "Learn Node", status: "Undone" },
    ],
  };

  handleDone = (id) => {
    const todos = this.state.todos.map((todo) =>
      // if todo.id equals id, then return a new object with the same properties as todo, but with the status property changed to the opposite of what it was before
      todo.id === id
        ? { ...todo, status: todo.status === "Undone" ? "Done" : "Undone" }
        : todo
    );
    this.setState({ todos });
  };

    deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
    };


  render() {
    return (
      <div className="todo-list">
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            id={todo.id}
            status={todo.status}
            handleDone={this.handleDone}
            deleteTodo={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
