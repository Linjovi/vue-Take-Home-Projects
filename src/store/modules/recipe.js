import {getRecipeList,saveRecipe} from '@/api/recipe'
const recipe = {
  state:{
    recipeList:[]
  },
  mutations:{
    RecipeListLoad:(state,data) => {
      state.recipeList = data;
    },
    RecipeSaveLoad: (state, recipe) => {
      const index = state.recipeList.findIndex(item => item._id === recipe._id);
      if (index === -1) {
        state.recipeList.push(recipe);
      } else {
        state.recipeList.splice(index, 1, recipe);
      }
    },
  },
  actions:{
    async GetRecipeList({commit},data){
      const response = await getRecipeList(data);
      commit('RecipeListLoad',response.data);
      return response.data;
    },
    async SaveRecipe({ commit }, data) {
      const response = await saveRecipe(data);
      commit('RecipeSaveLoad', response.data);
      return response.data;
    },
  }
}

export default recipe;