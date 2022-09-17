import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url === "/") {
        const result = fs.existsSync('home.html');
        if(result) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>True</h1>");
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>False</h1>");
            res.end();
        }
    }
}).listen(8080);
console.log('Server is created!!');