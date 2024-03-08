const http=require('http');

const options={
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}


const apireq=http.request(options,(apiRes)=>{
    apiRes.on("data",(data)=>{
        console.log(data.toString());
    })
})


apireq.on("error",()=>{
    console.log(e);
})

apireq.end();