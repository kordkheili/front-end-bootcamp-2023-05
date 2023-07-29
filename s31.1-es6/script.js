"use strict";

//1.array destruct
const numbers = [54, 75];
const a = numbers[0];
const b = numbers[1];
console.log(a);
console.log(b);

const [x, y] = [54, 75];
console.log(x);
console.log(y);

const [data, error, isLoading] = getData();
function getData() {
  return ["some data...", "404", true];
}
console.log(data);

const [k, , , , t] = [54, 75, 66, 34, "alireza"];
console.log(k + t);
console.log(t);

const fullname = ["alireza", "mohamadi"];
//solution 1
// const firstname = fullname[0];
// const lastname = fullname[1];
// console.log(firstname);
// console.log(lastname);

//solution 2 (better)
// const [firstname, lastname] = ["alireza", "mohamadi"];
// console.log(firstname);
// console.log(lastname);

//2.object destruct

const student1 = {
  firstname: "narges",
  lastname: "babaie",
  age: 29,
  abc: "this is abc",
};

//solution1
// const stu1_first = student1.firstname;
// const stu2_last = student1.lastname;
// const age = student1.age
// console.log(stu1_first);
// console.log(stu2_last);

//solution2
const { firstname, lastname: familyName } = student1;
console.log(familyName);

//another example
const {
  data: userData,
  isLoading: userIsLoading,
  error: userError,
} = getUserData();

const {
  data: productData,
  isLoading: productIsLoading,
  error: productError,
} = getProductData();

function getUserData() {
  return {
    data: "some user data",
    isLoading: true,
    error: null,
  };
}
function getProductData() {
  return {
    data: "some product data",
    isLoading: false,
    error: "500",
  };
}
console.log(productData);
console.log(userData);

//3.spread operator
const users1 = ["morteza", "maryam", "mina", "zhina", "zhila"];
const users2 = [...users1];
console.log(users1[0], users1[1], users1[2], users1[3], users1[4]);
console.log("...users1", ...users1);
console.log("users1", users1);

const users3 = ["mohamad", "matin", "mirza"];
const users4 = [...users1, ...users3];
const users5 = ["alireza", ...users1, "sina"];
console.log(users4);
users1.concat(users2);
