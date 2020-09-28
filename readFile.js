const fs = require('fs');

fs.readFile('./lorem-ipsum.txt','utf8',(err,data) => { //(err/data) is an asycnhronous function (callback)
    if (err){
        return console.log(err);
    }

    console.log(data);
});

fs.rename('./lorem-ipsum.txt','./gibberish.txt',() => {
    console.log("\nFile Renamed\n");
});