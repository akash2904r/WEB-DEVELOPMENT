function rand() {
    let r = Math.random()

    if(r <= 0.1)
        return 0
    else if(r <= 0.2 && r >= 0.1)
        return 1
    else if(r <= 0.3 && r >= 0.2)
        return 2
    else if(r <= 0.4 && r >= 0.3)
        return 3
    else if(r <= 0.5 && r >= 0.4)
        return 4
    else if(r <= 0.6 && r >= 0.5)
        return 5
    else if(r <= 0.7 && r >= 0.6)
        return 6
    else if(r <= 0.8 && r >= 0.7)
        return 7
    else if(r <= 0.9 && r >= 0.8)
        return 8
}

let color = {
    0 : "red", 1 : "green", 2 : "blueviolet", 3 : "darkslategrey", 4 : "brown", 5 : "darkmagneta", 6 : "blue", 7 : "darkslateblue", 8 : "firebrick"
}

let bgColor = {
    0 : "bisque", 1 : "burlywood", 2 : "yellow", 3 : "chocolate", 4 : "orange", 5 : "coral", 6 : "cadetblue", 7 : "cornflowerblue", 8 : "cornsilk"
}


let boxes = document.body.children[0].children

for (const box of boxes) {
    box.style.backgroundColor = `${bgColor[rand()]}`
    box.style.color = `${color[rand()]}`
}