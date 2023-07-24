const pi = Math.PI;
console.log(pi);

//round(), floor(), ceil()
console.log("round", Math.round(3.4));
console.log("floor", Math.floor(3.4));
console.log("ceil", Math.ceil(3.4));

//sqrt(), power()
console.log("sqrt", Math.sqrt(64));
console.log("pow", Math.pow(64, 2));

//abs
console.log("abs", Math.abs(-5));

//random()
console.log(Math.random());

//example
const btn = document.getElementById("generate_btn");
const container = document.getElementById("random_container");
const stop_btn = document.getElementById("stop_btn");
function random_generator() {
  const randNumber = Math.random();
  container.innerHTML = randNumber;
}
// solution 1 (event listener)
btn.addEventListener("mousemove", random_generator);
function alirezaLog() {
  console.log("alireza");
}
btn.addEventListener("mousemove", alirezaLog);
stop_btn.addEventListener("click", function () {
  console.log("stop");
  btn.removeEventListener("mousemove", random_generator);
  btn.removeEventListener("mousemove", alirezaLog);
});
//solution 2 (event handler)
/* btn.onmousemove = random_generator;
btn.onmousemove = function () {
  console.log("alireza");
}; */

// solution 3
// HTML onmousemove attr
