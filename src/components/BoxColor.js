function BoxColor(props) {
  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  return (
    <div
      className="box"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        flexDirection: 'column',
        textAlign: 'center',
        padding: 'none',
      }}
      // style={{ backgroundColor: `rgb(255,0,0)` }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>
        #{componentToHex(props.r)}
        {componentToHex(props.g)}
        {componentToHex(props.b)}
      </p>
    </div>
  );
}

export default BoxColor;
