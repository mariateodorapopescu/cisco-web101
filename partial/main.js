addEventListener('DOMContentLoaded', () => { alert("Pentru a incepe numaratoarea apasa pe OK") })
const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');
const body = document.body;
iconMoon.style.display = 'block';
iconSun.style.display = 'none';
const Mode = document.querySelector('.switch');
Mode.addEventListener('click', () => {
    document.body.classList.toggle("active");
    func();
});

function func() {
    if (document.body.classList.contains("active")) {
        document.body.getElementsByClassName("text-mode")[0].textContent = "Night Mode";
        // document.body.getElementsByClassName("ceva")[0].textContent = "Stopwatch-ul meu";
        document.body.getElementsByClassName("text-mode")[0].style = "color: white";
        // document.body.getElementsByClassName("ceva")[0].style = "color: white";
        document.getElementsByClassName("wrapper")[1].classList.add("fa-moon-o", "night");
        document.getElementsByClassName("wrapper")[1].classList.remove("fa-sun-o", "day");
    } else {
        document.body.getElementsByClassName("text-mode")[0].textContent = "Day Mode";
        // document.body.getElementsByClassName("ceva")[0].textContent = "Stopwatch-ul meu";
        document.body.getElementsByClassName("text-mode")[0].style = "color: black";
        // document.body.getElementsByClassName("ceva")[0].style = "color: black";
        document.getElementsByClassName("wrapper")[1].classList.add("fa-sun-o", "day");
        document.getElementsByClassName("wrapper")[1].classList.remove("fa-moon-o", "night");
    }
}
let cllk = document.getElementById('.myclock');
let items = document.querySelectorAll('.clockdiv');
let [mlsec, scnd, mins, hours] = [0, 0, 0, 0];
let timerRef = document.getElementById('.mytimer');
let int = null;
let strt = document.getElementById("start");
let stp = document.getElementById("stop");
let rstrt = document.getElementById("restart");
cllk.addEventListener('DOMContentLoaded', () => { setInterval(getCountdownTime(), 1000) })
strt.addEventListener('click', () => {

    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(gettimee(), 1000);
});
stp.addEventListener('click', () => {
    clearInterval(int);
});
rstrt.addEventListener('click', () => {
    clearInterval(int);
    [mlsec, scnd, mins, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});
let milsec = 0;
let snd = 0;

function getCountdownTime() {
    milsec += 10;

    if (milsec == 1000) {
        milsec = 0;
        snd = snd + 1;
    }
    document.getElementsByClassName("scnd")[0].innerHTML = `${snd}`;
}

function gettimee() {
    mlsec += 10;

    if (mlsec == 1000) {
        mlsec = 0;
        scnd = scnd + 1;

        if (scnd == 60) {
            scnd = 0;
            mins = mins + 1;

            if (mins == 60) {
                mins = 0;
                hours = hours + 1;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = mins < 10 ? "0" + mins : mins;
    let s = scnd < 10 ? "0" + scnd : scnd;
    let ms = mlsec < 10 ? "00" + mlsec : mlsec < 100 ? "0" + mlsec : mlsec;
    timerRef.innerHTML = ` ${hours} : ${mins} : ${scnd} : ${mlsec}`;
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        getCountdownTime();
    }
}