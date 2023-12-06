addEventListener('load', () =>{
    window.alert("Pentru a incepe numaratoarea apasa OK")
})

//Asta era la inceput pt ex 3
// let count=0;
// setInterval(counter,1000);

// function counter(){
//     console.log(++count);
//     document.getElementsByClassName("seconds")[0].innerHTML = `${count}`;
// }

const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');

const body = document.body;

iconMoon.style.display = 'block';
iconSun.style.display = 'none';
let aux=true;
const btnMode = document.querySelector('.btn');
btnMode.addEventListener('click', () => {
        if( aux== true){
            // body.classList.toggle("day-mode")
            changeNighttoDay();
            changeIcon1();
            aux=false;
        }
        else{
            changeIcon2();
            // body.classList.toggle("day-mode")
            changeDaytoNight();
            aux=true;
        }
    });

      function changeNighttoDay(){
        body.classList.add("day-mode");
     }   
    
     function changeDaytoNight(){
        body.classList.remove("day-mode");
     }

function changeIcon1(){
        document.getElementsByClassName("text-mode")[0].innerHTML="DayMode";
        document.getElementsByClassName("text-mode")[0].classList.remove("night");
        document.getElementsByClassName("text-mode")[0].classList.add("day");
        document.getElementsByClassName("icon")[1].classList.remove("fa-moon-o","night");
        document.getElementsByClassName("icon")[1].classList.add("fa-sun-o","day");
}
    
function changeIcon2(){
        document.getElementsByClassName("text-mode")[0].innerHTML="NightMode";
        document.getElementsByClassName("text-mode")[0].classList.remove("day");
        document.getElementsByClassName("text-mode")[0].classList.add("night");
        document.getElementsByClassName("icon")[1].classList.remove("fa-sun-o","day");
        document.getElementsByClassName("icon")[1].classList.add("fa-moon-o","night");
}
    
// let count;
// function counter(){
//     count++;
// }

// let start = document.getElementById('start')
// start.addEventListener('click',setInterval(myCounter,1000))

// count=0;
// function myCounter(){

//     // setInterval(counter,1000)

//     document.getElementsByClassName("seconds")[0].innerHTML = count++;

// }

/* <button onClick="myTimer = setInterval(myCounter, 1000)">Start counter!</button>

<p id="demo">Click on the button above and I will count forever.</p>

<button onClick="clearInterval(myTimer)">Stop counter!</button>


var c = 0;
function myCounter() {
  document.getElementById("demo").innerHTML = ++c;
} */

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  function print(txt) {
    document.getElementById("ore-secunde-ms").innerHTML = txt;
  }
   
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
  }

  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  let resetButton = document.getElementById("resetButton");
  
  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);