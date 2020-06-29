// In node.js, whenever we want to perform file IO like read to a file or write to a file then we make use of fs module or filesystem module.
var fs = require('fs');
fs.readFile('demo_file.txt', function(err, data){   // This is Asynchrous form of data reading, in which while reading content from the file, the next lines are not being blocked and execution of other lines of code continues.
    if(err){
        console.log(err);
    }
    else{
        console.log("Async data is :- " + data.toString());
    }
});

var data = fs.readFileSync('demo_file.txt');  // This is Synchornus form of data reading in which while reading content form a file it stopped the further execution of code. till it fully reads the file.
console.log("Sync Data is :- "+ data.toString());
console.log('This is the end!');