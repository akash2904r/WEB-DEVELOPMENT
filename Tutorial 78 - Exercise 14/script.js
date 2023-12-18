function rand() {
    let r = Math.random()

    if(r < 0.143)
        return 1000
    else if(r < 0.286 && r >= 0.143)
        return 2000
    else if(r < 0.429 && r >= 0.286)
        return 3000
    else if(r < 0.572 && r >= 0.429)
        return 4000
    else if(r < 0.715 && r >= 0.572)
        return 5000
    else if(r < 0.858 && r >= 0.715)
        return 6000
    else
        return 7000
}

function initialize() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.body.innerHTML = "Initializing Hacking<span>.</span><span>.</span><span>.</span><br>"), 

            document.body.children[1].setAttribute("class", "second")
            document.body.children[2].setAttribute("class", "third")
        }, rand())
    })
}

function study() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.body.innerHTML = document.body.innerHTML + "Reading your files<span>.</span><span>.</span><span>.</span><br>"), 

            document.body.children[6].setAttribute("class", "second")
            document.body.children[7].setAttribute("class", "third")
        }, rand())
    })
}

function detect() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.body.innerHTML = document.body.innerHTML + "Password files Detected<span>.</span><span>.</span><span>.</span><br>"), 

            document.body.children[10].setAttribute("class", "second")
            document.body.children[11].setAttribute("class", "third")
        }, rand())
    })
}

function transfer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.body.innerHTML = document.body.innerHTML + "Sending all passwords and personal files to server<span>.</span><span>.</span><span>.</span><br>"), 

            document.body.children[14].setAttribute("class", "second")
            document.body.children[15].setAttribute("class", "third")
        }, rand())
    })
}

function tidyUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.body.innerHTML = document.body.innerHTML + "Cleaning up<span>.</span><span>.</span><span>.</span>"), 

            document.body.children[17].setAttribute("class", "second")
            document.body.children[18].setAttribute("class", "third")
        }, rand())
    })
}

async function hack() {
    await initialize();
    await study();
    await detect();
    await transfer();
    await tidyUp();
}

hack()