/*
    Create a business name generator by combining list of adjectives, shop name and another word

    Adjectives : Crazy, Amazing, Fire
    Shop Name : Engine, Foods, Garments
    Another Word : Bros, Limited, Hub
*/

function rand() {
    let r = Math.random()

    if(r <= 0.3)
        return 0
    else if(r <= 0.6 && r >= 0.3)
        return 1
    else 
        return 2
}

let adj = {
    0 : "Crazy", 1 : "Amazing", 2 : "Fire"
}

let shop = {
    0 : "Engine", 1 : "Foods", 2 : "Garments"
}

let word = {
    0 : "Bros", 1 : "Limited", 2 : "Hub"
}

let a = rand(), b = rand(), c = rand()

console.log(`${adj[a]} ${shop[b]} ${word[c]}`)