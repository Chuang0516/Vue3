<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作种类：{{ job.type }}</h2>
  <h2>工作薪资：{{ job.salary }}</h2>
  <button @click="changInfo">修改信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三');
    let age = ref(18);
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    // 方法
    function changInfo() {
      name.value = '李四';
      age.value = 48;
      job.value.type = 'ui设计师';
      job.value.salary = '60k'
      // console.log(name, age, job.value);
    }

    // 返回一个对象
    return {
      name,
      age,
      job,
      changInfo
    }

  }
}
</script>
