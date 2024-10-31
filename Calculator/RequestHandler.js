const sumRequest = require("./sum");

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body><h1>Welcome to calculator</h1></body>')
        res.write('</html>');
        return res.end()
    } else if (req.url.toLowerCase() === '/calculator') {
        res.setHeader('Content-Type', 'text/html');

        res.write(
            `<!DOCTYPE html>
             <html lang="en">
            <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Partice set</title>
        </head>
        <body>
        <h1>Here it is your calculator</h1>

        <form action="/calculate-result" method="POST">
         <input type="text" placeholder="First Num"  name="first">
         <input type="text" placeholder="Second Num"  name="second">
         <input type="submit" value="sum">
        </form>
        </body>
        </html>`
        )

        return res.end()
    } else if (req.url.toLowerCase() === '/calculate-result' && req.method == 'POST') {
        res.setHeader('Content-Type', 'text/html');
       return sumRequest(req,res);

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write(`<body>
        <h1>404 page not found</h1>
        <a href="/">Go to home</a>
        </body>`)
    res.write('</html>');
    return res.end()

}

module.exports = requestHandler;