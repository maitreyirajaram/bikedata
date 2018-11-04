const assert = require('assert');
const d3 = require('d3');
require('d3-fetch');
const funcs = require('./index.js');


it('should return Most Popular Station', () => {
  assert.equal(funcs.mostPopularStation([{"Starting Station ID":"1"}, {"Starting Station ID": "1"}, {"foo": "2"}], "Starting Station ID"), "1");
  assert.equal(funcs.mostPopularStation([{"Starting Station ID":"2"}, {"Starting Station ID": "2"},{"Starting Station ID": "2"},{"Starting Station ID": "9"}, {"foo": "2"}], "Starting Station ID"), "2");
});

it('should return Routine Usage', () => {
  assert.equal(funcs.numMonthlyPass([{"Passholder Type":"Monthly Pass"}, {"Passholder Type": "Flex Pass"}, {"foo": "2"}]), "2");
  assert.equal(funcs.numMonthlyPass([{"Passholder Type":"2"}, {"Passholder Type": "Flex Pass"},{"Passholder Type": "Monthly Pass"},{"Passholder Type": "blah pass"}, {"Passholder Type": "Flex Pass"}]), "3");
});

it('should return average trip time', () => {
   assert.equal(funcs.tripDistanceSetSpeed([{"Start Time":"2016-07-07T04:17:00", "End Time" : "2016-07-07T04:17:00"},{"Start Time":"2016-07-07T04:17:00", "End Time" : "2016-07-07T04:17:00"}]), 0);
   assert.equal(funcs.tripDistanceSetSpeed([{"Start Time":"2016-07-07T04:17:00", "End Time" : "2016-07-07T06:17:00"}]), 31.0);
});
