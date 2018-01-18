import axios from 'axios';
import CONSTANTS from '../../constants';

export function callUser() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get(`${CONSTANTS.apiBaseUrl}/user`, config)
    .then(response => response.data)
    .catch((error) => { throw error; });
}

export function placeholder() {
  console.log('hi');
}
