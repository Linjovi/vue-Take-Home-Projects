import axios from 'axios';
import qs from 'qs';
// import store from '@/store';
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000
});

instance.interceptors.request.use(
  config => {
    // do something before request is sent
    if(config.method == 'post'){
      config.data = qs.stringify(config.data);
    }
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
