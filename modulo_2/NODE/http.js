const { createServer } = require('node:http');

// const hostname = '192.168.52.0';
// const port = 1234;

// const server = createServer((req,res) => {
//     res.statusCode  = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello word');
// });

// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}/`);
// });


const hostname = '192.168.52.0';
const port = 1234;

const server = createServer((req,res) => {
    res.statusCode  = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello word');
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});