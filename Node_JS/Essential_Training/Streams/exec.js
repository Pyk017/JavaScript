const cp = require('child_process');

cp.exec("node", (err, data) => {
    if (err){
        throw err;
    } else{
        console.log(data);
    }

});