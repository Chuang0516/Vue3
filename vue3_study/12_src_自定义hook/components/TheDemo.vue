<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前点击时鼠标的坐标为：x：{{ points.point.x }}，y：{{ points.point.y }}</h2>
    <div v-for="point, index in points.pointList" :key="index"
        :style="{ 'top': point.y + 'px', 'left': point.x + 'px' }" class="point"></div>
</template>
  
<script>
import { ref } from 'vue'
import usePoint from '../hooks/usePoint'

export default {
    name: 'TheDemo',
    setup() {
        let sum = ref(0);

        let points = usePoint();



        return { sum, points }
    },
}
</script>

<style>
div.point {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(13, 120, 213);
}
</style>
  