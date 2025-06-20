let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{// this runs even if try block returns something and same for catch block
        // it used in fucntion to run some code even if try or catch block fails or pass
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()
// console.log(C)


try{
    console.log("the sum is ",sum*x)
}catch(error){
    console.log("error ayyo vai bhag")
}