let button = document.getElementById("btn")

button.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "cyan"
})

// button.addEventListener("dblclick", ()=> {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// })

// button.addEventListener("contextmenu", ()=> {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// })

// button.addEventListener("mousedown", ()=> {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// })

button.addEventListener("mouseenter", ()=> {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
})

// button.addEventListener("mouseleave", ()=> {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// })

// button.addEventListener("mouseover", ()=> {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// })

// button.addEventListener("mouseout", ()=> {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// })

// button.addEventListener("mouseup", ()=> {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// })

button.addEventListener("keypress", ()=> {
    document.body.style.backgroundColor = "blue"
    document.body.style.color = "white"
})

document.body.addEventListener("keydown", (e)=> {
    document.body.style.backgroundColor = "red"
    document.body.style.color = "yellow"
    console.log(e, e.key, e.keyCode)
})