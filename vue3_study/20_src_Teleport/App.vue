<template>
  <div class="app">
    <h3>我是app组件</h3>
    <TheChild />
  </div>
</template>

<script>
import TheChild from './components/TheChild.vue';

export default {
  name: 'App',
  components: { TheChild },
}
</script>

<style>
.app {
  background-color: rgb(183, 183, 183);
  padding: 10px;
}
</style>
