import React, { Component } from 'react';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipCount: 0,
      count1: 0,
      count2: 0,
      emoji: ''
    };
    this.flipCoin = this.flipCoin.bind(this);
  }
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Let's flip a coin!</h1>
        <div className="CoinFlipper-emoji">{this.state.emoji}</div>
        <button onClick={this.flipCoin}>Flip Meee</button>
        <p>{`Out of ${this.state.flipCount} flips, there have been ${this.state.count1} 🎃 and ${this.state.count2} 🍑`}</p>
      </div>
    );
  }

  flipCoin() {
    let rand = Math.floor(Math.random() * 2);
      this.setState((state) => {
        return { 
          emoji: (rand === 0 ? '🎃' : '🍑'), 
          flipCount: state.flipCount + 1, 
          count1: state.count1 + (rand === 0 ? 1 : 0),
          count2: state.count2 + (rand === 1 ? 1 : 0)
        };
      });
  }
}

export default CoinFlipper;
