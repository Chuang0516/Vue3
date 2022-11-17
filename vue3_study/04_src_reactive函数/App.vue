<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>工作薪资：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <h3>测试的数据c：{{ person.job.a.b.c }}</h3>
  <button @click="changInfo">修改信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['唱', '跳', 'rap', '篮球']
    })

    // 方法
    function changInfo() {
      person.name = '李四';
      person.age = 48;
      person.job.type = 'ui设计师';
      person.job.salary = '60k';
      person.job.a.b.c = 999;
      person.hobby[0] = '学习'
    }

    // 返回一个对象
    return {
      person,
      changInfo
    }

  }
}
</script>
