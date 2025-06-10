// Array in javascript

 let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 console.log(marks[0])
 console.log(marks[1])

 console.log(marks.length)

 marks[0]=4238; //mutable can be changed after definition of array
 console.log(marks)
 

 console.log(marks,typeof marks)

console.log(marks.toString); //convert to string

console.log(marks.join(" and "))

a = [11,2,9,24,15]
a.pop()
a.push(100)
a.push("harry")
console.log(a)
console.log(a.length)
a.sort();
console.log(a)
a.splice(0,3) //remove 3 elements from index 0
console.log(a)

a.splice(1,3,333,223,111) //remove 3 elements from index 1 and add 333,223,111
console.log(a)
a.forEach((value, index, a) => {
	// You can add your logic here, for example:
	console.log(value, index, a);
});