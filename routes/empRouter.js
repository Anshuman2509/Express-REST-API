const route=require('express').Router();
const EmpModel=require('../models/employee');

route.get('/emps',(req,res)=>{
    EmpModel.find({},(err,response)=>{
        res.send(response);
    });
})

route.get('/emps/:id',(req,res)=>{
    let id=req.params.id;
    EmpModel.findOne({id},(err,response)=>{
        res.send(response);
    })
})

route.post('/emps',(req,res)=>{
let emp=new EmpModel(req.body);
emp.save().then(()=>res.send('Saved successfully')).catch(()=>console.log('Error '+err));
});

route.put('/emps/:id',(req,res)=>{
    EmpModel.findOneAndUpdate({id:req.params.id},{$set:{name:req.body.name,gender:req.body.gender}},{new:true},(err,doc)=>res.send(doc));
})

route.delete('/emps/:id',(req,res)=>{
    EmpModel.findOneAndDelete({id:req.params.id},(err,response)=>res.send(response));
})
module.exports=route;