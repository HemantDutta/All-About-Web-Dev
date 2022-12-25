//Importing native node module fileSystem
const fs = require("fs");

//Importing file into project, copying source file into a new file
fs.copyFileSync('file1.txt', 'file2.txt');
//Before execution, make sure your terminal's path is set to the directory where your source file resides
//After execution, a new 'file2.txt' will be created with the same content as file1.txt, if file2.txt already exists, it will be overwritten