var fs = require('fs');
fs.appendFile('mynewfile1.txt','hello content!', function(err){
    if(err) throw err;
    console.log('Saved!');
})