console.log("This is all about Loops")

let a = 1;
// console.log(a, a + 1, a + 2);

// Using a for loop to print numbers from 0 to 100


//for loop
for (let i = 1; i < 100; i++) {
    console.log(a + i);
}
//for in loop
// This will iterate over the properties of an object

let obj = {
    name: "Yogesh",
    age: 22,
    city: "Nepal Mahendranagar",
};

for (const key in obj) { // This will iterate over the keys of the object
    {
        console.log(key);

    }
}

//for of loop
for (const c of "Yogesh") {// This will iterate over each character in the string "Yogesh"
    console.log(c);
}

for (const element of "Hey Hellow HOw are you") {
    console.log(element);

}


let j = 0

while (j < 6) {
    console.log(j);
    j++;
}

// do while loop
let i= 10;
do {
    console.log(i);
    i++;  // This will execute at least once even if the condition is false
    // because the condition is checked after the first iteration
    
} while (i < 6);