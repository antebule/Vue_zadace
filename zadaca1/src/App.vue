<template>
  <div id="app">
    <input type="button" @click="loadJoke" value="Click for joke!">
    <div v-if="responseData != null">
      {{responseData.value}} <br>
      Response time: {{time}} milliseconds <br>
      <img :src="icon">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  components: {
    
  },
  data: function(){
    return {
      responseData: null,
      time: 0,
      icon: ''
    }
  },
  methods: {
    loadJoke(){
      const start = Date.now();
      axios.get('https://api.chucknorris.io/jokes/random')
        .then((response) => {
          this.responseData = response.data;
          this.icon = response.data.icon_url;
          this.time = Date.now() - start;
        }).catch(function (res) {
          console.log(res);
        })
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
