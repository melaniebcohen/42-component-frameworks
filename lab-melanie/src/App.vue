<template>
  <div id="app">
    <HelloWorld 
      msg="Hello World!"
      submsg="Lab 42: Component Frameworks using Vue.js" 
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
@import './style/main.scss';
</style>
