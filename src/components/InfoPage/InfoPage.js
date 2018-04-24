import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';

const propTypes = {
  fetchUser: PropTypes.func,
  user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
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
        <div>
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

InfoPage.propTypes = propTypes;
InfoPage.defaultProps = defaultProps;

// this allows us to use <App /> in index.js
export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
