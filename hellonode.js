// load HTTP module
const http = require('http');
const hostname = '127.0.0.1';
const  port = 3000;

//create HTTP server and listen on port 3000 for requests
const server = http.createServer(
    (req, res) => {
        // set the response HTTP header with HTTP status and content type
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, world!');

    }
);

//listen for requests on port 3000 and as a callback function
//have the port listened logged

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`)});
