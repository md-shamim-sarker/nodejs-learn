import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url == "/") {
        try {
            fs.renameSync('demoSync.txt', 'demoSyncNew.txt');
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write('<h1>File Rename Success.</h1>');
            res.end();
        } catch(error) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write('<h1>File Rename Fail.</h1>');
            console.log(error.message);
            res.end();
        }
    }
}).listen(8080);
console.log('Server is created!!');