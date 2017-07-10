import React, { Component } from 'react';
import './App.css';

const store = [
  {
      front:'First Law of Motion',
      back: 'An object at rest will remain at rest unless acted on by an unbalanced force. An object in motion continues in motion with the same speed and in the same direction unless acted upon by an unbalanced force. '
  },
  {
      front:'Second Law of Motion',
      back: 'Acceleration is produced when a force acts on a mass. The greater the mass (of the object being accelerated) the greater the amount of force needed (to accelerate the object).'
  },
  {
      front:'Third Law of Motion',
      back: 'For every action there is an equal and opposite re-action.'
  }
];

class App extends Component {

  state = {
    side: 'front',
    cont: 'container',
    cards: store
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
        <section className={this.state.cont}>
          <div 
            className="card"
            onClick={this.flipCard}
            >
            <div className={this.state.side}>
              <span>{this.state.cards[0][this.state.side]}</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
