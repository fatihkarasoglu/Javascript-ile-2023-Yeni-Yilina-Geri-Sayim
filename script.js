const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

let endOf = ("1 January 2023")

function countdown() {
    const newYear = new Date(endOf);
    const todayDate = new Date();

    const totalEnd = (newYear - todayDate) / 1000;

    let days = Math.floor(totalEnd / 3600 / 24);
    let hours = Math.floor(totalEnd / 3600) % 24;
    let mins = Math.floor(totalEnd / 60) % 60;
    let seconds = Math.floor(totalEnd ) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `${time}` : time;
}

countdown();
setInterval(countdown, 1000);