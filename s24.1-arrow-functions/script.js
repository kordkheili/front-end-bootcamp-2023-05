//classic function
function ageCalc_classic(birth_year) {
  const current_year = 2023;
  const result = current_year - birth_year;
  return result;
}
const user1_age = ageCalc_classic(1990);
const user2_age = ageCalc_classic(1899);
const user3_age = ageCalc_classic(1995);

document.write(user1_age + "<br>");
document.write(user2_age + "<br>");
document.write(user3_age + "<br>");

function decrement(count) {
  return count - 1;
}
console.log(decrement(100));

//arrow function
const say_hello = () => {
  document.write(`<b style="color:red;">hello from arrow function</b>`);
};
say_hello();

const ageCalc_arrow = (birth_year) => {
  const current_year = 2023;
  const result = current_year - birth_year;
  return result;
};
const user4_age = ageCalc_classic(1500);
const user5_age = ageCalc_classic(1999);
const user6_age = ageCalc_classic(2020);
console.log(user4_age);
console.log(user5_age);
console.log(user6_age);

const say_goodbye = () => {
  return "goodbye";
};

//arrow function return shorthand
const increment = (count) => count + 1;
const result = increment(100);
const result2 = increment(101);
console.log(result);

//more about return
const walk = () => {
  return "done";
  //js not execute here...
  console.log("i am walking...");
};
const walk_result = walk();
console.log(walk_result);
