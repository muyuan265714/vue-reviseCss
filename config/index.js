module.exports = {
    dev:{
        //dev开发环境配置
        env:require("./dev.env.js"),
        //env添加在node全局对象process中 用于全局标识为 dev开发环境
        port:1888,
        //端口
        autoOpenBrowser:true,
        //是否从浏览器打开
        assetsSubDirectory: 'static',
        //静态文件夹
        assetsPublicPath: '/',
        //公共路径
        proxyTable:{}
        //服务器代理
    },
    build:{
        //build生产环境配置
        env:require("./prod.env.js"),
    }
}