<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">打招呼</button>
</template>

<script>
import { h } from 'vue';
export default {
  name: 'App',
  // 测试一下 setup
  setup() {
    let name = '张三';
    let age = 18;

    // 方法
    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好！`);
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1', 'wecreate')
  }
}
</script>
