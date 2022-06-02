var fs = require('fs');
fs.writeFile('input.txt','Simply Easy Learning!', function(err){
    if(err){
        return console.error(err);
    }
    console.log("data written successfully!");
    fs.readFile('input.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log(data.toString());
    });
});