// function greeting(cb){
//     console.log("hello");
//     console.log("I am inside greeting function");

//    cb();
// }

// function abc(){
//     console.log("I am at the end");
// }

// greeting(abc);

const a = () =>{
console.log("hi");
b();
}

const b = () =>{
    setTimeout(() =>{
        console.log("Hey")
    },2000);
    c();
    
}

const c = () =>{

    console.log("hello");
    
}

console.log(a());