import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CONSTANTS from '../../constants/';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(event) {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      console.log('sending to server...', this.state);
      const request = new Request(`${CONSTANTS.apiBaseUrl}/register`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });

      // making the request to the server to post the country
      fetch(request)
        .then((response) => {
          if (response.status === 201) {
            console.log('success: ', response);
            this.props.history.push('/home');
          } else {
            console.log('failure error: ', response);
            this.setState({
              message: 'Please try again.',
            });
          }
        })
        .catch((error) => {
          console.log('failure error: ', error);
          this.setState({
            message: 'Please try again.',
          });
        });
    }
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="lead alert alert-danger"
          role="alert"
        >
          { this.state.message }
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div className="container">
        <h1 className="lead">Register User</h1>
        { this.renderAlert() }
        <form onSubmit={this.registerUser}>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <input
              className="btn btn-default"
              type="submit"
              name="submit"
              value="Register"
            />
            <Link to="/home">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

