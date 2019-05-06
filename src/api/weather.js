import request from '@/utils/request';
import querystring from 'querystring';


export function getWeather(data) {
  const _params = querystring.stringify(data);
  let url = 'https://fcc-weather-api.glitch.me/api/current?' + _params;
  return request({
    url: url,
    method: 'get'
  });
}

