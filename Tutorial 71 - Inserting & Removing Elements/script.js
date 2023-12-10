console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".container").innerHTML)

console.log(document.querySelector(".box").outerHTML)
console.log(document.querySelector(".container").outerHTML)


console.log(document.querySelector(".box").innerText)
console.log(document.querySelector(".container").innerText)

console.log(document.querySelector(".box").outerText)
console.log(document.querySelector(".container").outerText)


console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)
console.log(document.body.children[0].childNodes[0].nodeName)

console.log(document.querySelector(".container").textContent)
console.log(document.querySelector(".container").hidden)
// console.log(document.querySelector(".container").hidden = true)


console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").setAttribute("style", "display: inline;"))


console.log(document.querySelector(".box").attributes)
// console.log(document.querySelector(".box").removeAttribute("style"))

// console.log(document.designMode = "on")

console.log(document.querySelector(".box2").dataset)


let div = document.createElement("div")
div.innerHTML = "I was inserted by <b>Akash</b>"
div.setAttribute("class", "inserted")

document.querySelector(".container2").append(div)
// document.querySelector(".container2").prepend(div)
// document.querySelector(".container2").before(div)
// document.querySelector(".container2").after(div)
// document.querySelector(".container2").replaceWith(div)


// document.querySelector(".container2").insertAdjacentHTML("beforebegin", "<div>Yo Whassup</div>")

// document.querySelector(".container2").insertAdjacentElement("afterbegin", div)

// document.querySelector(".container2").insertAdjacentText("afterend", "Hey there, buddy")


// document.querySelector(".container").remove()


console.log(document.querySelector(".container2").classList)
console.log(document.querySelector(".container2").className)


console.log(document.querySelector(".container2").classList.add("newclass"))
console.log(document.querySelector(".container2").classList.remove("newclass"))
console.log(document.querySelector(".container2").classList.toggle("newclass"))
console.log(document.querySelector(".container2").classList.toggle("newclass"))


console.log(document.querySelector(".container2").classList.contains("bg-black"))