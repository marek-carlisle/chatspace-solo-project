import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from '../../components/Nav';
import { fetchUser } from '../../redux/actions/userActions';

class InfoPage extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className="container">
          <p>
            Info Page
          </p>
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

InfoPage.propTypes = {
  fetchUser: PropTypes.func,
  user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
  history: PropTypes.shape({ push: PropTypes.func }),
};

InfoPage.defaultProps = {
  fetchUser: () => {},
  user: { userName: null, isLoading: true },
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  fetchUser,
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
