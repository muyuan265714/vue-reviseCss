module.exports = {
    dev:{
        env:require("./dev.env.js"),
        port:1888,
        autoOpenBrowser:true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable:{}
    },
    build:{
        env:require("./prod.env.js"),
    }
}