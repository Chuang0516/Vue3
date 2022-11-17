<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <slot name="qwe"></slot>
    <button @click="test">测试触发一下Demo组件的hello事件</button>
</template>
  
<script>
import { reactive } from 'vue'

export default {
    name: 'TheDemo',
    props: ['msg', 'school'],
    emits: ['hello'],
    setup(props, context) {
        // console.log('---setup---', props);
        // console.log('---setup---', context);
        // console.log('---setup---', context.attrs); // 相当于 vue2 中的 $attrs
        console.log('---setup---', context.slots);

        // 数据
        let person = reactive({
            name: '张三',
            age: 18
        });

        // 方法
        function test() {
            context.emit('hello', 666);
        }

        // 返回一个对象
        return {
            person,
            test
        }

    }
}
</script>
  