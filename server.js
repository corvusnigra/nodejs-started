var http = require('http');

http.createServer(function (req, res) {

    res.end('Hello world!')

}).listen(3000,'localhost',()=>{
   console.log(`Server listening on localhost port 3000`)
});