import React, { Component } from 'react';
import './App.css';
import { store } from './data.js';

class App extends Component {

  state = {
    side: 'front',
    cont: 'container',
    cards: store()
  }

  flipCard = () => {
    const side = this.state.side;
    let currentSide = 'back';
    const cards = this.state.cards;

    if (side === 'back') {
      currentSide = 'front';
      const first = cards.shift();
      cards.push(first);
    } 

    this.setState({ 
        side: currentSide,
        cont: 'container',
        cards: cards
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Flash Cards</h1>
        <section className={this.state.cont}>
          <div 
            className="card"
            onClick={this.flipCard}
            >
            <div className={this.state.side}>
              <span 
                className="id">
                {this.state.cards[0].id}
              </span>
              <span 
                className="question">
                {this.state.cards[0][this.state.side]}
              </span>              
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
