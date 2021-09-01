import React from 'react';
class Dice extends React.Component {
  state = {
    diceArray: [
      './img/dice-empty.png',
      './img/dice1.png',
      './img/dice2.png',
      './img/dice3.png',
      './img/dice4.png',
      './img/dice5.png',
      './img/dice6.png',
    ],
    position: 3,
  };
  // setTimeout(function(){ alert("Hello"); }, 3000);

  handleClick = () => {
    this.setState({ position: 0 });
    setTimeout(() => {
      this.setState({
        position:
          Math.floor(Math.random() * (this.state.diceArray.length - 1)) + 1,
      });
    }, 1000);
  };

  render() {
    return (
      <img
        className="dice-img"
        src={this.state.diceArray[this.state.position]}
        onClick={this.handleClick}
        alt="dado"
      />
    );
  }
}

export default Dice;
