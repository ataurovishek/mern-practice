import express from 'express';
import bodyParser from 'body-parser';
const app = express();


app.use((req, res, next) => {
    console.log("First dummy middleware", req.path, req.method);
    next()
})
app.use((req, res, next) => {
    console.log("second dummy middleware", req.path, req.method);
    next()
})

// app.use((req, res, next) => {
//     console.log("third dummy middleware",req.path,req.method);
//     res.send('<h1>This is final output</h1>')
// })


app.get('/', (req, res, next) => {
    console.log('Handling slash for get');
    res.send('<h1>Welcome to kg coding</h1>')
})



app.get('/contact-us', (req, res, next) => {
    console.log('Handling slash for contact-us');
    res.send(`
        <h1>please give your details here</h1>
        <form action="/contact-us" method="POST">
        <input type='text' name="name" placeholder="Enter your name"/>
        <input type='email' name="email" placeholder="Enter your email"/>
        <input type="Submit"/>
        </form>`)
})

app.post("/contact-us", (req, res, next) => {
    console.log('Handling /contact-us for POST', req.url, req.method, req.body);
    next()
})
app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    console.log('Handling /contact-us for POST', req.url, req.method, req.body);
    res.send(`<h1>We will handle it shortly</h1>`)
})
const port = 3000;
app.listen(port, () => {
    console.log(`this post is listening on port http://localhost:${port}`);
})