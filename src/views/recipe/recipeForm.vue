<template>
  <el-form ref="form" :model="form" label-width="100px">
    <el-form-item label="recipe name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="ingredients">
      <el-input type="textarea" v-model="form.ingredients"></el-input>
    </el-form-item>
    <el-form-item label="directions">
      <el-input type="textarea" v-model="form.directions"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'RecipeForm',
  props:{
    form:{
        type:Object
    }
  },
  data(){
    return {
      // form:{
      //   name:"",
      //   ingredients:"",
      //   directions:""
      // }
    }
  },
  methods:{
    onSubmit(){

    }
  }
};
</script>
<style lang="scss" scoped>
</style>
