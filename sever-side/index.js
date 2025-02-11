const express = require('express');
const path = require("path");
const cors  = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",function(request,response){
    response.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/userList",(request,response) => {
    response.send({items : ["one","two","three"]})
})

app.get("/List",(request,response) => {
    response.send({name : ["First","Second","Third"]})
})
app.post("/login",(req,res) => {
    const{user,password} = req.body;
   if(user !== "William"){
    res.send("userName doesn't exist!");
   }
    res.send("login successfully")
})
app.listen(8080,() => {
    console.log("listening on :8080")
});

app.post("/exercise",(req,res) => {
    const{userName,password} = req.body;
    res.send("login sucessfully")
})


