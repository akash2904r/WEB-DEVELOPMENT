// let obj = {
//     a : 1, b : "Chandu"
// }

// console.log(obj)

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true 
// }

// rabbit.__proto__ = animal



class animal {
    constructor(name) {
        this.name = name
        console.log("An animal object is created...")
    }

    eats() {
        console.log("I am eating...")
    }

    jumps() {
        console.log("I can jump...")
    }
}

class lion extends animal {
    constructor(name) {
        super(name)
        this.name = name
        console.log("An lion object is created...")
    }

    eats() {
        console.log("I eat only meat... Bring me meat")
    }
}

let a = new animal("Bunny")
console.log(a)

let l = new lion("Leo")
console.log(l)


console.log(l instanceof lion)
console.log(l instanceof animal)
console.log(a instanceof lion)