import axios from 'axios';
import queryString from 'query-string';
import { getToken } from './Cookie';
console.log(getToken("Access_Token"))
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params =>
    queryString.stringify(params, { skipNull: true, skipEmptyString: true }),
});

// Interceptors
axiosClient.interceptors.request.use(function (config) {
  config.headers = {
    'Content-Type': 'application/json',
    Authorization: getToken('Access_Token')
      ? `Bearer ${getToken('Access_Token')}`
      : undefined,
  };
  return config;
});

axiosClient.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return response;
    }
    return Promise.reject(response);
  },
  function (error) {
    // if (error.response.status === 401 && checked) {
    //   refreshToken(refresh_token);
    // }
    return Promise.reject(error);
  },
);

export default axiosClient;
