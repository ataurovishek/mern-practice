
// this express() method is an external module that is used to create a new express application
import express from 'express';

const App = express();


// App.use("/",(req,res,next)=>{
// console.log('this is middleware',req.method,req.url);
// next()
// })

// App.post("/submit-details",(req,res,next)=>{
// console.log('this is middleware 2',req.method,req.url);
// res.send('<p>this is the ultimate middleware....</p>')
// })


// now we need to taste how does middleware work for method 

App.get('/',(req,res,next)=>{
    console.log('this is just middleware');
    next()
})

App.post('/submit-details',(req,res,next)=>{
    console.log('this is second middleware');
    res.send('<p>welcome to the ...</p>')
})


App.use('/',(req,res,next)=>{
    console.log('this is from another middleware');
   res.send('<p>came from another middleware</p>')
})


const port = 3000;

App.listen(port,()=>{
    console.log(`this server is running on port ${port}`);
    
})