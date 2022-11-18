<template>
    <div class="child">
        <h3>我是child组件</h3>
        <TheSon />
    </div>
</template>
  
<script>
import TheSon from './TheSon.vue'
export default {
    name: 'TheChild',
    components: { TheSon },
}
</script>
  
<style>
.child {
    background-color: rgb(210, 107, 16);
    padding: 10px;
}
</style>
  