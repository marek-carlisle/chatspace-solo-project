import PropTypes from 'prop-types';
import CONSTANTS from '../constants/';

const propTypes = {
  userObject: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
};

const defaultProps = {
  userObject: null,
};

class UserService {
  getUser() {
    const request = new Request(`${CONSTANTS.apiBaseUrl}/user`, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'include',
    });

    return new Promise((resolve, reject) => {
      fetch(request)
        .then(response => response.json())
        .then((response) => {
          if (response.username) {
            // user has a curret session on the server
            this.userObject = {
              userName: response.username,
            };
            resolve(this.userObject);
          } else {
            this.userObject = null;
            reject();
          }
        });
    });
  }

  logout() {
    const request = new Request(`${CONSTANTS.apiBaseUrl}/user/logout`, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'include',
    });

    return new Promise((resolve) => {
      fetch(request)
        .then(() => {
          this.userObject = null;
          resolve();
        });
    });
  }
}

UserService.propTypes = propTypes; 
UserService.defaultProps = defaultProps;

export default new UserService();
