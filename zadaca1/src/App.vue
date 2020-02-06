<template>
  <div id="app">
    <Jokes />
  </div>
</template>

<script>
import Jokes from './components/Jokes'

export default {
  name: 'app',
  components: {
    Jokes
  },
  data: function(){
    return {
      
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
