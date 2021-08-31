import visaImg from './img/visa.png';
import masterImg from './img/master-card.svg';

function CreditCard(props) {
  // formating the month to '0X' when smaller than october
  let formatedMonth = props.expirationMonth;
  if (formatedMonth < 10) {
    formatedMonth = '0' + props.expirationMonth;
  }
  let cardType;

  // Evaluating the type of the card
  if (props.type === 'Visa') {
    cardType = visaImg;
  } else if (props.type === 'Master Card') {
    cardType = masterImg;
  }

  // hide numbers

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div>
        <img className="cardImg" src={cardType} alt={props.type} />
      </div>
      <div className="biggerText">
        oooo oooo oooo
        {props.number.substr(12)}
      </div>
      <div className="smallerText">
        <span>
          Expires {formatedMonth}/{props.expirationYear.toString().substr(2)}
        </span>
        {'         '}
        <span> {props.bank}</span>
      </div>
      <div className="smallerText">{props.owner}</div>
    </div>
  );
}
export default CreditCard;
