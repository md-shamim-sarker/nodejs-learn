import {createServer} from 'http';
import URL from 'url';

createServer((req, res) => {
    const myUrl = 'http://shamim.com/blog.html?year=2022&month=september';
    const myUrlObj = URL.parse(myUrl, true);
    const myStr = JSON.stringify(myUrlObj);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(myStr);
    res.end();
}).listen(5050);
console.log('Server is created!!');