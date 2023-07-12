"use strict";
const users = ["ahmad", "sara", "raya", "mohammad"];
users[1] = "akbar";
console.log(users);
//console.log(users[0]);

//push
users.push("nima");
console.log(users);

//pop
users.pop();
users.pop();
users.pop();
console.log(users);

//unshift
users.unshift("123");
users.unshift("test2");
console.log(users);

//shift
users.shift();
users.shift();
users.shift();
console.log(users);

//splice
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed_item = myFish.splice(2, 1, "drum", "drum2", "drum3", "drum4");
console.log(myFish);
console.log(removed_item);
myFish.pop();
console.log(myFish);

//slice
const posts = [
  "post1",
  "post2",
  "post3",
  "post4",
  "post5",
  "post6",
  "post7",
  "post8",
  "post9",
  "post10",
];
console.log(posts.slice(0, 5));

//indexOf (search in array)
console.log(users);
console.log(users.indexOf("asqar"));
console.log(posts.indexOf("post7"));

//include (search in array)
console.log(posts.includes("post11"));
