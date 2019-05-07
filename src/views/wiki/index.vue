<template>
  <div class="wiki">
    <el-input v-model="input"></el-input>
    <el-button @click="searchClick">search</el-button>
    <div :v-if="wikiList.length>0">
      <div v-for="item in wikiList" :key="item.key" style="margin:10px 0;border:1px solid black">
        <a :href="'https:/'+'/en.wikipedia.org/?curid='+item.pageid" target="_blank">
          <h3>{{item.title}}</h3>
          <p>{{item.extract}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wiki',
  data () {
    return {
        input:""
    }
  },
  computed:{
    wikiList: {
      get() {
        return this.$store.state.wiki.wikiList || [];
      }
    }
  },
  methods:{
    searchClick(){
      this.$store.dispatch("GetWikiList", this.input)
        .then()
        .catch();
      
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
}
</style>
