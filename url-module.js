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