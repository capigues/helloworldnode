var fs = require('fs');
var path = require('path');
var http = require('http');
var server = http.createServer(function (req, res) {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), function (err, content) {
        if (err)
            throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
});
server.listen(3000);
