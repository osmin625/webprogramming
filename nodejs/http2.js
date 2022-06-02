var http= require('http')
var dt = require('./myfirstmodule');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-type':'text/plain; charset=utf-8'})
    res.write("The date and time are currently: "+dt.myDateTime());
    res.end();
}).listen(8080);