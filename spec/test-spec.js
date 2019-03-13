import { Calendar } from './../src/business.js';

describe('Calendar', function() {

  it('should test if year is leap year',
  function() {
    var checkYear = new Calendar(1, 1, 400);
    expect(checkYear.leapYear()).toEqual(true)
  });

  it('should test if date is month',
  function() {
    var checkMonth = new Calendar(1, 1, 400);
    expect(checkMonth.checkMonth()).toEqual(true)
  });

  it('should test if date is day',
  function() {
    var checkDay = new Calendar(1, 1, 400);
    expect(checkDay.checkDay()).toEqual(true)
  });
});
