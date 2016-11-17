var http = require('http');

http.createServer(function (req, res) {
    console.log(`Incoming url ${req.url}`);

    res.end('Hello world!')

}).listen(3000,'localhost',()=>{
   console.log(`Server listening on localhost port 3000`)
});