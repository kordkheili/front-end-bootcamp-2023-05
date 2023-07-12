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
