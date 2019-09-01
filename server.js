const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoDB=require('./databaseMongoDB');
const empRoute=require('./routes/empRouter');
const userRouter=require('./routes/userRoter');

let app=express();
app.use(bodyParser.json());
app.use(cors());

app.use('/index',empRoute);
app.use('/index',userRouter);

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})