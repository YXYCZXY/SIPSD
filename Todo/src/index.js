// 加载vue模块,并输入变量Vue
import Vue from 'vue'
// 引入写好的vue文件
import App from './app.vue'

import './assets/style/test.css'
import  './assets/images/logo.png'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue ({
    // 这样浏览器上的页面才能显示我们再.vue中定义的内容
    render:(h) => h(App) //  通过使用render的方法 来渲染实例
}).$mount(root)//挂载到div上