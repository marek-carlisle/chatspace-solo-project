import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { triggerLogin } from '../../redux/actions/loginActions';

const propTypes = {
  dispatch: PropTypes.func,
  // triggerLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  dispatch: () => {},
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  user: state.user,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    };
    // this.triggerLogin = this.props.triggerLogin;
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }
  login(event) {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Enter your username and password!',
      });
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
      // this.props.history.push('/user');
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

export default connect(mapStateToProps)(LoginPage);
