function Greetings(props) {
  let greet = '';
  switch (props.lang) {
    case 'de':
      greet = 'Hallo';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
    case 'en':
      greet = 'Hello';
      break;
    case 'es':
      greet = 'Hola';
      break;
    default:
      greet = '';
  }

  return (
    <div className="box">
      {greet} {props.children}
    </div>
  );
}

export default Greetings;
