console.log("Working...")

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    document.querySelector(".container").append(card)

    let thNail = document.createElement("div")
    thNail.setAttribute("class", "thumbnail")
    document.querySelector(".container").lastElementChild.append(thNail)

    let tImg = document.createElement("img")
    tImg.setAttribute("id", "tImag")
    document.querySelector(".container").lastElementChild.lastElementChild.append(tImg)
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.setAttribute(`src`, thumbnail)
    
    let dura = document.createElement("div")
    dura.setAttribute("class", "duration")
    document.querySelector(".container").lastElementChild.lastElementChild.append(dura)
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.innerText = `${duration}`
    
    let content = document.createElement("div")
    content.setAttribute("class", "content")
    document.querySelector(".container").lastElementChild.append(content)
    
    let tt = document.createElement("div")
    tt.setAttribute("class", "title")
    document.querySelector(".container").lastElementChild.lastElementChild.append(tt)
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.innerHTML = `${title}`
    
    let other = document.createElement("div")
    other.setAttribute("class", "other")
    document.querySelector(".container").lastElementChild.lastElementChild.append(other)
    
    let chanName = document.createElement("span")
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.append(chanName)
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerText = `${cName}`
    
    let dot1 = document.createElement("img")
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.lastElementChild.append(dot1)
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.src = `dot.svg`
    
    let view = document.createElement("span")
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.append(view)
    let v = (views >= 1000000 ? `${views/1000000}M views` : (views >= 1000 ? `${views/1000}K views` : `${views} views`))
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerText = v

    let dot2 = document.createElement("img")
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.lastElementChild.append(dot2)
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.lastElementChild.lastElementChild.src = `dot.svg`

    let month = document.createElement("span")
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.append(month)
    let m = (monthsOld == 1 ? `1 month ago` : `${monthsOld} months ago`)
    document.querySelector(".container").lastElementChild.lastElementChild.lastElementChild.lastElementChild.innerText = m
}

createCard("New Card", "Card Channel", 300000, 4, `10:17`, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCbAaHSD5GW3L0J1Y1RuG8u-XjkO5eTROjA&usqp=CAU`)

createCard("Roronoa Zoro", "One Piece", 999000000, 1, `23:45`, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2_vCRikVzAfxL7ozJlxwQ0n_K3XjVpQB0g&usqp=CAU`)