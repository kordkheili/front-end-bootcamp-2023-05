//example 1
/* const a = true;
if (a) {
  console.log("a is true");
} else {
  console.log("a is false");
} */

//example 2
/* const b = prompt("enter somthing...");
console.log(b);
if (b) {
  console.log("inside of if condition");
} else {
  console.log("inside of else");
} */

//example 3 => &&
/* const x = 10;
const y = 20;
const z = +prompt("enter z...");
if (z < y && z > x) {
  console.log("inside of if condition");
} else {
  console.log("inside of else");
} */

//example 4 => ||
/* const user1 = "superadmin";
const user2 = "admin";
const user3 = "alireza";
const username = prompt("enter username...");
if (username === user1 || username === user2) {
  console.log("some secret part of application...");
} else {
  console.log("access denied!");
}
 */

// example5
/* const h = "alireza";
if (h !== "alireza") {
  console.log("some stuff here...");
} else {
  console.log("else...");
}
 */

//example6 => weekdays with if/else conditions
/* const weekDayNumber = +prompt("enter weekday...");
if (weekDayNumber === 0) {
  console.log("shanbe");
} else if (weekDayNumber === 1) {
  console.log("1shanbe");
} else if (weekDayNumber === 2) {
  console.log("2shanbe");
} else if (weekDayNumber === 3) {
  console.log("3shanbe");
} else if (weekDayNumber === 4) {
  console.log("4shanbe");
} else if (weekDayNumber === 5) {
  console.log("5shanbe");
} else if (weekDayNumber === 6) {
  console.log("jome");
} else {
  console.log("invalid input!");
}
 */

//example7 => weekdays with switch case
/* const weekDayNumber = +prompt("enter weekday...");
switch (weekDayNumber) {
  case 0:
    console.log("shanbe");
    break;
  case 1:
    console.log("1shanbe");
    break;
  case 2:
    console.log("2shanbe");
    break;
  case 3:
    console.log("3shanbe");
    break;
  case 4:
    console.log("4shanbe");
    break;
  case 5:
    console.log("5shanbe");
    break;
  case 6:
    console.log("jome");
    break;
  default:
    console.log("invalid input!");
    break;
}
 */

// without ternary operator
/* const isMale = false;
let isMaleString;
if (isMale) {
  isMaleString = "مرد";
} else {
  isMaleString = "زن";
}
console.log(isMaleString); */

// with ternary operator
/* const isMale = +prompt("enter gender...");
let isMaleString = isMale ? "مرد" : "زن";
console.log(isMaleString);

const score = +prompt("enter score...");
const isPassed =
  (score > 70 && score < 80) || score === 100 ? "قبول شدید" : "متاسفم";
console.log(isPassed); */
