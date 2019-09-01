const router=require('express').Router();
const connection=require('../databaseMySql');

router.get('/autos',(req,res)=>{
    connection.query('select * from auto',(err,rows)=>{
        res.send(rows);
    })
})

router.get('/autos/:id',(req,res)=>{
    connection.query('select * from auto where autoid='+req.params.id,(err,rows)=>{
        res.send(rows);
    })
})

router.post('/autos',(req,res)=>{
    let values=[req.body.id,req.body.name,req.body.parent];
    connection.query('insert into auto values(?,?,?)',values,(err,results,fields)=>{
        res.send(results);
    });
})

router.put('/autos/:id',(req,res)=>{
    let values=[req.body.name,req.body.parent,req.params.id];
    connection.query('update auto set name=?,parent=? where id=?',values,(err,result,fields)=>{
        res.send(result);
    })
})

router.delete('/autos/:id',(req,res)=>{
    connection.query('delete from auto where id='+req.params.id,(err,result)=>{
        res.send(result);
    })
})

module.exports=router;