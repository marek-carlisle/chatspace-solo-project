import PropTypes from 'prop-types';
import CONSTANTS from '../constants/';

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
            console.log('User Data: ', this.userObject.userName);
            resolve(this.userObject);
          } else {
            console.log('getUser failed');
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
          console.log('logged out');
          this.userObject = null;
          resolve();
        });
    });
  }
}

UserService.propTypes = {
  userObject: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
};

UserService.defaultProps = {
  userObject: null,
};

export default new UserService();
