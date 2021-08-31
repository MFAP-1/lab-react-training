function Rating(props) {
  // let numberofBlackStars = Math.round(props.children);
  let starArray = [
    <i className="far fa-star"></i>,
    <i className="far fa-star"></i>,
    <i className="far fa-star"></i>,
    <i className="far fa-star"></i>,
    <i className="far fa-star"></i>,
  ];
  return (
    <div>
      {starArray.map((element, index) => {
        if (index + 1 <= Math.round(props.children)) {
          return <i className="fas fa-star fa-2x"></i>;
        }
        return <i className="far fa-star fa-2x"></i>;
      })}
    </div>
  );
}

export default Rating;
