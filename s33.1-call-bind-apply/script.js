const person1 = {
  firstname: "alireza",
  lastname: "mohamadi",
};
const person2 = {
  firstname: "maryam",
  lastname: "jabari",
};
function introduceYourSelf(age, x, y) {
  console.log(this.firstname);
  console.log(this.lastname);
  console.log(age);
  console.log(x);
  console.log(y);
}

//apply()
// introduceYourSelf.apply(person1, [15, "x value", "y value"]);
// introduceYourSelf.apply(person2, [26, "x...", "y..."]);

//call()
// introduceYourSelf.call(person1, 15, "x value", "y value");
// introduceYourSelf.call(person2, 26, "x...", "y...");

//bind()
const a = introduceYourSelf.bind(person1, 15, "x value", "y value");
const b = introduceYourSelf.bind(person2, 26, "x...", "y...");
a();
b();
