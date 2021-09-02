import React, { Component } from 'react';

class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    nationality: 'en',
    submited: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submited: !this.state.submited });
  };

  renderGreeting = () => {
    if (this.state.submited === true) {
      if (this.state.nationality === 'en') {
        return <p>Hello.</p>;
      } else if (this.state.nationality === 'de') {
        return <p>Hallo.</p>;
      } else if (this.state.nationality === 'fr') {
        return <p>Bonjour</p>;
      }
    }
  };

  renderSubmitedEmail = () => {
    if (this.state.submited === true) {
      return (
        <p>
          Your email adress is: {this.state.email}. Your password has{' '}
          {this.state.password.length} chars in total.
        </p>
      );
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={this.handleChange}
            />
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <label htmlFor="optionDropDownMenu" className="form-label">
            Select your nationality:
          </label>
          <select
            className="form-select"
            id="optionDropDownMenu"
            onChange={this.handleChange}
            name="nationality"
          >
            <option selected value="en">
              England
            </option>
            <option value="de">German</option>
            <option value="fr">France</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {this.renderGreeting()}
        {this.renderSubmitedEmail()}
      </div>
    );
  }
}
export default SignupPage;
