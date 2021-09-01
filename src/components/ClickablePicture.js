import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    imgClicked: this.props.img,
  };

  handleClick = () => {
    if (this.state.imgClicked === this.props.img) {
      this.setState({ imgClicked: this.props.imgClicked });
    } else {
      this.setState({ imgClicked: this.props.img });
    }
  };

  render() {
    return (
      <img
        className="clickable-picture-img"
        src={this.state.imgClicked}
        alt={this.state.imgClicked}
        onClick={this.handleClick}
      />
    );
  }
}
export default ClickablePicture;
