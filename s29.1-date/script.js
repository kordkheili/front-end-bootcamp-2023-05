const date1 = new Date("2019-05-24");
const date2 = Date.now();

//convert Date() to timestamp
// const date1_timestamp = date1.getTime();
// const date2_timestamp = date1.getTime();

function addDays(date, days) {
  const date_ms = date.getTime();
  const days_ms = days * 24 * 3600 * 1000;
  const newDate_ms = date_ms + days_ms;
  const newDate = new Date(newDate_ms);
  return newDate;
}
function calcDiff(day1, day2) {
  const diff_ms = day1 - day2;
  const diff_day = diff_ms / 1000 / 3600 / 24;
  return diff_day;
}
function miladiToShamsi(miladiDate) {
  const shamsiDate = miladiDate.toLocaleString("fa-IR", {
    timeZone: "Asia/Tehran",
  });
  return shamsiDate;
}
function getDayName(date) {
  const weekDay = date.getDay();
  const weekdays = [
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ];
  const dateName = weekdays[weekDay];
  return dateName;
}
const testCalcDiff = calcDiff(date1, date2);
console.log(testCalcDiff);

const testAddDays = addDays(new Date(), 10);
console.log(testAddDays);

const testMiladiToShamsi = miladiToShamsi(new Date());
console.log(testMiladiToShamsi);

const testGetDayName = getDayName(new Date());
console.log(testGetDayName);
