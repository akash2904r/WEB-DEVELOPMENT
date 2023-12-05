console.log("Hello World")

console.log(document.body.childNodes)
console.log(document.body.childNodes[1])

let a = document.body.childNodes[1]

console.log(a.childNodes)
console.log(a.firstChild)
console.log(a.lastChild)


console.log(a.firstElementChild)
console.log(a.lastElementChild)


console.log(a.children)


console.log(a.parentElement)


console.log(a.childNodes[3].nextElementSibling)
console.log(a.childNodes[3].nextSibling)

console.log(a.childNodes[11].previousElementSibling)
console.log(a.childNodes[11].previousSibling)


console.log(document.body.children[1])

// table.caption
let a1 = document.body.children[1].caption
console.log(a1)

// table.rows
let a2 = document.body.children[1].rows
console.log(a2)

// table.tHead
let b = document.body.children[1].tHead
console.log(b)

// table.tFoot
let c = document.body.children[1].tFoot
console.log(c)

// table.tBodies
let d = document.body.children[1].tBodies
console.log(d)

// tbody.rows
let e = document.body.children[1].tBodies[0].rows
console.log(e)

// tr.cells
let f = document.body.children[1].tBodies[0].rows[0].cells
console.log(f)

// tr.sectionRowIndex
let g = document.body.children[1].tBodies[0].rows[1].sectionRowIndex
console.log(g)

// tr.rowIndex
let h = document.body.children[1].tBodies[0].rows[1].rowIndex
console.log(h)

// td.cellIndex
let i = document.body.children[1].tBodies[0].rows[0].cells[1].cellIndex
console.log(i)