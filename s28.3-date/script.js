const today = new Date();
console.log(today);

const timestamp = Date.now();
console.log(timestamp);

const now = new Date(1690046557282);
const year1970 = new Date(0);
console.log(now);
console.log(year1970);

const test_date_1 = new Date("2022-08-25");
console.log(test_date_1);

const jalali_test_date_1 = test_date_1.toLocaleString("fa-IR", {
  timeZone: "Asia/Tehran",
});
console.log(jalali_test_date_1);
