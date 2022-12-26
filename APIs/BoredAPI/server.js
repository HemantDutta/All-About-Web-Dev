//First do npm init to create a package.json
//Second, Install Express
//Now, Import Express
const express = require('express');

//Now, create an express app
const app = express();

//Establish a port where the server will listen
const port = 3003;
app.listen(port, ()=>{
    console.log('Server is running on port 3003');
});

//Get Request Handling
app.get("/", (req,res)=>{

});
