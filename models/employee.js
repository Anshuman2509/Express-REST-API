const mongoose=require('mongoose');

let empSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    gender:{type:String,required:true},
    indian:Boolean
})

let EmpModel=mongoose.model('Emp',empSchema);
module.exports=EmpModel;