import axios from 'axios';
// import store from '@/store';
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000
});

instance.interceptors.request.use(
  config => {
    // do something before request is sent
    config.headers.token = 'test';
    return config;
  },
  error => {
    // do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
