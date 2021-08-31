function BoxColor(props) {
  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  return (
    <div
      className="box-color"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    >
      <span>
        rgb({props.r},{props.g},{props.b})
      </span>
      <span>
        #{componentToHex(props.r)}
        {componentToHex(props.g)}
        {componentToHex(props.b)}
      </span>
    </div>
  );
}

export default BoxColor;
