const fs = require('fs');

const writeStream = fs.createWriteStream('./myFile.txt');


process.stdin.on("data", data => {
    writeStream.write(data);
});

// above functionality can also be done using 
// process.stdin.pipe(writeStream);

// writeStream.write("hello");
// writeStream.write('world\n');