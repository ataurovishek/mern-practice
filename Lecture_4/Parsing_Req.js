
const http = require('http');
const file = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // process.exit()   //stops event loop;

    // res.setHeader('Content-Type','json');

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter your detail</title></head>');
        res.write('<body><h1>Enter Your Detail</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter Your name"> <br>')
        res.write('<label for="male">Male</label>')
        res.write('<input id="male" type="radio" name="gender" value="Male">')
        res.write('<label for="female">Female</label>')
        res.write('<input id="female" type="radio" name="gender" value="Female">')
        res.write('<input type="submit" value="Submit">')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>');
        return res.end();

    } else if (req.url.toLowerCase() === '/submit-details' && req.method == "POST") {

        const Body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            Body.push(chunk)
        })

        req.on('end', () => {
            const fullbody = Buffer.concat(Body).toString()
            console.log(fullbody);

            const params = new URLSearchParams(fullbody)

            // const bodyObj = {};

            // for (const [key, val] of params.entries()) {
            //     bodyObj[key] = val;
            // } 

            // instead of running a loop we can use fromEntries method

            const newparam = Object.fromEntries(params)
            console.log(newparam);
            file.writeFile('user.txt', JSON.stringify(newparam));
        })



        res.statusCode = 302;
        res.setHeader('Location', '/')
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