<template>
    <div class="child">
        <h3>我是child组件（祖）</h3>
        <TheSon />
    </div>
</template>
  
<script>
import { inject } from 'vue';
import TheSon from './TheSon.vue'
export default {
    name: 'TheChild',
    components: { TheSon },
    setup() {
        let x = inject('car')
        console.log(x);
    }
}
</script>
  
<style>
.child {
    background-color: rgb(210, 107, 16);
    padding: 10px;
}
</style>
  