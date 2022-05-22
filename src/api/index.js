import axios from 'axios';

//A URL Base deve ser adicionada em um arquivo .env
const BASE_URL = process.env.REACT_APP_URL_BASE;

const axiosClient = axios.create();

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export function postRequest(URL, payload) {
  return axiosClient.post(URL, payload).then((response) => response);
}

export const url = {
  base: BASE_URL,
};

export const endpoint = {
  register: '/user/cadaster',
  login: '/login',
};
