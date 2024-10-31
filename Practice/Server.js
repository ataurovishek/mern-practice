
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url.toLowerCase() === '/home') {
        res.write('<h1>This is Home</h1>')
        return res.end();
    } else if (req.url === '/men') {
        res.write('<h1>This is Men link</h1>');
        return res.end();
    } else if (req.url.toLowerCase() === '/women') {
        res.write('<h1>This is women link</h1>');
        return res.end();
    } else if (req.url.toLowerCase() === '/kids') {
        res.write('<h1>This is Kids link</h1>');
        return res.end();
    } else if (req.url.toLowerCase() === '/cart') {
        res.write('<h1>This is cart link</h1>')
        return res.end();
    }



    res.write(
        `<!DOCTYPE html>
       <html lang="en">
       <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       </head>
       <body>
    <nav>
        <ul>
         <li><a href="/home">Home</a></li>
         <li><a href="/men">Men</a></li>
         <li><a href="/women">Women</a></li>
         <li><a href="/kids">Kids</a></li>
         <li><a href="/cart">Cart</a></li>
        </ul>
    </nav>
    
     </body>
     </html>`)

    res.end()
})

const Port = 3000;

server.listen(Port, () => {
    console.log(`this server is running on port http://localhost:${Port}`);

})