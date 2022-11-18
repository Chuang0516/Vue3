<template>
    <div class="son">
        <h3>我是son组件（祖），{{ car.name }}--{{ car.price }}</h3>
    </div>
</template>
  
<script>
import { inject } from 'vue';
export default {
    name: 'TheSon',
    setup() {
        let car = inject('car');
        return { car }
    },
}
</script>
  
<style>
.son {
    background-color: rgb(14, 118, 186);
    padding: 10px;
}
</style>
  