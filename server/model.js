const express = require('express');
const mongoose = require('mongoose');//mongoose 是操作mongodb封装的方法

//链接moogodb
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);//链接数据库