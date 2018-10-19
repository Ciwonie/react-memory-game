import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import pokemon from "./pokemon.json";

class App extends Component {

  state = {
    pokemon,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      })
    }
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

export default App;
