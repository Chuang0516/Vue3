<template>
  <div class="app">
    <h3>我是app组件</h3>
    <Suspense>
      <template v-slot:default>
        <TheChild />
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import TheChild from './components/TheChild.vue'; // 静态引入
import { defineAsyncComponent } from 'vue';
const TheChild = defineAsyncComponent(() => import('./components/TheChild.vue')); // 异步引入

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
