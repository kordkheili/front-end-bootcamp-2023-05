//forEach()
/* const weekdays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];
weekdays.forEach(function (weekday, index) {
  document.write(`${weekday}<br />`);
}); */

//map()
//const old_numbers = ["ali", 4, 6, 7, 3];
/* console.log(numbers);
numbers[0] = numbers[0] * 2;
numbers[1] = numbers[1] * 2;
numbers[2] = numbers[2] * 2;
numbers[3] = numbers[3] * 2;
numbers[4] = numbers[4] * 2;
console.log(numbers); */
/* console.log("old_numbers: ", old_numbers);
const new_numbers = old_numbers.map(function (value, index, array) {
  return value * 2;
});
console.log("new_numbers: ", new_numbers); */

// filter()

const numbers = [4, 7, 4, 32, 99, 44];
console.log("numbers", numbers);

//bad solution
/* const filtered_array = [];
for (let i = 0; i < numbers.length; i++) {
  const value = numbers[i];
  if (value > 10) {
    filtered_array.push(value);
  }
}
console.log(filtered_array); */

//good solution
/* const filtered_array = numbers.filter(function (value) {
  return value > 10;
});
console.log("filtered_array", filtered_array); */

//reduce
const numbers2 = [5, 7, 55, 66, 32, 642, 3];
console.log(numbers2);
// const initial_sum = 0;
const numbers2_sum = numbers2.reduce(function (prev, current) {
  return prev + current;
}, 0);
console.log(numbers2_sum);
