const http=require("node:http");

const port=3000; //port declaration

const host="localhost"; //host name declaration

//create server with http.createServer

const server=http.createServer((req,res)=>{
    //conditional statement for handling route

    if(req.url==="/")
    {
        res.write("Hello , world!");
        res.end();
    }
    else if(req.url==="/about")
    {
        res.write("Hello Vivek here ")
        res.end();
    }
    else if(req.url==="/contact")
    {
        res.write(",Contact me : 7783818397");
        res.end();
    }
    else {
        res.write("Page not found");
        res.end();
    }
})

//server listen on port

server.listen(port,()=>{
    console.log(`Server up at ${host}:${port}`);
})
