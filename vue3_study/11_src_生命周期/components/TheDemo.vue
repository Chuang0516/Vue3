<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
</template>
  
<script>
import { ref } from 'vue'

export default {
    name: 'TheDemo',
    setup() {
        let sum = ref(0);
        return { sum }
    },
    beforeCreate() {
        console.log('---beforeCreate---');
    },
    created() {
        console.log('---created---');
    },
    beforeMount() {
        console.log('---beforeMount---');
    },
    mounted() {
        console.log('---mounted---');
    },
    beforeUpdate() {
        console.log('---beforeUpdate---');
    },
    updated() {
        console.log('---updated---');
    },
    beforeUnmount() {
        console.log('---beforeUnmount---');
    },
    unmounted() {
        console.log('---unmounted---');
    }
}
</script>
  