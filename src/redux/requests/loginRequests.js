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
    .catch((error) => {
      throw error.response || error;
    });
}

export function callLogout() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get(`${CONSTANTS.apiBaseUrl}/user/logout`, config)
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error;
    });
}
