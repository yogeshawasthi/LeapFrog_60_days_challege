// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);

//     });

// }


async function getData() {
    
    //simulate get data fom a server
    let x = fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = (await x).json();

   console.log(data);
   return data;
}
async function main() {
    // console.log("Data received:", value);
    // console.log(data);

    console.log("Data loaded successfully!");
    let data = await getData();
    console.log("Processing data...");
    console.log("tast 2 done!");
    console.log("Data received:", data);

}
main()

console.log("Loading data...");



// data.then((value) => {
//     console.log("Data received:", value);
//     console.log(data);

//     console.log("Data loaded successfully!");

//     console.log("Processing data...");
//     console.log("tast 2 done!");
// }





// Example fetch request code
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log("Fetched data:", data))
    .catch(error => console.error("Error fetching data:", error));

