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
