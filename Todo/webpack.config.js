// path一个基本包 表明路径
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    entry:path.join(__dirname,'src/index.js'),

    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    // 模块的配置 提供打包方案
    module:{
        // 规则
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },

            {
                test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
            },
            {
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                         options:{
                          // 小于到  js 里
                            limit:1024,
                            name:'[name].[ext]'
                         }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
  
