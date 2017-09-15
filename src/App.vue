<template>
  <div id="app">
    <CV></CV>
  </div>
</template>

<script>
import CV from './components/cv'
import banner from './components/welcome'

export default {
  name: 'app',
  components: {
    CV
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}
</style>
