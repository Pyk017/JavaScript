const fs = require('fs');

// Synchronous Way of reading file.
// const text = fs.readFileSync("./demoFile.txt", "UTF-8");
// console.log(text);



// Asynchronous way of reading file.
fs.readFile("./colors.json", "utf-8", (err, text) => {
    if (err){
        throw err;
    }
    console.log("file content read!");
    console.log(text, typeof text);
});