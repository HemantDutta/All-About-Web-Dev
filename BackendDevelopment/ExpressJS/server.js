//First install express, npm install express
//Now Require Express
const express = require('express');

//Declare a constant express app
const app = express();

//Now add a post to listen on
const port = 3000;

//The function passed here will be executed when the server starts running successfully!
app.listen(port, function (){
    console.log("Server is running on port 3000");
});


//Handling Get Requests
app.get("/", (req,res)=>{
   res.send('<h1>Hello Universe!</h1>')
});

