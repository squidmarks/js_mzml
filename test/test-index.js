var should = require('chai').should();
var jsmzml = require('../index');

describe('mzML parsing', function() {
  var thing = new jsmzml();
  it('initializes', function() {
    thing.hello().should.equal("hello");
  });
});