import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    side: 'front'
  }

  flipCard = () => {
    const side = this.state.side;
    let currentSide = '';
    side === 'front' ? currentSide = 'back' : currentSide = 'front';
    this.setState({ 
      side: currentSide 
    });
    console.log(this.state.side);
  };

  render() {
    return (
      <div className="App">
        <section className="container">
          <div 
            className="card"
            onClick={this.flipCard}
            >
            <div className={this.state.side}>
              {this.state.side} page
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
