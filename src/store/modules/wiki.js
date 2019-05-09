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
        // const response = await getWikiList(data);
        await getWikiList(data,(res)=>{
          commit('WikiListLoad', res.query.pages);
        });
        // commit('WikiListLoad', response.data);
        // return response.data;
      }
    }
  };
  
  export default wiki;
  