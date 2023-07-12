/* const score = prompt("enter score...");
const result = score > 80 ? "passed" : "failed";
console.log(result); */
//example1
/* function sayhello() {
  console.log("hello :)");
}
sayhello(); */

//example2
/* function sum() {
  const a = 20;
  const b = 20;
  console.log(a + b);
}
sum(); */

//example3
/* const input1 = +prompt("enter number 1...");
const input2 = +prompt("enter number 2...");
function sum2(x, y) {
  console.log("sum2() called");
  return x + y;
}
function minus(x, y) {
  console.log("minus() called");
  return x - y;
}
const a = sum2(44, 66);
console.log(a);
const b = sum2(2, 3);
console.log(b);
const c = sum2(input1, input2);
console.log(c);
const d = minus(input1, input2);
console.log(d);
console.log(sum2(2, 6)); */

const user1_result = checkScore(100);
const user2_result = checkScore(70);
const user3_result = checkScore(50);
console.log("user1_result", user1_result);
console.log("user2_result", user2_result);
console.log("user3_result", user3_result);

function checkScore(score) {
  let natije = score > 70 ? "passed" : "failed";
  return natije;
}

/* const checkScore = (score) => {
  let natije = score > 70 ? "passed" : "failed";
  return natije;
}; */
