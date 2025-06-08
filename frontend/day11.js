// console.log("Hello form this side")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// // third box to red
// boxes[2].style.backgroundColor = "red"
// boxes[3].style.backgroundColor = "red"
// boxes[2].style.backgroundColor = "red"


// // can use to change the color of the box with id red
// document.getElementById("red").style.backgroundColor = "green"
// document.getElementById("yellow").style.backgroundColor = "yellow"

// document.querySelector(".box").style.backgroundColor = "pink"//frist one will be selected

document.querySelectorAll(".box").forEach((element) => {
    element.style.backgroundColor = "blue"
});

e = document.getElementsByTagName("div");
e[4].closest("#redbox")
console.log
