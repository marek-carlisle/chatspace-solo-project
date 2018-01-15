import axios from 'axios';
import CONSTANTS from '../../constants';


export function callLogin(payload) {
  const body = ({
    username: payload.username,
    password: payload.password,
  });
  
  const config = {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  return axios.post(`${CONSTANTS.apiBaseUrl}/user/login`, body, config)
    .then(response => response.data)
    .catch((errResponse) => { throw errResponse; });
}

export function anotherThing() {
  console.log('placeholder');
}
