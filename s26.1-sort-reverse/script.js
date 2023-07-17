//sort()
//example1
const users = ["parviz", "hekmat", "alireza", "zahra"];
const sorter_users = users.sort();
console.log(sorter_users);

//example2
const numbers = [1, 5, 7, 33, 5, 113, 34, 37, 25, 95];
const sorted_numbers_by_alphabet = numbers.sort();
console.log(sorted_numbers_by_alphabet);

//example3
const sorted_numbers = numbers.sort(function (a, b) {
  return a - b;
});
console.log(sorted_numbers);

//reverse
const users2 = ["parviz", "hekmat", "alireza", "zahra"];
const numbers2 = [1, 5, 7, 33, 5, 113, 34, 37, 25, 95];
console.log("users2", users2);
console.log("users2.reverse()", users2.reverse());
console.log("numbers2", numbers2);
console.log("numbers2.reverse()", numbers2.reverse());
