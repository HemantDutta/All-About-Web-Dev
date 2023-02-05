const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3001;

//if you want to link files like css stylesheets, make sure use app.use to include the path where these files are stored
app.use(express.static(__dirname + "/"));

//To grab information that is posted, we need to use the following statement
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function (){
    console.log("Server is running on port 3001");
});

app.get("/", (req,res)=>{
   //When we want to render an html file to a route, we use res.sendFile, which takes in the html file path as a parameter, the __dirname automatically inputs in the current directory path.
    res.sendFile(__dirname + '/index.html');
});


//Handling Post Requests
//This post request will be made by the form tag in our index.html file, since we used the action="/" and method="post" attributes, making a post request at "/"
app.post("/", (req,res)=>{
    //Body parser is needed for using req.body
    console.log(req.body);

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    res.send(`<div style="background-color: #252525; color: white; height: 100vh; width: 100vw; text-align: center">The Result is: ${num1+num2}</div>`);

});