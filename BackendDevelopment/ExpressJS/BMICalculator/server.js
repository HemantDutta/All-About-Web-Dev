const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const app = express();

app.listen(port, ()=>{
    console.log("Server is running on port 3002")
});
app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res)=>{
   let height = req.body.height;
   let weight = req.body.weight;
   let bmi = weight/(height**2);
   res.send(`<div style="background-color: #252525; color: white; height: 100vh; width: 100vw;">Your BMI is ${bmi}</div>`)
});

