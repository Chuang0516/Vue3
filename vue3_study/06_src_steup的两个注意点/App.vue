<template>
  <TheDemo @hello="showHelloMsg" msg="你好！" school="wecreate">
    <template v-slot:qwe>
      <span>wecreate</span>
    </template>
  </TheDemo>
</template>

<script>
import TheDemo from './components/TheDemo.vue'
export default {
  name: 'App',
  components: { TheDemo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好！你触发了hello事件，我收到的参数是${value}！`)
    }
    return {
      showHelloMsg,
    }
  },
}
</script>
