import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CONSTANTS from '../../constants/';

const propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  history: { push: () => {} },
};

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    };

    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  login(event) {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Enter your username and password!',
      });
    } else {
      const request = new Request(`${CONSTANTS.apiBaseUrl}/user/login`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
        credentials: 'include',
      });

      // making the request to the server to post the country
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            this.props.history.push('/user');
          } else {
            this.setState({
              message: 'Ooops! The username and password didn\'t match. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
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
        <h1 className="lead">Login</h1>
        { this.renderAlert() }
        <form onSubmit={this.login}>
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
              value="Log In"
            />
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default LoginPage;
