// Functional Component
/*function Card() {
  return (
    <div className="card">
      <h2>Card</h2>
    </div>
  );
}
export default Card;*/

// Class Component
import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      firstName: this.props.firstName,
      update: 0,
    };
  }


  componentDidMount() {
    console.log("Component Did Mount");
  }

  name() {
    this.setState({ name: prompt("Enter your name") });
  }
  handleNameChange = (e) => {
    console.log(e);
    this.setState({ firstName: e.target.value });
  };
  render() {
    return (
      <div className="card">
        <h2 onClick={() => this.name()}>{this.state.name}</h2>
        <h3>{this.state.update}</h3>
        <input
          type="text"
          value={this.state.firstName}
          onChange={this.handleNameChange}
        />
        {this.state.firstName}
      </div>
    );
  }
}
export default Card;
