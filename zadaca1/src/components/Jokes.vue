<template>
  <div>
    <input type="button" @click="loadJoke" value="Click for a joke!">
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
  name: 'Jokes',
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

<style scoped>

</style>
