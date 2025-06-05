console.log("Hellow ")

let age = 18;
let grace = 2;


console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age ** grace)


//conditionls

if((age+grace)>18){
    console.log("You can drive");
}else{
    console.log("YOu cannot drive");
}


//operator

console.log(age % grace)

age+=grace// 45 + 2
console.log(age)


// = = is to check if it is equal to or not

let umar = 18
if(!umar==18){
    console.log("YOur age is not 18")
    

}else{
    console.log("you are 18 and can drive if you have a car")
}

// let marks = Number( prompt("Enter a number"));
// if(marks>90 && marks<=100){
//     console.log("A+")
// }else if(marks>80 && marks<=90){
//     console.log("B+")
// }else {
//     console.log("Ok Ok ")
// }


//ternary Operator


let a = 6
let b = 8


let c=a>b?(a-b):(b-a) // when a>b the do a-b else do b-a 

 console.log(c)
let d= a>b>c ?(a**2):(b**2)

console.log(d)

