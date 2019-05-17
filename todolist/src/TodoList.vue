<template>
  <div >
    <div>
      <input v-model="inputValue"/>
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
      <!-- content  index传递参数 -->
      <!-- 父组件监听子组件delete事件 监听到了触发handleDelete事件 -->
        <todo-item
         v-for="(item,index) of list" :key="index"
         :content="item"
         :index="index"
         @delete="handleDelete"
        ></todo-item>
    </ul>
  </div>
</template>

<script>
// 声明子组件
import TodoItem from './components/TodoItem'

export default {
      components:{
        'todo-item':TodoItem
      },
      data () {
        return{
          inputValue:'',
          list:[]
        }
      },
      methods:{
        handleSubmit () {
          // push方法 获得inputValue
          this.list.push(this.inputValue)
          this.inputValue=''
        },
        // 接收参数 触发事件删除1个index
        handleDelete (index){
          this.list.splice(index,1)
        }
      }
  }

</script>

<style>

</style>
