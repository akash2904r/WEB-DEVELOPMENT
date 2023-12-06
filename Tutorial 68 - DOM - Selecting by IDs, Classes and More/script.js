console.log("This tutorial teaching us how to target an element through its ID, Class and more")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "black"
// boxes[2].style.color = "cyan"


// document.getElementById("black").style.backgroundColor = "black"
// document.getElementById("black").style.color = "cyan"


// document.querySelector(".box").style.backgroundColor = "black"
// document.querySelector(".box").style.color = "cyan"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "black"
    e.style.color = "cyan"
})

console.log(document.body.children[0].getElementsByTagName("div"))

console.log(document.getElementsByName("Ami"))

console.log(document.body.children[0].children[5].matches(".box"))
console.log(document.body.children[0].children[2].matches("#black"))
console.log(document.body.children[0].children[3].matches("#black"))
console.log(document.body.children[0].children[3].matches("div"))


console.log(document.body.children[0].children[5].closest(".box"))
console.log(document.body.children[0].children[5].closest("body"))



console.log(document.querySelector(".container").contains(document.querySelector(".box")))

console.log(document.querySelector(".container").contains(document.querySelector("div")))

console.log(document.querySelector(".container").contains(document.querySelector("#black")))

console.log(document.querySelector(".container").contains(document.querySelector("body")))

console.log(document.querySelector("body").contains(document.querySelector(".container")))