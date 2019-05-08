<template>
  <div class="bingo">
    <header>
      <h3>bingo game</h3>
      <div>
        you choose:
        <button @click="choose=1;computerLocate()" :disabled="choose!=0">x</button>
        <button @click="choose=-1;computerLocate()" :disabled="choose!=0">o</button>
      </div>
      <span>next:{{buttonClass(next)}}</span>
      <button @click="reset()">reset</button>
    </header>
    <div class="game-content">
      <button
        v-for="(item,index) in situation"
        :key="index"
        @click="buttonClick(index)"
        :disabled="bingo||choose===0"
      >{{buttonClass(item)}}</button>
    </div>
    <div v-show="bingo" v-if="winner">{{winner}} bingo</div>
  </div>
</template>

<script>
export default {
  name: "Bingo",
  data() {
    return {
      situation: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      next: 1,
      res: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      winner: null,
      choose: 0
    };
  },
  computed: {
    bingo() {
      var tag = false;
      this.res.forEach(item => {
        if (
          this.situation[item[0]] === this.situation[item[1]] &&
          this.situation[item[0]] !== 0 &&
          this.situation[item[2]] === this.situation[item[1]]
        ) {
          tag = true;
          this.winner = this.situation[item[0]] == 1 ? "x" : "o";
        }
      });
      return tag;
    }
  },
  methods: {
    buttonClass(value) {
      switch (value) {
        case 0:
          return;
        case 1:
          return "x";
        case -1:
          return "o";
        default:
          return;
      }
    },
    buttonClick(index) {
      this.$set(this.situation, index, this.next);
      this.next = -this.next;
      this.computerLocate();
    },
    reset() {
      this.situation = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.next = 1;
      this.choose = 0;
      this.winner = null;
    },
    whereCanLocate(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (this.situation[arr[i]] === 0) {
          this.situation[arr[i]] = -this.choose;
          break;
        }
      }
    },
    computerLocate() {
      if (this.winner === 1 || this.winner === -1) {
        return;
      }
      if (this.next !== this.choose) {
        this.next = -this.next;
        for (let i = 0; i < this.res.length; i++) {
          if (
            (this.situation[this.res[i][0]] +
              this.situation[this.res[i][1]] +
              this.situation[this.res[i][2]] ===
              -2 * this.choose) |
            (this.situation[this.res[i][0]] +
              this.situation[this.res[i][1]] +
              this.situation[this.res[i][2]] ===
              2 * this.choose)
          ) {
            this.whereCanLocate(this.res[i]);
            return;
          }
        }
        for (let i = 0; i < this.res.length; i++) {
          if (
            (this.situation[this.res[i][0]] +
              this.situation[this.res[i][1]] +
              this.situation[this.res[i][2]]) *
              -this.choose >
              0 &&
            this.situation[this.res[i][0]] *
              this.situation[this.res[i][1]] *
              this.situation[this.res[i][2]] ===
              0
          ) {
            this.whereCanLocate(this.res[i]);
            return;
          }
        }
        this.situation[this.situation.indexOf(0)] = -this.choose;
        return;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.game-content {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  button {
    margin: 0;
    width: 50px;
    height: 50px;
    float: left;
    font-size: 20px;
  }
}
</style>
