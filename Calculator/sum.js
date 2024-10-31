const sumRequest = (req, res) => {
    console.log('in sum request handler', req.url);

    const body = [];
    req.on('data', chunk => body.push(chunk))
    req.on('end', () => {
        const bodystr = Buffer.concat(body).toString();
        const param = new URLSearchParams(bodystr);
        const bodyobj = Object.fromEntries(param);

        const result = Number(bodyobj.first) + Number(bodyobj.second)
        console.log(result);
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
        <head><title>Calculator</title></head>
        <body>
        <h1>Your result is ${result}</h1>
        </body>
        </html>`)
        return res.end()
    }) 
}

module.exports = sumRequest


// libuv 