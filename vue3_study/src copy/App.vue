<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <TheDemo v-if="isShowDemo" />
</template>

<script>
import TheDemo from './components/TheDemo.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: { TheDemo },
  setup() {
    let isShowDemo = ref(true);
    return { isShowDemo }
  }
}
</script>
