//First do npm init to create a package.json
//Second, Install Express
//Now, Import Express
const express = require('express');
const https = require('https');

//Now, create an express app
const app = express();

//Mention Directory where resources like stylesheets and scripts are
// app.use(express.static(__dirname + "/"));

//Establish a port where the server will listen
const port = 3003;
app.listen(port, ()=>{
    console.log('Server is running on port 3003');
});

//Get Request Handling
app.get("/", (req,res)=>{

    // res.sendFile(__dirname + "/index.html");

    //Fetch API Data
    const url = "https://www.boredapi.com/api/activity/";
    https.get(url, (resp)=>{
        resp.on("data", (data)=>{
            let act = JSON.parse(data)
            console.log(act);
            let actName = act.activity;
            let actPart = act.participants;
            let actPrice = act.price;

            //We can only use on res.send in a GET request, but we can use multiple res.write() requests and res.send() at the end to send all the written text
            res.write('<h1>Activity Name: ' + actName);
            res.write('<h1>Participants needed: ' + actPart);
            res.write('<h1>Price: $' + actPrice);
            res.send();
        });
    });
});
