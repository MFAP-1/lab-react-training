import React from 'react';

class NumbersTable extends React.Component {
  state = {
    numberOfSquare: this.props.limit,
  };

  render() {
    let newArr = new Array(this.state.numberOfSquare)
      .fill(1)
      .map((element, index) => {
        return (
          <li
            key={index + 1}
            className={(index + 1) % 2 === 0 ? 'even-number' : 'odd-number'}
          >
            {index + 1}
          </li>
        );
      });
    return <ul id="numbers-table">{newArr}</ul>;
  }
}

export default NumbersTable;

// --------------------ANOTHER SOLUTION----------------------------------------------

// import React from 'react';

// class NumbersTable extends React.Component {
//   state = {
//     limite: this.props.limit,
//   };

//   render() {
//     const populateArray = () => {
//       for (let i = 1; i <= this.state.limite; i++) {
//         newArr.push(i);
//       }
//     };
//     let newArr = [];
//     populateArray();

//     return (
//       <ul id="numbers-table">
//         {newArr.map((element) => {
//           // even
//           if (element % 2 === 0) {
//             return (
//               <li className="even-number" key={element}>
//                 {element}
//               </li>
//             );
//             // odd
//           } else {
//             return (
//               <li className="odd-number" key={element}>
//                 {element}
//               </li>
//             );
//           }
//         })}
//       </ul>
//     );
//   }
// }

// export default NumbersTable;
