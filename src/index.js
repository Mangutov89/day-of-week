import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { Calendar } from './business.js';


$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    function combine(month, day, year) {
      const stuff = month + ", " + day + ", " + year
      return stuff;
    }
    function getWeekDay(day) {
      var dayOf = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var blah = dayOf[day]
      return blah;
    }

    var newMonth = $("input#month").val();
    var newDay = parseInt($("input#day").val());
    var newYear = parseInt($("input#year").val());

    const newCombine = combine(newMonth, newDay, newYear);
    const newFormula = new Date(newCombine);
    const newDayWeek = newFormula.getDay();
    const result = getWeekDay(newDayWeek);



    $("#result").text(result);
  });
});
