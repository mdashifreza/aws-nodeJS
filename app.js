const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end("heelo aws program");
})
let port = 8971;
server.listen(port,()=>{
    console.log(`server is runnning at ${port}`);
})