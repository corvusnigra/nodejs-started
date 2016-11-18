var express = require('express');

var app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.end('Hello world !')
});

app.listen(3000, 'localhost', ()=>{
    console.log('Сервер запущен порт 3000')
});