const express=require('express');
const app=express();

const work=require('./work');
const user=require('./user');
const folder=require('./folder');
const comentary=require('./comentary');

app.use('/', work);
app.use('/', user);
app.use('/', folder);
app.use('/',comentary);

module.exports=app;