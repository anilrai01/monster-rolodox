import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    monsters: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </React.Fragment>
    );
  }
}

export default App;