// stopwatch/script.js
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
  startBtn.disabled = true;
}

function pause() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
  startBtn.disabled = false;
}

startBtn.onclick = start;
pauseBtn.onclick = pause;
resetBtn.onclick = reset;
