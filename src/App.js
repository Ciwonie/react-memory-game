// Importing Dependencies
import React, { Component, Fragment } from "react";
import "./App.css";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import pokemon from "./pokemon.json";
// import FooterPage from "./components/Footer";

// Main Class Component for the Application
class App extends Component {
  
  // Setting Initial States - pokemon.json and scores need to update over time 
  state = {
    pokemon,
    score: 0,
    highscore: 0
  };

  // This component resets scores, sets highscores, and resets the pokemon count
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.pokemon.forEach(pokemon => {
      pokemon.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  // This component keeps track of which pokemon were clicked, then randomizes order
  clickCount = id => {
    this.state.pokemon.find((o, i) => {
      if (o.id === id) {
        if (pokemon[i].count === 0) {
          pokemon[i].count = pokemon[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.pokemon.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  // render method
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Header score={this.state.score} highscore={this.state.highscore}>
            Pokemon Memory Game
          </Header>
          {this.state.pokemon.map(pokemon => (
            <Card
              clickCount={this.clickCount}
              id={pokemon.id}
              key={pokemon.id}
              image={pokemon.image}
            />
          ))}
        </Wrapper>
        {/* <FooterPage /> */}
      </Fragment>
    );
  }
}

export default App;
