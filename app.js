var path = require('path');
var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res) {
    fs.readFile(path.join(__dirname, 'index.html'), function (err, content) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
});
var port = process.env.PORT || 3000;
server.listen(port);
