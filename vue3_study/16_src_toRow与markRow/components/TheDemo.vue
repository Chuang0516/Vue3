<template>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}</h2>
    <h4>车辆：{{ person.car }}</h4>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">添加一辆车</button>
    <button @click="person.car.price++">更改车辆价格</button>
</template>
  
<script>
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue'

export default {
    name: 'TheDemo',
    setup() {

        let sum = ref(0);

        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });

        // toRaw 将响应式数据转变为普通数据
        function showRawPerson() {
            // const rawPerson = toRaw(person);
            // console.log(rawPerson);

            const sum1 = toRaw(sum);
            console.log(sum1);
        }

        function addCar() {
            let car = { name: 'w', price: 40 };
            person.car = markRaw(car);
        }

        return {
            sum,
            person,
            ...toRefs(person),
            showRawPerson,
            addCar
        }

    }
}
</script>
  