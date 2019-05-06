import {
    getWeather
  } from '@/api/weather';
  
  const weather = {
    state: {
      weather: null
    },
    mutations: {
      WeatherLoad: (state, data) => {
        state.weather = data;
      }
    },
    actions: {
      async GetWeather({ commit }, data) {
        const response = await getWeather(data);
        commit('WeatherLoad', response.data);
        return response.data;
      }
    }
  };
  
  export default weather;
  