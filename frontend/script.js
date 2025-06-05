console.log("Hello World")

var a=5
var b=4
var c= 'Yogesh Awasthi'
console.log(a+b +8 +c)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// const d = 10
// d = d+ 5 // This will cause an error because 'd' is a constant

{
    let a=10
    console.log(a) // This will log 10, as 'a' is block-scoped
}
console.log(a) // This will log 5, as 'a' is function-scoped

let x = 'harry vai'
let y = 'true'
let z = 5
const p = true
const q = 10.5
let r = null
console.log(typeof x) // string
console.log(typeof y) // string
console.log(typeof z) // number
console.log(typeof p) // boolean
console.log(typeof q) // number
console.log(typeof r) // object (null is a special case in JavaScript)
console.log(x,y,z,p,q,r) // logs the values of x, y, z, p, q
console.log(typeof null)


// Object in JavaScript
let emplyoee ={
    name: 'Yogesh',
    age: 20,
    isStudent: true

}
emplyoee.isStudent = false // updating the property
console.log(emplyoee) // logs the object
console.log(emplyoee.age)
console.log(emplyoee)