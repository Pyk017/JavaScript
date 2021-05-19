const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

// Create and Write to file.
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', err => {
//     if(err) throw err;
//     console.log("File Written to....");

// });

// Appending the content of the file. appendFile is inside of writeFile because it is an asynchronous function call.
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', err => {
//     if(err) throw err;
//     console.log("File Written to....");

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love NodeJS', err => {
//     if(err) throw err;
//     console.log("File Written to....");
//     });

// });


// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})


//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello2.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed ...');
    }    
);