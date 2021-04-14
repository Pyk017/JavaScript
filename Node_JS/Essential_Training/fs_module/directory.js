const fs = require('fs');

if (fs.existsSync("storage-files")){
    console.log("Already Exists!")
}
else{
        fs.mkdir("storage-files", err => {      
        if(err){
            throw err;
        }
        console.log('Directory created');
    });
}

// fs.mkdir("storage-files", err => {      // directory already exists then throws an error.
//     if(err){
//         throw err;
//     }
//     console.log('Directory created');
// });