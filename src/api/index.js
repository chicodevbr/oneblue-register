import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export function postRequest(URL, payload) {
  return axiosClient.post(URL, payload).then((response) => response);
}

export const url = {
  base: 'http://localhost:4000',
};

export const endpoint = {
  register: '/user/cadaster',
  login: '/login',
};
