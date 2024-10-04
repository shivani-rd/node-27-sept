const express = require('express');
const path = require('path')                       //path is in-built module
const user = require('./routes/user');
const app = express();
const connection = require('./connection');
connection();
app.use(user)
app.set('view engine','ejs');           //ejs is engine name
app.set('views',path.resolve('./views'));     
app.listen(3006 ,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running on 3006");
    }
})