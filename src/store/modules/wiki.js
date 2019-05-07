import {
  getWikiList
  } from '@/api/wiki';
  
  const wiki = {
    state: {
      wikiList: null
    },
    mutations: {
      WikiListLoad: (state, data) => {
        state.wikiList = data;
      }
    },
    actions: {
      async GetWikiList({ commit }, data) {
        // const response = 
        await getWikiList(data,(data)=>{
          commit('WikiListLoad', data.query.pages);
        });
        // commit('WikiListLoad', response.data);
        // return response.data;
      }
    }
  };
  
  export default wiki;
  