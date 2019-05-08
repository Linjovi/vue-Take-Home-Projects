<template>
  <el-container>
    <el-header>
      <el-col :span="10" class="logo" :class="isCollapse?'logoIsCollapse':'logoNotCollapse'">logo</el-col>
      <el-col :span="10" class="tools">
        <el-radio-group v-model="isCollapse" size="small">
          <el-radio-button :label="false" >open</el-radio-button>
          <el-radio-button :label="true">close</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse?'65px':'230px'">
        <el-menu :router="true" :default-active="$route.path">
          <template v-for="route in $router.options.routes[0].children">
            <el-menu-item v-if="!route.children || route.children.length == 1" :index="route.path" :key="route.path">
              <i class="el-icon-menu"></i>{{ route.name }}
            </el-menu-item>
            <el-submenu v-else :index="route.path" :key="route.path">
              <template slot="title">
                <i class="el-icon-menu"></i>{{ route.name }}</template>
              <el-menu-item v-for="child in route.children" :index="route.path + '/' + child.path" :key="route.path + '/' + child.path">{{ child.name }}</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <el-col :span="24" class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
              {{item.name}}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="main">
          <router-view></router-view>
          <!-- <div>main</div> -->
        </el-col>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: false,
      // userName:"",
      // userIcon:""
    };
  },
  methods:{

  },
  mounted(){
    
  },
  // watch:{
  //   '$route':function(){
  //     console.log("change");
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-container {
    padding: 0;
    margin: 0;

     .el-header {
      background-color: #B3C0D1;
      text-align: center;
      line-height: 60px;
      padding: 0;

      .logo {
        // width: 230px;
        border-right: 1px solid gray;
      }
      .logoIsCollapse {
        width:65px;
      }
      .logoNotCollapse {
        width: 230px;
      }
      .tools {
        width:160px;
      }
      .userInfo {
        float: right;

        img {			
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px;
          float: right;
        }

      }
    }


    .el-menu:not(.el-menu--collapse) {
      width: 229px;
    }

    
    .breadcrumb  {
      background-color: white;
    }

    .el-main {

      text-align: center;
      // overflow-y: scroll;
      padding: 10px;
      // height: 500px;

    }
    
    
  }

</style>