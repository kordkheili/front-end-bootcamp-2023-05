// number & string
const a = 45;
const b = "benz";
console.log("typeof a is", typeof a); // output: number
console.log("typeof b is", typeof b); // output: string
const c = "10";
const d = "20";
console.log("typeof c is", typeof c);
console.log("typeof d is", typeof d);
console.log(c + d);

const firstName = "alireza";
const lastName = "mohammadi";
const space = " ";
console.log(firstName + " " + lastName + "!");

// boolean
const confirmed = true;
const isMale = false;
console.log(confirmed, isMale);
console.log("typeof confirmed is", typeof confirmed);
console.log("typeof isMale is", typeof isMale);

// undefined
let fullName;
console.log(fullName);

// null
let description = null;
console.log(description);

// Infinity
console.log(1000 / 0);

// NaN => Not a Number
console.log('"50000" - 991 = ', "50000" - 991);
console.log('"50000" + 991 = ', "50000" + 991);
console.log('"alireza" - 991 = ', "alireza" - 991);
console.log('"alireza" * 20 = ', "alireza" * 20);

// array
const users = ["alireza", "maryam", "sima", "saba", "komeyl"];
const array1 = ["some description...", 154, true, 9 + 10];
const numbers_array = [1, 3, 5, 7, 9];
const weekdays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];
console.log(users);
console.log(array1);
console.log(numbers_array);
console.log(weekdays);
console.log(users[4]);

// nested arrays
const nestedArray = ["alireza", [4236, 3256, [true, false, "morteza"]]];
console.log(nestedArray);

// object
const user1 = {
  firstname: "alireza",
  lastname: "mohamadi",
  isMale: true,
};
const user2 = {
  firstname: "maryam",
  lastname: "rezaie",
  isMale: false,
};
console.log(user1);
console.log(user2);
const xiaomi_phone = {
  vazn: "181",
  andaze: "1000x200",
  specialFeatures: ["مجهز به حس‌گر اثرانگشت", "مناسب عکاسی"],
};
console.log(xiaomi_phone);
