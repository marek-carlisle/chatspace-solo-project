import axios from 'axios';
import CONSTANTS from '../../constants';


export function callLogin(payload) {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: payload.username,
      password: payload.password,
    }),
    credentials: 'include',
  };

  return axios.post(`${CONSTANTS.apiBaseUrl}/user/login`, config)
    .then(response => response.data)
    .catch((errResponse) => { throw errResponse; });
}

export function anotherThing() {
  console.log('placeholder');
}
