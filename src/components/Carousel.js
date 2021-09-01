import React from 'react';

class Carousel extends React.Component {
  state = {
    position: 0,
  };

  handleClick = (event) => {
    if (event.target.name === 'decrease' && this.state.position !== 0) {
      this.setState({ position: this.state.position - 1 });
    } else if (event.target.name === 'decrease' && this.state.position === 0) {
      this.setState({ position: 3 });
    } else if (event.target.name === 'increase' && this.state.position !== 3) {
      this.setState({ position: this.state.position + 1 });
    } else if (event.target.name === 'increase' && this.state.position === 3) {
      this.setState({ position: 0 });
    }
  };

  render() {
    return (
      <div>
        <button name="decrease" onClick={this.handleClick}>
          Left
        </button>
        <img src={this.props.imgs[this.state.position]} alt="" />
        <button name="increase" onClick={this.handleClick}>
          Right
        </button>
      </div>
    );
  }
}

export default Carousel;
