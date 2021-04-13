const fs = require('fs');

// Synchronously reading of files.
// console.log("started reading files")
// const files = fs.readdirSync('./');
// console.log("complete")


// Asynchronously reading of files.
console.log("started reading files")
fs.readdir('./', (err, files) => {
    if (err){
        throw err;
    }
    console.log("complete")
    console.log(files);
});
console.log('test');