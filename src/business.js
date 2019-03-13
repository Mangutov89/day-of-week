export class Calendar {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  leapYear() {
    if ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  checkMonth() {
    if (this.month < 12) {
      return true;
    }
  }
  checkDay() {
    if (this.day < 31) {
      return true;
    }
  }
}

function combine(month, day, year) {
  const stuff = month + ", " + day + ", " + year
  return stuff;
}

function getWeekDay(day) {
  var dayOf = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var blah = dayOf[day]
  return blah;
}
