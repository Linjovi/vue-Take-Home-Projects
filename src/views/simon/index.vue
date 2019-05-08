<template>
  <div class="simon">
    <h1>SIMON</h1>
    <div class="gameInfo">
      <span>count:{{count}}</span>
      <el-button type="mini" @click="start()">start</el-button>
    </div>
    <div class="gameContent">
      <el-button v-for="item in [0,1,2,3]" 
      :key="item" 
      @click="btnClick(item)"
      :disabled="result<0 || isAni"
      :id="'btn'+item"
      :class="{highLight: isHighLight[item]}"
      ></el-button>
    </div>
    <div class="result" v-show="result!==0">
      <h1 v-if="result===1">win</h1>
      <h1 v-if="result===-1">over!</h1>
    </div>
    <audio 
    style="display:none" 
    v-for="item in [1,2,3,4]" 
    :key="item"
    :src="'https://s3.amazonaws.com/freecodecamp/simonSound'+item+'.mp3'"
    :id="'audio'+(item-1).toString()"></audio>

  </div>
</template>
<script>
import sleep from '@/utils/sleep'
export default {
  data() {
    return {
      count: 0,
      order: [],
      current: 0,
      result: 0,
      isHighLight:[false,false,false,false],
      isAni:false
    };
  },
  methods: {
    start() {
      this.count = 0;
      this.result = 0;
      this.newRound();
    },
    newRound(){
      this.isHighLight=[false,false,false,false];
      this.randomOrder();
      this.animation();
    },
    randomOrder() {
      this.count++;
      this.order = [];
      this.current = 0;
      for (let i = 0; i < this.count; i++) {
        let index = Math.floor(Math.random() * 4);
        this.order.push(index);
      }
    },
    btnClick(index) {
      let buttonAudio = document.getElementById('audio'+index.toString());
      buttonAudio.play();
      if (index === this.order[this.current]) {
        this.current++;
      } else {
        this.result = -1;
        return;
      }
      if(this.current >= this.order.length){
        sleep(1000).then(this.newRound());
      }
    },
    async animation() {
      this.isAni = true;
      for(let i = 0;i<this.order.length;i++){
        await this.setHightLight(this.order[i]);
      }
      this.isAni = false;
    },
    async setHightLight(index){
      await sleep(500)
      this.$set(this.isHighLight,index,true)
      await sleep(500)
      this.$set(this.isHighLight,index,false)
    }
  }
};
</script>
<style lang="scss" scoped>
.simon {
  .gameContent {
    width: 220px;
    height: 220px;
    margin: 10px auto;
    padding: 5px;
    background-color: gray;
    border-radius: 50%;
    button {
      width: 100px;
      height: 100px;
      float: left;
      margin: 5px;
      border-color: gray;
    }
    button:first-child {
      border-radius: 100px 0 0 0;
      background-color: #9f0f17;
    }
    button:first-child:active {
      background-color: red;
    }
    button:nth-child(2) {
      border-radius: 0 100px 0 0;
      background-color: green;
    }
    button:nth-child(2):active {
      background-color: #13b85d;
    }

    button:nth-child(3) {
      border-radius: 0 0 0 100px;
      background-color: #cca707;
    }
    button:nth-child(3):active {
      background-color: yellow;
    }
    button:nth-child(4) {
      border-radius: 0 0 100px 0;
      background-color: #083d75;
    }
    button:nth-child(4):active {
      background-color: blue;
    }
    .highLight {
      @extend button:active;
    }
  }
}
</style>


