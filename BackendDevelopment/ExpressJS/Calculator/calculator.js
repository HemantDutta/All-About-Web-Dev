const express = require('express');

const app = express();

const port = 3001;

app.listen(port, function (){
    console.log("Server is running on port 3001");
});

app.get("/", (req,res)=>{
   //When we want to render an html file to a route, we use res.sendFile, which takes in the html file path as a parameter, the __dirname automatically inputs in the current directory path.
    res.sendFile(__dirname + '/index.html');
});