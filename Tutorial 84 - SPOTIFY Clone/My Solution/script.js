console.log("Java...Sc...ript !!!")

let currSong = new Audio()
let currFolder
let songs = []
var time

let displaySongList = () => {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".display-songs").style.display = "";
}

let displayMain = () => {
    document.querySelector(".display-songs").style.display = "none";
    document.querySelector(".main").style.display = "";
}

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

let getDuration = (track) => {
    let song = new Audio()
    let seconds
    song.src = `/${currFolder}/` + track + ".mp3" 

    return new Promise(resolve => {
        song.addEventListener('loadedmetadata', function() {
            seconds = song.duration
            time = secondsToMinutesSeconds(seconds)
            resolve(time)
        }, false)
    })
}

async function getSongs(folder) {
    currFolder = folder
    let a = await fetch(`/${folder}/`)
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")

    for (let i = 0; i < as.length; i++) 
        if(as[i].href.endsWith(".mp3"))
            songs.push(as[i].href.split(`/${folder}/`)[1].split(".mp3")[0])

    let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0]
    
    let title, img, desc
    let folderName = folder.split("/")[2]
    let cards = document.querySelector(".cards")
    Array.from(cards.getElementsByClassName("card")).forEach(e => {
        if(e.dataset.folder == folderName) {
            title = e.getElementsByTagName("h4")[0].innerHTML
            img = e.getElementsByTagName("img")[1].src
            desc = e.lastElementChild.innerHTML
        }
    })
    
    let dsh = document.querySelector(".d-s-h")
    dsh.innerHTML = `<div class="song-img">
                        <img src="${img}" alt="">
                    </div>
                    <div class="song-info">
                        <div>Playlist</div>
                        <div class="title"><h1>${title}</h1></div>
                        <div class="description">${desc}</div>
                    </div>`

    for (const song of songs) {
        const time = await getDuration(song);
        
        songUL.innerHTML = songUL.innerHTML + 
                        `<li>
                            <div class="song-content">
                                <div class="info">
                                    <div>${song.replaceAll("%20", " ")}</div>
                                    <div>${title}</div>
                                    <div>${time}</div>
                                </div>
                                <div class="playnow">
                                    <span>Play Now</span>
                                    <img src="svgs/play.svg" alt="play">
                                </div> 
                            </div>
                        </li>`
    }

    // // Attach an event listener to each song
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
}

const playMusic = (track, pause = false) => {
    currSong.src = `/${currFolder}/` + track + ".mp3"

    if (!pause) {
        currSong.play()
        play.src = "svgs/pause.svg"
    }

    document.querySelector(".duration").innerHTML = `<div>00:00</div>
    <div>00:00</div>`
}

async function displaySongs() {
    console.log("Displaying songs")

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            displaySongList()
            console.log("Fetching Songs")
            songs = []
            document.querySelector(".song-list").getElementsByTagName("ul")[0].innerHTML = ""
            songs = await getSongs(`Tutorial%2084%20-%20SPOTIFY%20Clone/songs/${item.currentTarget.dataset.folder}`)
        })
    })
}

function previousSong(songs) {
    previous.addEventListener("click", () => {
        currSong.pause()
        console.log("Previous clicked")

        let index = songs.indexOf(currSong.src.split("/").slice(-1)[0].split(".mp3")[0])
        if ((index - 1) >= 0) {
            console.log(songs[index - 1])
            playMusic(songs[index - 1])
        }
        else {
            playMusic(songs[0])
        }
    })
}

function nextSong(songs) {
    next.addEventListener("click", () => {
        currSong.pause()
        console.log("Next clicked")

        let index = songs.indexOf(currSong.src.split("/").slice(-1)[0].split(".mp3")[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
        else {
            playMusic(songs[0])
        }
    })
}

async function main() {
    // Displaying the main page
    displayMain()

    // Get the list of all songs
    await getSongs("Tutorial%2084%20-%20SPOTIFY%20Clone/songs/Folder1")
    playMusic(songs[0], true)

    // Display all the songs in an album
    await displaySongs()

    // Attach an event listener to play, next and previous
    play.addEventListener("click", () => {
        if (currSong.paused) {
            currSong.play()
            play.src = "svgs/pause.svg"
        }
        else {
            currSong.pause()
            play.src = "svgs/play.svg"
        }
    })

    // Listen for timeupdate event
    currSong.addEventListener("timeupdate", () => {
        document.querySelector(".duration").innerHTML = `<div>${secondsToMinutesSeconds(currSong.currentTime)}</div>
        <div>${secondsToMinutesSeconds(currSong.duration)}</div>`
        document.querySelector(".circle").style.left = (currSong.currentTime / currSong.duration) * 100 + "%";
    })

    // Add an event listener to seekbar
    document.querySelector(".seek-bar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currSong.currentTime = ((currSong.duration) * percent) / 100
    })

    // Add an event listener to previous
    previousSong(songs)

    // Add an event listener to next
    nextSong(songs)

    // Add an event listener to back
    back.addEventListener("click", () => {
        displayMain()
    })

    // Making the site responsive
    let mq = window.matchMedia( "(max-width: 390px)" );

    if (mq.matches) {
        let songlist = document.querySelector(".song-list")
        songlist.firstElementChild.innerHTML = `<div>#Title</div>
                                                <div>Duration</div>`
    }

    // Add an event listener for hamburger
    document.querySelector("#ham").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0px"
        document.querySelector("#content-box").firstElementChild.style.height = "100px"
    })

    // Add an event listener for close
    document.querySelector("#close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-250px"
    })
}

main()