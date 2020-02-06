<template>
  <div>
    <button @click="rollDice()">Click to roll a Dice and see what you've got!</button>
    <br>
    <img v-if="rolledNumber===6" src="https://clipartart.com/images/6-dice-number-clipart-3.jpg">
    <img v-else-if="rolledNumber===2" src="https://lh3.googleusercontent.com/proxy/rTdZtPBUBjHYAmgf5UbIm3vZuFAygfRfP4AdINWjU-10WL5YiT6CPFMEKgVKZ97I6EBaUOEexVl_EI1ZrdG5Fp6Ri2PLTFDYEpMmD0GYX6irAFK3d3in87E78z_R5bqdjT-JwF8">
    <img v-else-if="rolledNumber===3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZDeAwNhgh42xn-V5gvFfjPbfoWIWGOFey2AquwRcH4NcKXzdQ">
    <img v-else-if="rolledNumber===4" src="https://webstockreview.net/images/dice-clipart-individual-3.png">
    <img v-else-if="rolledNumber===1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSytlmF4-Z6Du6hmswsq8VV_XYgcjhGLjVsVXfFyfB-mLXYRyNr">
    <img v-else-if="rolledNumber===5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHAVA7xTMLr858puWvBHj5sQpWE5ZdeNBReR1297fLLjMbHU7X">
  </div>
</template>
<script>
//   const axios = require('axios')
export default {
  name: 'Dice',
  data: () => {
    return {
      rolledNumber: 0
    }
  },
  methods: {
    rollDice () {
      this.rolledNumber = Math.round(Math.random() * 5 + 1)
    }
  }
}
</script>
<style scoped>
img{
  margin-left: 100px;
  margin-top: 15px;
  width: 60px;
  height: 60px;
}
</style>