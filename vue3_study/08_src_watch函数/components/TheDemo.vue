<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg += '！'">修改信息</button>
    <hr>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>
  
<script>
import { ref, reactive, watch } from 'vue'

export default {
    name: 'TheDemo',
    setup() {

        let sum = ref(0);
        let msg = ref('你好！');
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        // 情况一：监视 ref 所定义的一个响应式数据
        // watch(sum, (newValue, oldValue) => {
        //     console.log('sum变了', newValue, oldValue);
        // }, { immediate: true })

        // 情况二：监视 ref 所定义的多个响应式数据
        // watch([sum, msg], (newValue, oldValue) => {
        //     console.log(newValue, oldValue);
        // }, { immediate: true })

        // 情况三：监视 reactive 所定义的一个响应式数据中的全部数据
        // 1、此处无法正确的获取 oldValue
        // 2、强制开启了深度监视
        // watch(person, (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // })

        // 情况四：监视 reactive 所定义的一个响应式数据中的某个属性
        // watch(() => person.age, (newValue, oldValue) => {
        //     console.log('person的age变化了', newValue, oldValue);
        // })

        // 情况五：监视 reactive 所定义的一个个响应式数据中的某些属性
        // watch([() => person.name, () => person.age], (newValue, oldValue) => {
        //     console.log('person的age或name变化了', newValue, oldValue);
        // })

        // 特殊情况
        watch(() => person.job, (newValue, oldValue) => {
            console.log('person的job变化了', newValue, oldValue);
        }, { deep: true })


        return {
            sum,
            msg,
            person
        }

    }
}
</script>
  