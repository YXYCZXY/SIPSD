<template>
  <div id="app">

      <h2>价格在40-50的书</h2>
      <div id="div1" v-show="show2">
        <!-- v-for="(obj,index) in objects" obj是一个参数，表示数组中每一项遍历组内元素，index表示索引，object是一个参数表示要遍历的数组 -->
        <template   >

            <!-- v-for="(value, key, index) in object"遍历对象时 第一个是键值 第二个为键 第三个为索引 -->
            <!-- key的作用用来唯一标识数组的每一项，提高渲染性能 -->
            <ul >
            <!-- 三元表达式判断 -->
            <template v-for="(obj,index) in objects" > 
                <li :key="index" v-if="Number(obj.bookPrice)>=40 && Number(obj.bookPrice) <= 50"   @click="click(obj.bookName, index)" :class="cur===index ? 'cur' : ''"  >
                        <label  >
                            书名：{{obj.bookName}}
                        </label>
                        <br />
                        <!-- 判断显示 -->
                        <label v-if="index === cur">
                            价格：{{obj.bookPrice}}
                        </label>
                </li>
             </template>   
            </ul>
        </template>
     </div>
     <button @click="handleclick2">点击隐藏</button> 

    <h2>下面是所有的书</h2>
    <button @click="handleclick"> 点击显示</button>
    <div id="div2"  v-show="show">
        <template    >
            <ul >
                <li v-for="(obj,i) in objects" :key="i" @click="click(obj.bookName, i, 1)" :class="cur1===i ? 'cur' : ''">
                    <label>
                        书名：{{obj.bookName}}
                    </label>
                    <br />
                    <label v-if="i === cur1" >
                        价格：{{obj.bookPrice}}
                    </label>
                </li>
            </ul>
        </template>
    </div>

</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        show:false,
        show2:true,
        cur: '',
        cur1: '',
        changecolor:false,
                objects: [{
                        bookName: "三国演义",
                        bookPrice: "30",
                    },
                    {
                        bookName: "红楼梦",
                        bookPrice: "40",
                    },
                    {
                        bookName: "水浒传",
                        bookPrice: "50",
                    },
                    {
                        bookName: "西游记",
                        bookPrice: "60",
                    },
                    {
                        bookName: "时间简史",
                        bookPrice: "40.5",
                    },
                    {
                        bookName: "鲁滨逊漂流记",
                        bookPrice: "55.6",
                    },
                    {
                        bookName: "雾都孤儿",
                        bookPrice: "35.2",
                    },
                ]
    };
  },
  methods: {
    //   bookName 获取点击书名 index获取当前点击的 flag判断点击是上面的还是下面的
                click (bookName, index,flag) {
                    console.log(event);
                    // flag = true    !flag=false
                    if (flag) {
                        this.cur1 = index;
                    } else {
                        this.cur = index;
                    }
                },
                handleclick:function(){
                    this.show = !this.show
                },
                handleclick2:function(){
                    this.show2 = !this.show2
                },
            }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
</style><style lang="scss" scoped>
#app{
    width: 200px;
    height: 400px;
    position: fixed;
    left: 40%;
    top: 8%;
}
#div2 {
  width: 200px;
  height: 200px;
}
#div1{
    width: 200px;
    height: 120px;
}
#11{
    background: red($color: #000000)
}
.cur {
    background: grey;
}
</style>
