
var config = require("../config");

if(!process.env.NODE_ENV){
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

const opn = require('opn');
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackConfig = require('./webpack.dev');


const port = process.env.PORT || config.dev.port;
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
const proxyTable = config.dev.proxyTable;

const app = express();
var compiler = webpack(webpackConfig);

