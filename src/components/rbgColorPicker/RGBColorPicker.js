import React from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends React.Component {
  state = {
    r: 0,
    g: 0,
    b: 0,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.valueAsNumber });
  };

  render() {
    const rgbCOmbination = `rgb(${this.state.r},${this.state.g},${this.state.b})`;
    return (
      <>
        <SingleColorPicker
          color="r"
          intensity={this.state.r}
          onChange={this.handleChange}
        />
        <SingleColorPicker
          color="g"
          intensity={this.state.g}
          onChange={this.handleChange}
        />
        <SingleColorPicker
          color="b"
          intensity={this.state.b}
          onChange={this.handleChange}
        />
        {/* Dynamic general color result */}
        <div className="single-color-picker">
          <div
            className="color-box"
            style={{ backgroundColor: `${rgbCOmbination}` }}
          ></div>
          <label>{rgbCOmbination} </label>
        </div>
      </>
    );
  }
}

export default RGBColorPicker;
