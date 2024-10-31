
const http = require('http');
 const fs = require('fs')
const Port = 3000
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    if (req.url === '/') {
        fs.writeFile('serve.txt', 'Hello iam trying by myself to build a server', (err) => {
            if (err) {
                console.log(`file has few problems: ${err}`);
            } else {
                console.log('File written successfully');
            }
            res.setHeader('Content-Type','text/html')
            res.write('<html>');
            res.write('<head><title>Server</title></head>');
            res.write('<body><h1>Hello iam trying by myself to build a server</h1></body>');
            res.write('</html>');
            return res.end();
        });
    }
})





server.listen(Port || 5000,()=>{
    console.log(`this server is running on http://localhost:${Port}`);
})