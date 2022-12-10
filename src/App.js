import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList";

class App extends React.Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
        {this.state.show && <TodoList />}
      </div>
    );
  }
}

export default App;
