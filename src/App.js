import React, { Component } from "react";
// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
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
        <h1>Monster Rolodox</h1>
        <CardList monsters={this.state.monsters} />
      </React.Fragment>
    );
  }
}

export default App;
