const http = require('http');
const requestHandler = require('../Calculator/RequestHandler');


const server = http.createServer(requestHandler)


const PORT = 3001;

server.listen(PORT, () => {
    console.log(`The Server has been started and running on http://localhost:${PORT}`);
})
