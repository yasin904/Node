// const circleModule = require('./modules/circle')

// const squareModule = require('./modules/square')

// console.log(circleModule.circleArea(10));
// console.log(circleModule.circleCircumference(10));

// console.log(squareModule.AreaofSquare(10));
// console.log(squareModule.PerimeterofSquare(10));


// const fs = require("fs");

// const filePath = 'dummy.txt';

// const data = "Hello World";

// fs.writeFile(filePath,data,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file created");
// });

// const fs = require("fs");

// filepath = "hello.txt";

// fs.readFile(filepath,(err,data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.method);
    // res.end('end the server');
if(req.url == '/'){
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(`<html>
    <title>HOME PAGE</title>
    <h2>welcome to home page</h2>
    <p>This page is for study purpose</p>
    </html>`);
    res.end();
}
else if(req.url == '/about'){
    res.end('this is the about page');

}
else if(req.url == '/contact'){
    res.end('this is the contact page');
    

}
else if(req.url == '/api/users'){
    const users = [
        {name : "yasin",age:24},
        {name : "anupam", age:24},
        {name : "Sreeraj",age:24}
    ];
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(JSON.stringify(users));

}
else{
    res.writeHead(404,{"Content-type" :"html/text" });
    res.end('<h1> error 404, page not found</h1>');
}
});
const port = 5001;

server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})