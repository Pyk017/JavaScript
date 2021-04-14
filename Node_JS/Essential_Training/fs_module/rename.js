const fs = require('fs');

// Synchronous version
fs.renameSync('./colors.json', './colorData.json');

// Asynchronous version
fs.rename('./notes.md', '../new_notes.md', err => {
    if (err){
        throw err;
    }
    console.log('rename or replacing completed.');
});

setTimeout(() => {
    fs.unlinkSync('./demoFile.txt'); // used to remove a file
}, 4000);


fs.readdirSync('./storage').forEach(fileName => { // Before removing directory, we remove all the files contained in it.
    fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir("./storage", err => {  // to remove the directory
    if (err){
        throw err;
    }
    console.log('./storage directory removed');
});