const http =  require('http');
let req,res =0;
const server = http.createServer((req, res) => {
    console.log(req.headers);

    res.setHeader('content-type', 'text/html'),
    res.write('<html>');
    res.write('<head><title>Node JS Page</title></head><body><h1>Hello from Node Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);