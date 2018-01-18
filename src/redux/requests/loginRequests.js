import axios from 'axios';
import CONSTANTS from '../../constants';


export function callLogin(payload) {
  const body = ({
    username: payload.username,
    password: payload.password,
  });

  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.post(`${CONSTANTS.apiBaseUrl}/user/login`, body, config)
    .then(response => response.data)
    .catch((e) => {
      throw e.response || e;
    });
}

export function callLogout() {
  axios.get(`${CONSTANTS.apiBaseUrl}/user/logout`)
    .then(response => response.data)
    .catch((e) => {
      throw e.response || e;
    });
}
