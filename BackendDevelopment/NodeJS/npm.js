//Importing an external package
//Make sure to first install it using npm install or npm i
const superheroes = require("superheroes");
let shName = superheroes.random();
console.log(shName);

//Now, I'll try to install another package and try it out
//I will use random-words packages
//I will first install it using npm i random-words
//Now, we will import it
const rw = require("random-words");

let wordString = rw({exactly: 100, join: ' '});
console.log(wordString.split(' '));

//This is exactly what I needed ;)