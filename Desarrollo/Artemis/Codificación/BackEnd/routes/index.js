const express=require('express');
const app=express();

const work=require('./work');

app.use('/', work);

module.exports=app;