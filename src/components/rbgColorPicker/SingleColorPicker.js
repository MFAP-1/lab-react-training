import React from 'react';
import './SingleColorPicker.css';

function SingleColorPicker(props) {
  const defineColorBg = () => {
    if (props.color === 'r') {
      return `rgb(${props.intensity}, 0, 0)`;
    } else if (props.color === 'g') {
      return `rgb(0,${props.intensity}, 0)`;
    } else if (props.color === 'b') {
      return `rgb(0,0,${props.intensity})`;
    }
  };

  return (
    <div className="single-color-picker">
      <div
        className="color-box"
        style={{ backgroundColor: `${defineColorBg()}` }}
      ></div>
      <label>{props.color.toUpperCase()}: </label>
      <input
        type="number"
        class="color-input"
        name={props.color}
        min="0"
        max="255"
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default SingleColorPicker;
