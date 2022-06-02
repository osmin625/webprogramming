var http=require('http');

http.createServer(function(req,res){
    res.write("hello World!");
    res.end();
}).listen(8081);

console.log("server running at http://127.0.0.1:8081/");