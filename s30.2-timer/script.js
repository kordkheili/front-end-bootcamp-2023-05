setTimeout(function () {
  console.log("test");
}, 3000);
let seconds = 0;
let ms = 0;
const container = document.getElementById("seconds");
const ms_container = document.getElementById("ms");
container.innerHTML = seconds;
setInterval(function () {
  seconds = seconds + 1;
  container.innerHTML = seconds;
}, 1000);

setInterval(function () {
  ms = ms + 1;
  if (ms === 1000) {
    ms = 0;
  }
  ms_container.innerHTML = ms;
}, 1);
