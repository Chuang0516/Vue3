<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
  name: 'App',
  setup() {
    // 自定义 ref
    function myref(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            track(); // 通知 Vue 追踪 value 的变化
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知 Vue 去重新解析模板
            }, delay)
          }
        };
      });
    }

    // let keyWord = ref('hello'); // 使用 vue 提供的 ref
    let keyWord = myref('hello', 500); // 使用自定义的 ref

    return { keyWord }
  }
}
</script>
