'use strict';
const fs = require("fs");
const path = require("path");

fs.readFile(path.resolve(__dirname,"./index.html"),"utf-8",function(err,data){
    console.log(data)
    if(err){
        console.log(err);
    }else{
        console.log(typeof data);
    }
})