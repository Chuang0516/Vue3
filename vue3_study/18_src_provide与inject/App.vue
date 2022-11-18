<template>
  <div class="app">
    <h3>我是app组件（祖），{{ name }}--{{ price }}</h3>
    <TheChild />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from 'vue';
import TheChild from './components/TheChild.vue';

export default {
  name: 'App',
  components: { TheChild },
  setup() {
    let car = reactive({
      name: '奔驰',
      price: '40W'
    });
    provide('car', car); // 给自己的后代组件传递数据
    return { ...toRefs(car) }
  }
}
</script>

<style>
.app {
  background-color: rgb(183, 183, 183);
  padding: 10px;
}
</style>
