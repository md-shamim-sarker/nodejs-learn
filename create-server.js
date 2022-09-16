/* import {createServer} from 'http';

const display = (req, res) => {
    res.end("Hello World!");
};
const server = createServer(display);
server.listen(5050);
console.log("Server is created."); */

import {createServer} from 'http';

createServer((req, res) => {
    res.end('Hello World!');
}).listen(5050);
console.log('Server is created!!');