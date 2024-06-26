enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: string): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};
console.log(isWeekend("Monday"));
console.log(isWeekend("Sunday"));
