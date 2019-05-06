<template>
  <div v-if="weather.main">
    <h1 class="weather">weather</h1>
    <div>{{weather.name}}</div>
    <div>当前温度：{{weather.main.temp}}℃ 最高温度：{{weather.main.temp_max}}℃ 最低温度：{{weather.main.temp_min}}℃</div>
    <div>{{weather.weather[0].main}}</div>
    <div><img :src="weather.weather[0].icon" alt=""></div>
  </div>
  
</template>

<script>
import { Loading } from 'element-ui';
export default {
  name: "Weather",
  data() {
    return {
      loading:false,
      locate: {
        lat: null,
        lon: null
      }
    };
  },
  computed: {
    weather: {
      get() {
        return this.$store.state.weather.weather || {};
      }
    }
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        let loadingInstance = Loading.service();
        navigator.geolocation.getCurrentPosition((position) => {
          this.locate = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          this.$store.dispatch("GetWeather", Object.assign({}, this.locate))
          .then(loadingInstance.close())
          .catch(loadingInstance.close());
        });
      } else {
      }
    },
  },
  beforeMount(){
    this.getLocation();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
