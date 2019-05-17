// 局部子组件
<template>
      <li class="item" @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
      // props接收父组件中的参数
      props : ['content','index'],
      methods:{
            handleDelete (){
                  // 触发delete   获取当前的index
                  this.$emit('delete',this.index)
            }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      .item{
            color:aqua;
      }
</style>
