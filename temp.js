// const a =()=>{
//     console.log("Hey A");
//     b();
// };

// const b = () =>{
//     console.log("Hey B");
//     setTimeout(()=>{
//         console.log("Hey C");
//     },2000);
//     c();
// }

// const c =(cb)=>{
//     console.log("Hey D");
// };

// c(a);

// const eventEmitter = require('events');

// const myEmitter = new eventEmitter();

// myEmitter.on("new Sale",()=>{
//     console.log("There is a new sale");
// })

// myEmitter.on("new Message",()=>{
//     console.log("There is a new message");
// })

// myEmitter.emit("new Sale");
// myEmitter.emit("new Message");

const fs = require('fs');

const readableStream = fs.createReadStream(`input.txt`,"utf-8");

readableStream.on("data",(chunk)=>{
    console.log(chunk);
});

readableStream.on("end",()=>{
    console.log("finished");
})

const writeableStream = fs.createWriteStream(`output.txt`);

writeableStream.write("This is the output file");

writeableStream.write(input.txt);


