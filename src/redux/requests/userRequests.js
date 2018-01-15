import axios from 'axios';
import CONSTANTS from '../../constants';

export default function callUser() {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };

  return axios.get(`${CONSTANTS.apiBaseUrl}/user`, config)
    .then(response => response.data)
    .catch((errResponse) => { throw errResponse; });
}
