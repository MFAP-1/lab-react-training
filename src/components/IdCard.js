function IdCard(props) {
  return (
    <div className="box">
      <img src={props.picture} alt={props.firstName} />
      <div>
        <p>
          <b>First name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Last name: </b>
          {props.lastName}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Height: </b>
          {parseInt(props.height / 100)}.{props.height - 100}m
        </p>
        <p>
          <b>Birth: </b>
          {props.birth.toString().substr(0, 15)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
