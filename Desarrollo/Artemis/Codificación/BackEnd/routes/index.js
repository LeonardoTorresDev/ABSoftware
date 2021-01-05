const express=require('express');
const app=express();

const work=require('./work');
const user=require('./user');
const folder=require('./folder')

app.use('/', work);
app.use('/', user);
app.use('/', folder);

module.exports=app;