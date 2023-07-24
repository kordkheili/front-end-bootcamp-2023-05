function addDay(date, days) {
    const days_ms = days * 24 * x * 1000;
    const newDate_ms = date + days_ms;
    const newDate = new Date(newDate_ms);
    return newDate;
  }