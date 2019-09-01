const mongoDb=require('mongoose');
const url='mongodb://localhost:27017/test1';

mongoDb.connect(url,{useNewUrlParser:true},()=>console.log('Connection successfull!'));

module.exports=mongoDb;