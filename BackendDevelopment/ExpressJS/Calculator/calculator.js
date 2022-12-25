const express = require('express');

const app = express();

const port = 3001;

app.listen(port, function (){
    console.log("Server is running on port 3001");
});

app.get("/", (req,res)=>{
   res.send("Calculator App!");
});