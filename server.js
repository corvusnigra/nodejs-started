var http = require('http');
var static = require('./static.js');

http.createServer(function (req, res) {
    
    if(static.canHandleRequest(req)){
    static.serveStaticContent(req, res);
        
        return
    }
    res.end('Hello World');
}).listen(3000,'localhost',()=>{
   console.log(`Server listening on localhost port 3000`)
});