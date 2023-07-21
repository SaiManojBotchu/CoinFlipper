// wrote for practice
import React, { Component } from 'react';

class CoinFlipper1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      totalCount: 0,
      msg: ''
    };
    this.flipper = this.flipper.bind(this);
  }

  flipper() {
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
      this.setState((st) => ({
        count1: st.count1 + 1,
        msg: '🎃',
        totalCount: st.totalCount + 1
      }));
    } else if (rand === 1) {
      this.setState((st) => ({
        count2: st.count2 + 1,
        msg: '🍑',
        totalCount: st.totalCount + 1
      }));
    }
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <h1>{this.state.msg}</h1>
        <button onClick={this.flipper}>Flip me!</button>
        <p>
          Out of {this.state.totalCount} flips, there have been {this.state.count1} 🎃 and {this.state.count2} 🍑
        </p>
      </div>
    );
  }
}

export default CoinFlipper1;
