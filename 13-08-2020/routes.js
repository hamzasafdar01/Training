const fs = require('fs');

const requestHandler =(req,res) => {
    if (req.url === '/'){
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>JS APP</title></head>');
        res.write('<body><form action= "/message" method="POST"><input type ="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/message' && req.method === 'POST'){
        const body =[];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
            console.log(body);
        });
        
        return req.on('end', ()=>{
            const parsedData = Buffer.concat(body).toString();
            console.log(parsedData);
            fs.writeFile('message.txt',parsedData, (err) =>{
                res.statusCode =302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    res.setHeader('content-type', 'text/html'),
    res.write('<html>');
    res.write('<head><title>Node JS Page</title></head><body><h1>Hello from Node Server</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: requestHandler,
    text: "some hard coded text",
}

//another way of doing the same thing
// module.exports.handler = requestHandler;
// module.exports.text = "some hardcoded text";
