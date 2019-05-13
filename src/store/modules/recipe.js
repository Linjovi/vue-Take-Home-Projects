import {getRecipeList,saveRecipe,delRecipe} from '@/api/recipe'
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
    RecipeDelLoad:(state,id) => {
      const index = state.recipeList.findIndex(item => item._id === id);
      state.recipeList.splice(index, 1);
    }
  },
  actions:{
    async GetRecipeList({commit},data){
      const response = await getRecipeList(data);
      let recipes = response.data.map((item) => {
        item.ingredients = item.ingredients.split("\\")
        item.directions = item.directions.split("\\")
      });
      commit('RecipeListLoad',response.data);
      return recipes;
    },
    async SaveRecipe({ commit }, data) {
      const response = await saveRecipe(data);
      let recipe = {
        _id:response.data.id,
        ingredients:response.data.ingredients,
        directions:response.data.directions,
        name:response.data.name
      }
      commit('RecipeSaveLoad', recipe);
      return recipe;
    },
    async DelRecipe({commit},data){
      const response = await delRecipe(data);
      commit('RecipeDelLoad',response.data);
      return response.data;
    }
  }
}

export default recipe;