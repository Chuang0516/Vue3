<template>
    <div class="child">
        <h3>我是child组件</h3>
        {{ sum }}
    </div>
</template>
  
<script>
import { ref } from 'vue';
export default {
    name: 'TheChild',
    setup() {
        let sum = ref(0);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ sum })
            }, 1000)
        })
    }
}
</script>
  
<style>
.child {
    background-color: rgb(210, 107, 16);
    padding: 10px;
}
</style>
  