const express = require('express');
const path = require("path");
const cors  = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login/form",(req,res) => {
    const{user,password} = req.body;  //get user,password from request(frontend)
    console.log(user,password);
    return res.json({message : "success"});
})

app.listen(8080,() => {
    console.log("host:8080 listening")
})