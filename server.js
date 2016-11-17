var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    if(req.url.startsWith('/static/')){
        fs.readFile(req.url.substr(1), (err, data)=>{
            if(err){
                console.log(`Error file not found ${err}`);
                res.statusCode = 404;
                res.end();
                return
            }

                res.end(data);

        })
        return
    }
    res.end('Hello World');
}).listen(3000,'localhost',()=>{
   console.log(`Server listening on localhost port 3000`)
});