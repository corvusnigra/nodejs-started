var fs = require('fs');

function canHandleRequest(req) {
    return req.url.startsWith('/static/');
}

exports.canHandleRequest = canHandleRequest;

function serveStaticContent(req, res) {
    fs.readFile(req.url.substr(1), (err, data)=>{
        if(err){
            console.log(`Error file not found ${err}`);
            res.statusCode = 404;
            res.end();
            return
        }

        res.end(data);

    })
}
exports.serveStaticContent = serveStaticContent;
    
