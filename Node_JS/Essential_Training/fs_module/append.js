const fs = require('fs');

const colorData = require('./colors.json');

// fs.appendFile method of fs module append the data to the given file and if file does not exists, it is being created implicitly.

colorData.colorList.forEach(color => {
    fs.appendFile('./colors.md', `${color.color}: ${color.hex} \n`, err => {
        if (err){
            throw err;
        }
    });
});