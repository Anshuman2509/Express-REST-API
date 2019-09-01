const mysql=require('mysql');

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'rough'
});

connection.connect((error)=>{
    console.log('MySql connected');
})

module.exports=connection;