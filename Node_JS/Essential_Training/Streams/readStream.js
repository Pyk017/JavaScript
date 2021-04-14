const fs = require('fs');

const readStream = fs.createReadStream('../fs_module/demoFile.txt', "UTF-8");

console.log("type something...");
readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`);
    process.exit();
})

readStream.once("data", data => {
    console.log(data);
});

readStream.on('end', () => {
    console.log("finished reading file");
})