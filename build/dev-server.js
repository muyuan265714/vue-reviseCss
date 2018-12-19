
var config = require("../config");
//获取config配置文件 ctrl+鼠标点击可跳入

if(!process.env.NODE_ENV){
    console.log(process)    //node ./dev-server.js  node环境运行文件可以看到console
    //创建全局process对象
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
    //全局process对象，NODE_ENV 全局用于判断是生产或者是开发环境。
}

//引入组件
const opn = require('opn');
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackConfig = require('./webpack.dev');
//引入组件

const port = process.env.PORT || config.dev.port;
//port
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
//浏览器自动开启
const proxyTable = config.dev.proxyTable;
//代理

const app = express();
var compiler = webpack(webpackConfig);

console.log(compiler);