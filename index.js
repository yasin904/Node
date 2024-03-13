const express = require('express')
const  mongoose  = require('mongoose')
const userRoutes = require('./routes/user.route')
const bodyParser = require("body-parser")



const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>{
   return res.status(200).json({
    message : "Hello World"
   });
});

app.use('/auth',userRoutes)




mongoose
.connect("mongodb://localhost:27017/project_building")
.then(()=>{
    app.listen(5003,()=>{

        console.log("server is running on 5003");

    });
})
.catch((err)=>{
    console.log("could not connect to mongdb",err)
});