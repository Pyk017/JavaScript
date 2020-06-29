// Streams are nothing but unix pipes that allow us to read data from a source and then pipe that data to a destination
// There are three types of streams.
// Readable stream let us read data from a source and another is writable stream that lets you to write data to a destination.
// To use steams we use fs module

var fs = require('fs');

var readableStream = fs.createReadStream('demo_file.txt');
var data = '';
readableStream.setEncoding('UTF8'); 
readableStream.on('data', function(chunk){   // This is asynchronus file reading.
    data += chunk;
}); // readable stream are event emitter as well.

readableStream.on('end', function(){
    console.log(data);
});


var writeData = 'Hello World!';
var writableStream = fs.createWriteStream('output.txt');
writableStream.write(writeData, 'UTF8');
writableStream.end();
writableStream.on('finish', function(){
    console.log("Write Completed.");
});
