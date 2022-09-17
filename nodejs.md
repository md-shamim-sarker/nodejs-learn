# Nodejs Note

## Create a http server
### Understandable Process
```js
import {createServer} from 'http';

const display = (req, res) => {
    res.end("Hello World!");
};
const server = createServer(display);
server.listen(5050);
console.log("Server is created.");
```
### Real Process
```js
import {createServer} from 'http';

createServer((req, res) => {
    res.end('Hello World!');
}).listen(5050);
console.log('Server is created!!');
```

## Generate Request-Response
```js
import {createServer} from 'http';

createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is Home Page</h1>');
        res.end();
    } else if(req.url === "/about") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is About Page</h1>');
        res.end();
    } else if(req.url === "/contact") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>This is Contact Page</h1>');
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Error Code: 404; Not Found!!</h1>');
        res.end();
    }
}).listen(5050);
console.log('Server is created!!');
```

## Split a URL into Different Parts
```js
import {createServer} from 'http';
import URL from 'url';

createServer((req, res) => {
    const myUrl = 'https://shamim.com/blog.html?year=2022&month=september';
    const myUrlObj = URL.parse(myUrl, true);

    const protocol = myUrlObj.protocol;
    const host = myUrlObj.host;
    const pathName = myUrlObj.pathname;
    const search = myUrlObj.search;
    const href = myUrlObj.href;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <h2>Protocol: ${protocol}</h2>
        <h2>Host: ${host}</h2>
        <h2>Pathname: ${pathName}</h2>
        <h2>Search: ${search}</h2>
        <h2>Href: ${href}</h2>
    `);
    res.end();
}).listen(5050);
console.log('Server is created!!');
```

## Read From Physical File
### Asynchronous Way
```js
import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url = "/") {
        fs.readFile("home.html", (error, data) => {
            if(!error) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('<h1>404, Not Found!!</h1>');
                console.log(error.message);
                res.end();
            }
        });
    }
}).listen(8080);
console.log('Server is created!!');
```
### Synchronous Way
```js
import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url = "/") {
        try {
            const data = fs.readFileSync("homes.html");
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } catch(error) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>404, Not Found!!</h1>');
            console.log(error.message);
            res.end();
        }
    }
}).listen(8080);
console.log('Server is created!!');
```

## Create And Write A Physical File
### Asynchronous Way
```js
import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url = "/") {
        fs.writeFile('demoAsync.txt', 'Welcome to async writeFile.', error => {
            if(!error) {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write('<h1>File Write Success.</h1>');
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write('<h1>File Write Fail.</h1>');
                console.log(error.message);
                res.end();
            }
        });
    }
}).listen(8080);
console.log('Server is created!!');
```

### Synchronous Way
```js
import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url = "/") {
        try {
            fs.writeFileSync('demoSync.txt', 'Welcome to File Sync');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>File Write Success.</h1>');
            res.end();
        } catch(error) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>File Write Fail.</h1>');
            console.log(error.message);
            res.end();
        }
    }
}).listen(8080);
console.log('Server is created!!');
```

## Rename A Physical File

### Asynchronous Way
```js
import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url == "/") {
        fs.rename('demoSync.txt', 'demoSyncNew.txt', error => {
            if(!error) {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write('<h1>File Rename Success.</h1>');
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write('<h1>File Rename Fail.</h1>');
                console.log(error.message);
                res.end();
            }
        });
    }
}).listen(8080);
console.log('Server is created!!');
```

### Synchronous Way
```js
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
```

## Delete A Physical File

### Asynchronous Way 
```js
import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url == "/") {
        fs.unlink('demoAsync.txt', error => {
            if(!error) {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("<h1>File Delete Success.</h1>");
                res.end();
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("<h1>File Delete Fail.</h1>");
                console.log(error.message);
                res.end();
            }
        });
    }
}).listen(8080);
console.log('Server is created!!');
```
### Synchronous Way 
```js
import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url == "/") {
        try {
            fs.unlinkSync('demoSyncNew.txt');
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>File Delete Success.</h1>");
            res.end();
        } catch(error) {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>File Delete Fail.</h1>");
            console.log(error.message);
            res.end();
        }
    }
}).listen(8080);
console.log('Server is created!!');
```

## Exists A Physical File

### Asynchronous Way
```js
Asynchronous Way Is Obsolete Now
```
### Synchronous Way
```js
import {createServer} from 'http';
import fs from 'fs';

createServer((req, res) => {
    if(req.url == "/") {
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
```