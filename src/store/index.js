import Vue from 'vue';
import Vuex from 'vuex';

import weather from './modules/weather';
import wiki from './modules/wiki';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    weather,
    wiki
  }
});
