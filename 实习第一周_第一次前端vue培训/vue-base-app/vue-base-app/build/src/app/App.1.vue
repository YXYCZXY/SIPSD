<template>
  <div id="app">
    <h2>价格在40-50的书</h2>
    <template v-for="(obj,index) in objects" v-if="Number(obj.bookPrice)>=40 && Number(obj.bookPrice) <= 50">
        <ul>
            <li @click="click(obj.bookName, index)" :class="cur===index ? 'cur' : ''">
                <label>
                    书名：{{obj.bookName}}
                </label>
                <br />
                <label v-if="index === cur">
                    价格：{{obj.bookPrice}}
                </label>
            </li>
        </ul>
    </template>

    <h2>下面是所有的书</h2>

    <template  v-for="(obj,i) in objects" >
        <ul>
            <li @click="click(obj.bookName, i, 1)" :class="cur1===i ? 'cur' : ''">
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
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
        cur: '',
        cur1: '',
        changecolor:false,
                show: "",
                show1: '',
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
                click (bookName,index,flag) {
                    console.log(event);
                    if (flag) {
                        this.cur1 = index;
                    } else {
                        this.cur = index;
                    }
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
div {
  width: 100%;
  height: 100%;
}
.cur {
    background: grey;
}
</style>
