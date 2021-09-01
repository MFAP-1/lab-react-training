function Rating(props) {
  // let numberofBlackStars = Math.round(props.children);
  let starArray = [1, 2, 3, 4, 5];
  return (
    <div>
      {starArray.map((element, index) => {
        if (index + 1 <= Math.round(props.children)) {
          return <i key={index} className="fas fa-star fa-2x"></i>;
        }
        return <i key={index} className="far fa-star fa-2x"></i>;
      })}
    </div>
  );
}

export default Rating;
