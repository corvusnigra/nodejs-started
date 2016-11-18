var http = require('http');
var staticContent = require('./static.js').serveStaticContent;
var canHandleRequest = require('./static').canHandleRequest;

http.createServer(function (req, res) {
    
    if(canHandleRequest(req)){
        staticContent(req, res);
        
        return
    }
    res.end('Hello World');
}).listen(3000,'localhost',()=>{
   console.log(`Server listening on localhost port 3000`)
});