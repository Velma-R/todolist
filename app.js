//jshint esversion:6
const express= require('express')
const bodyParser= require('body-parser')




const app = express();

app.get("/", function(req,res){
    res.send("hello")
})

app.listen(3000, function(){
    console.log("listening at port 3000!")
})
