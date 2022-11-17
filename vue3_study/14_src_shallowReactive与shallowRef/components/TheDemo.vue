<template>
    <h4>{{ person }}</h4>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>
  
<script>
import { shallowReactive, shallowRef, toRefs } from 'vue'

export default {
    name: 'TheDemo',
    setup() {

        // shallowReactive 仅对第一层数据添加响应式
        let person = shallowReactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        });

        // shallowRef 不会给对象类型的数据添加响应式
        let x = shallowRef({
            y: 0
        })

        return {
            person,
            x,
            ...toRefs(person)
        }

    }
}
</script>
  