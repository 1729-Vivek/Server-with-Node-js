const http=require('http')

const PORT=3032;

const HOSTNAME='localhost';

const server=http.createServer((req,res)=>{


    if(req.url==="/")
    {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Welcome to Node JS Server by Vivek Kumar');
    }
    else if(req.url==="/about")
    {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('About Page');
    }
    else if(req.url==="/contact")
    {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Contact Page!');
    }
    else if(req.url==="/product")
    {
        const options={
            hostname:'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        }
        
        
        const apireq=http.request(options,(apiRes)=>{
            apiRes.on("data",(data)=>{
                res.statusCode=200;
                 res.setHeader('Content-Type','application/json');
                  res.end((data.toString()))
            })
        })
        
        
        apireq.on("error",()=>{
            console.log(e);
        })
        
        apireq.end();
        
    }
    else{
        res.statusCode=500;
        res.setHeader('Content-Type','text/plain');
        res.end('Error!')
    }

    // res.statusCode=500;
    // res.setHeader('Content-Type','application/json');
    // res.end(JSON.stringify({error:"Server Error!"}))


    // res.statusCode=200;
    // res.setHeader('Content-Type','text/plain');
    // res.end('Node Server created by  Vivek!');
})

server.listen(PORT,()=>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
})