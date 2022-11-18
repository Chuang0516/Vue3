<template>
    <div class="son">
        <h3>我是son组件</h3>
        <TheDialog />
    </div>
</template>
  
<script>
import TheDialog from './TheDialog.vue';
export default {
    name: 'TheSon',
    components: { TheDialog }
}
</script>
  
<style>
.son {
    background-color: rgb(14, 118, 186);
    padding: 10px;
}
</style>
  