const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(content);
    });
});

const port = process.env.PORT || 3000;

server.listen(port);