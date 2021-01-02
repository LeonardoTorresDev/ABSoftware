const express=require('express');
const app=express();

const work=require('./work');
const user=require('./user')

app.use('/', work);

module.exports=app;