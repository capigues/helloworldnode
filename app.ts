import { pathToFileURL } from "url";
const fs = require('fs');
const path = require('path');
const http = require('http');



const server = http.createServer((req,res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
});

const port = process.env.PORT || 3000;
server.listen(port);