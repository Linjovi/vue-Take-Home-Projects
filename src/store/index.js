import Vue from 'vue';
import Vuex from 'vuex';

import weather from './modules/weather';
import wiki from './modules/wiki';
import recipe from './modules/recipe';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    weather,
    wiki,
    recipe
  }
});
