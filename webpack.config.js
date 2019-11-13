let path = require('path') //引入内置的 path 模块  
module.exports = {
    devServer: { //开发服务器的配置
        port: 3000, //端口配置
        contentBase: './build' // 以 build 目录作为我们的静态服务(直接访问我们的 build 目录)
    },
    mode: 'production', //模式：这里有两种模式  production(生产模式)(打包后压缩的代码) 	
                        // development(开发模式)
    entry: './src/index.js', // 入口（从哪个地方开始打包）
    output: { //出口
        filename: 'bundle.js', //打包后的的文件名
        path: path.resolve(__dirname, 'build') //路径，打包后的文件存放的地方 。 要求：路径必须是一个绝对路径
                                    // resolve() 解析：可以把相对路径解析成绝对路径。
    }
}