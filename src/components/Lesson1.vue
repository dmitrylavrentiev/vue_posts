<template>
  <div>
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="box" :style="boxStyle"></div>
        </v-flex>
        <v-flex xs4>
          <div class="name">
            R: {{r}}
          </div>
          <div class="btns">
            <v-btn @click="dec('r')" depressed large color="primary">-</v-btn>
            <v-btn @click="inc('r')" depressed large color="primary">+</v-btn>
          </div>
        </v-flex>
        <v-flex xs4>
          <div class="name">
            G: {{g}}
          </div>
          <div class="btns">
            <v-btn @click="dec('g')" depressed large color="primary">-</v-btn>
            <v-btn @click="inc('g')" depressed large color="primary">+</v-btn>
          </div>
        </v-flex>
        <v-flex xs4>
          <div class="name">
            B: {{b}}
          </div>
          <div class="btns">
            <v-btn @click="dec('b')" depressed large color="primary">-</v-btn>
            <v-btn @click="inc('b')" depressed large color="primary">+</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        r: 10,
        g: 10,
        b: 10,
      }
    },
    computed: {
      boxStyle: function () {
        return { backgroundColor: `rgb( ${this.r}, ${this.g}, ${this.b}` }
      }
    },
    methods: {
      dec: function (color) {
        if(this[color] > 0){
          this[color] -= 10;
        }
      },
      inc: function (color) {
        if(this[color] <245){
          this[color] += 10;
        }
      },
    }
  }
</script>

<style>
  .box{
    width: 200px;
    height: 200px;
  }
</style>
