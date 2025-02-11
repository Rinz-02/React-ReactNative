const express = require('express');
const path = require("path");
const cors  = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5050,() => {
    console.log("localhost:5050")
})
app.post("/exercise",(req,res) => {
    const{userName,password} = req.body;
    res.send("login sucessfully")
})