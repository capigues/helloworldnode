"use strict";
exports.__esModule = true;
var fs = require('fs');
var path = require('path');
var http = require('http');
var server = http.createServer(function (req, res) {
    fs.readFile(path.join(__dirname, 'index.html'), function (err, content) {
        if (err)
            throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
});
var port = process.env.PORT || 3000;
server.listen(port);
