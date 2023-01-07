
let target = document.querySelector(".final_target")

let countTill = new Date("Nov 2 2023 08:00:00").getTime()

setInterval(() => {

    let currentTime = new Date().getTime()
    let remainTime = countTill - currentTime
    let days = Math.floor(remainTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((remainTime % (1000 * 60)) / 1000)

    console.log(currentTime)

    document.querySelector('#days').innerText = days
    document.querySelector('#hours').innerText = hours
    document.querySelector('#minutes').innerText = minutes
    document.querySelector('#seconds').innerText = seconds

    if(remainTime < 0){
        target.innerHTML = "time is up!!!"
        // document.querySelector('.heading').innerText = "Happy Birthday Vivek"
    }

}, 1000);


