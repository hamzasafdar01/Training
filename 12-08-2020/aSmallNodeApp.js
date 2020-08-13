const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>JS APP</title></head>');
        res.write('<body><form action= "/message" method="POST"><input type ="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if (req.url === '/message' && req.method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode =302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.setHeader('content-type', 'text/html'),
    res.write('<html>');
    res.write('<head><title>Node JS Page</title></head><body><h1>Hello from Node Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);