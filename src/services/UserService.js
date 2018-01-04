import CONSTANTS from '../constants/';

class UserService {
    userObject = null;

    getUser = () => {
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
                            userName: response.username
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

    logout = () => {
        const request = new Request(`${CONSTANTS.apiBaseUrl}/user/logout`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            credentials: 'include',
        });

        return new Promise((resolve, reject) => {
            fetch(request)
                .then((response) => {
                    console.log('logged out');
                    resolve();
                });
        });
    }
}

export default new UserService();
