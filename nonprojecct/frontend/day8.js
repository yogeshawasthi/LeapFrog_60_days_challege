console.log("Code with harry is amaing")


// Function in JavaScript

function nice(name) {
    console.log("hey " + name + " how are you?");
    console.log("Hey " + name + " have a nice day!");

}

nice("Yogesh");
nice("Bhatzzi")

// Function with return value
function sum(a, b) {
    return a + b;
}

 result = sum(3,7)
 result2 = sum(5, 10)
 result3 = sum(100, 200)

 console.log(result);  
 console.log(result2); 
 console.log(result3); 

// console.log(sum(3, 7)); // This will log 10
console.log(result); // This will log 10 as well, since result holds the return value of sum(3, 7)


// Function with default parameters
function summ (a,b,c=4){
    return a + b + c;
}
console.log(summ(3, 7)); // This will log 14, as c defaults to 4
console.log(summ(3, 7, 5)); // This will log 15, as c is explicitly set to 5


//arrow back function in javascript

const func1 = (x)=>{
    console.log("I am an  arrow function",x);
}


func1("Yogesh"); // This will log "I am an arrow function Yogesh"
func1(5);


const add = (a,b) =>{
    console.log("sum is ",a+b)
}

//one liner arrow back function
const addv2 = (a,b)=> a+b;
console.log(addv2(100,100))

add(5,2);