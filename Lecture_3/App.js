// here http is a core module of node js 

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);
    // process.exit()   //stops event loop;

    // res.setHeader('Content-Type','json');

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete coding</title></head>');
        res.write('<body><h1>Hello its me ataur rahman</h1></body>')
        res.write('</html>');
        return res.end();

    } else if (req.url === '/product') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Completre coding</title></head>');
        res.write('<body><h1>hi iam product</h1></body>')
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello Annonymous</title></head>');
    res.write('<body><h1>Hello its me ataur rahman</h1></body>')
    res.write('</html>');
    res.end();

})

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`this server is running on port http://localhost:${PORT}`);
})