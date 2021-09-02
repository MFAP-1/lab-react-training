function FaceBookBtn(props) {
  let btnList = props.list.map((country) => {
    return (
      <button
        name={country}
        // onClick={filteringCountry}
        // className="highlighted-element"
      >
        {country}
      </button>
    );
  });

  return <div>{btnList}</div>;
}
export default FaceBookBtn;
