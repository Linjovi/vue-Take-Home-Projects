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
        // await getWeather(data,(res)=>{
        //   commit('WeatherLoad', res);
        // });
        const response = await getWeather(data);
        commit('WeatherLoad', response.data);
        return response.data;
      }
    }
  };
  
  export default weather;
  