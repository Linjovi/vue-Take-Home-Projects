<template>
  <div class="recipe">
    <h1>recipe box</h1>
    <el-container>
      <el-aside width="200px">
        <div class="title">
          recipe
          <el-button type="mini" icon="el-icon-plus" circle @click="addClick()"></el-button>
        </div>
        <el-divider></el-divider>
        <el-menu default-active="0" @select="menuSelected">
          <el-menu-item
            v-for="(recipe,index) in recipeList"
            :key="index"
            :index="index.toString()"
          >{{recipe.name}}</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div v-if="recipe">
          <header>
            <span>{{recipe.name}}</span>
            <el-button type="mini" icon="el-icon-edit" circle @click="editClick(recipe)"></el-button>
            <el-button type="mini" icon="el-icon-delete" circle @click="deleteClick(recipe._id)"></el-button>
          </header>
          <el-divider></el-divider>
          <div class="recipe-content">
            <h3>Ingredients:</h3>
            <ul>
              <li v-for="(ingredient,index) in recipe.ingredients" :key="index">{{ingredient}}</li>
            </ul>
            <el-divider></el-divider>
            <h3>Directions:</h3>
            <ol>
              <li v-for="(direction,index) in recipe.directions" :key="index">{{direction}}</li>
            </ol>
          </div>
        </div>
      </el-main>
    </el-container>

    <el-dialog
      title="recipe"
      :visible.sync="dialogVisible"
      width="500px">
      <recipe-form :form="inputRecipe" @visable="dialogVisible=false"></recipe-form>
    </el-dialog>
  </div>
</template>

<script>
import RecipeForm from './recipeForm'
import recipeFormVue from './recipeForm.vue';
export default {
  components:{
    RecipeForm
  },
  data() {
    return {
      recipe: {
        name:"",
        ingredients:"",
        directions:""
      },
      inputRecipe:{},
      dialogVisible:false
    };
  },
  computed: {
    recipeList: {
      get() {
        return this.$store.state.recipe.recipeList || [];
      }
    }
  },
  methods: {
    menuSelected(index, indexPath) {
      this.recipe = this.recipeList[index];
    },
    addClick(){
      this.inputRecipe = this.recipeFormat();
      this.dialogVisible = true;
    },
    editClick(recipe){
      this.inputRecipe = this.recipeFormat(recipe);
      this.dialogVisible = true;
    },
    deleteClick(id){
      this.$store.dispatch('DelRecipe', id).then(this.recipe = {name:"",
        ingredients:"",
        directions:""});

    },
    recipeFormat(recipe){
      if(!recipe){
        return{
          name:"",
          ingredients:"",
          directions:""
        }
      }
      return{
        id:recipe._id,
        name:recipe.name,
        ingredients:recipe.ingredients.join("\\"),
        directions:recipe.directions.join("\\")
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store
        .dispatch("GetRecipeList")
        .then(() => {
          vm.recipe = vm.recipeList[0];
          vm.$update();
        })
        .catch(() => {});
    });
  }
};
</script>
<style lang="scss" scoped>
.recipe {
  .el-aside {
    border-radius: 5px;
    border: 1px solid black;
    margin: 5px;
    .title {
      font-size: 24px;
      line-height: 24px;
      padding: 10px 0;
    }
    .el-divider {
      margin: 0;
    }
    .el-menu-item {
      font-size:20px;
    }
  }
  .el-main {
    text-align: left;
    border: 1px solid black;
    margin: 5px;
    border-radius: 5px;
    .el-divider {
      margin: 10px 0;
    }
    header {
      font-size: 24px;
      line-height: 24px;
    }
  }
}
</style>
