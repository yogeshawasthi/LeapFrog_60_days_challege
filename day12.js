
console.log("Harry is hecker")
console.log("Harry is hacker")

setTimeout(() => {
    console.log("This is a setTimeout 2")
}, 2000);
setTimeout(() => {
    console.log("This is a setTimeout 1")
}, 1000);
console.log("This End")

//call back function


loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")


//promise

console.log("This is a promise example")

let myPromise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

myPromise.then((message) => {
    console.log("This is in then " + message);
}).catch((message) => {
    console.log("This is in catch " + message);
}).finally(() => {
    console.log("This is in finally");
});



console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})

 
let p3 = Promise.all([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
