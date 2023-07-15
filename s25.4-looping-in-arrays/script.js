/* const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
]; */

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
