const http = require('http');

const server = http/createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if(req.method === 'OPTIONS'){
        res.writeHead(200);
        res.end();
        return;
    }

    res.setHeader("Content-Type", "text/plain");

    const parsedUrl = url.parse(req.url, true),
        { query, pathname } = parsedUrl;
})

server.listen(port, (error) => {
    error ? console.log(error) : console.log('Server create')
})