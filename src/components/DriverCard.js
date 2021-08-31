import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <div>
        <img src={props.img} alt={props.name} className="driver-card-img" />
      </div>
      <div>
        <b className="driver-name">{props.name}</b>
        <Rating>{props.rating}</Rating>
        <div>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
