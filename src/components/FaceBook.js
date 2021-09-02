import profiles from './berlin.json';
import React from 'react';
import FaceBookBtn from './FaceBookBtn';

// --------------- COMPOMENTE DE CLASSE (testing)
// class FaceBook extends React.Component {
//   state = {
//     countryArr: [],
//     peopleArr: [],
//   };

//   // auxiliary function: to filter the countries
//   filteringCountry = (event) => {
//     // console.log(event);
//     // console.log('entrou no filtro');
//     // if (event.target.name === 'Brazil') {
//     //   console.log('entrou no brazil');
//     // }
//     console.log('antes', this.state.countryArr);
//     this.setState({
//       contryArr: this.state.countryArr.map((country) => {
//         // console.log(country);
//         if (country.props.name === event.target.name) {
//           // console.log('entrou no if da igualdade');
//           return (
//             <button
//               name={country}
//               onClick={this.filteringCountry}
//               className="highlighted-element"
//             >
//               {country}
//             </button>
//           );
//         } else {
//           return country;
//         }
//       }),
//     });
//     console.log('depois', this.state.countryArr);
//   };
//   //rendering the final result
//   render() {
//     // Iterating thru the countries (avoiding duplicity)
//     profiles.map((element) => {
//       if (!this.state.countryArr.includes(element.country)) {
//         this.state.countryArr.push(element.country);
//       }
//       return element;
//     });

//     // Profile of everybody
//     const newArr = profiles.map((profile) => {
//       return (
//         <div className="box">
//           <img
//             src={profile.img}
//             alt={profile.firstName}
//             className="padding-right-15px profile-pictures"
//           />
//           <div>
//             <p>
//               <b>First name: </b>
//               {profile.firstName}
//             </p>
//             <p>
//               <b>Last name: </b>
//               {profile.lastName}
//             </p>
//             <p>
//               <b>Country: </b>
//               {profile.country}
//             </p>
//             <p>
//               <b>Type: </b>
//               {profile.isStudent === true ? 'Student' : 'Teacher'}
//             </p>
//           </div>
//         </div>
//       );
//     });
//     // this.setState({ peopleArr: newArr });
//     return (
//       <div>
//         <FaceBookBtn list={this.state.countryArr} />
//         {newArr}
//       </div>
//     );
//   }
// }

// --------------- COMPOMENTE FUNCIONAL

function FaceBook() {
  // auxiliary function: to filter the countries
  const filteringCountry = (event) => {
    // console.log(event);
    // console.log('entrou no filtro');
    // if (event.target.name === 'Brazil') {
    //   console.log('entrou no brazil');
    // }
    console.log('antes', countryArr);
    countryArr = countryArr.map((country) => {
      // console.log(country);
      if (country.props.name === event.target.name) {
        // console.log('entrou no if da igualdade');
        return (
          <button
            name={country}
            onClick={filteringCountry}
            className="highlighted-element"
          >
            {country}
          </button>
        );
      } else {
        return country;
      }
    });
    console.log('deposit', countryArr);
  };

  // Iterating thru the countries (avoiding duplicity)
  let countryArr = [];
  profiles.map((element) => {
    if (!countryArr.includes(element.country)) {
      countryArr.push(element.country);
    }
    return element;
  });
  // now, adding the button
  countryArr = countryArr.map((country) => {
    return (
      <button name={country} onClick={filteringCountry}>
        {country}
      </button>
    );
  });

  // Profile of everybody
  const newArr = profiles.map((profile) => {
    return (
      <div className="box">
        <img
          src={profile.img}
          alt={profile.firstName}
          className="padding-right-15px profile-pictures"
        />
        <div>
          <p>
            <b>First name: </b>
            {profile.firstName}
          </p>
          <p>
            <b>Last name: </b>
            {profile.lastName}
          </p>
          <p>
            <b>Country: </b>
            {profile.country}
          </p>
          <p>
            <b>Type: </b>
            {profile.isStudent === true ? 'Student' : 'Teacher'}
          </p>
        </div>
      </div>
    );
  });

  //rendering the final result
  return (
    <div>
      {countryArr}
      {newArr}
    </div>
  );
}

export default FaceBook;
