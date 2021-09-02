import profiles from '../data/berlin.json';
import React from 'react';

// Instatiating a new array for storing all exclusive countries (in alphab order)
const countries = [
  ...new Set(
    profiles
      .map((profile) => profile.country)
      .sort((a, b) => a.localeCompare(b))
  ),
];

class FaceBook extends React.Component {
  state = {
    clickedCountry: '',
  };

  handleClickCountry = (event) => {
    this.setState({ clickedCountry: event.target.innerText });
  };

  renderBtns = () => {
    return (
      <div>
        {countries.map((country) => {
          return (
            <button
              key={country}
              onClick={(event) => this.handleClickCountry(event)}
              style={{
                backgroundColor:
                  this.state.clickedCountry === country ? '#a3d2e2' : '',
              }}
            >
              {country}
            </button>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderBtns()}
        {profiles.map((profileObj) => {
          return (
            <div
              className="box"
              key={profileObj.firstName}
              style={{
                backgroundColor:
                  this.state.clickedCountry === profileObj.country
                    ? '#a3d2e2'
                    : '',
              }}
            >
              <img
                src={profileObj.img}
                alt={profileObj.firstName}
                className="profile-pictures padding-right-15px"
              />
              <div>
                <p>
                  <strong>First name: </strong>
                  {profileObj.firstName}
                </p>
                <p>
                  <strong>Last name: </strong>
                  {profileObj.lastName}
                </p>
                <p>
                  <strong>Country: </strong>
                  {profileObj.country}
                </p>
                <p>
                  <strong>Type: </strong>
                  {profileObj.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FaceBook;
