import React from 'react';

class LikeButton extends React.Component {
  state = {
    like: 0,
    color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };
  handleClick = (event) => {
    this.setState({ like: this.state.like + 1 });
  };
  render() {
    return (
      <button
        className="like-button"
        onClick={this.handleClick}
        style={{ backgroundColor: `${this.state.color[this.state.like % 6]}` }}
      >
        {this.state.like} Likes
      </button>
    );
  }
}

export default LikeButton;
