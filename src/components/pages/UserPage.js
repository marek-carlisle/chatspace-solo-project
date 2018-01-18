import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from '../../components/Nav';

import UserService from '../../services/UserService';
import {
  fetchUser,
  logoutUser,
} from '../../redux/actions/userActions';

const propTypes = {
  fetchUser: PropTypes.func,
  logoutUser: PropTypes.func,
  user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  fetchUser: () => {},
  logoutUser: () => {},
  user: { userName: null, isLoading: true },
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  logoutUser: () => { dispatch(logoutUser()); },
});

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout() {
    UserService.logout().then(() => {
      this.props.logoutUser();
      this.props.history.push('home');
    });
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

UserPage.propTypes = propTypes;
UserPage.defaultProps = defaultProps;

// this allows us to use <App /> in index.js
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

