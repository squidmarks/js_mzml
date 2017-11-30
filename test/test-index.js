var should = require('chai').should();
var jsmzml = require('../index');

describe('parsing 32-bit', function() {
  var mzml = new jsmzml('./test/spectra/small_32bit.mzML');
  var options = {
    'level': 'Both',
    'rtBegin': 0,
    'rtEnd': 0.005
  };
  it('parses correctly', function(done) {
    mzml.retrieve(options, function() {
      //mzml.isFinished.should.equal(true);
      //mzml.spectra['1'].msLevel.should.equal('1');
      //mzml.spectra['1'].mass[0].should.equal(204.76007080078125);
      done();
      //return;
    });
  });
});

describe('parsing 64-bit', function() {
    var mzml = new jsmzml('./test/spectra/small_64bit.mzML');
    var options = {
      'level': 'Both',
      'rtBegin': .0,
      'rtEnd': 0.005
    };
    it('parses correctly', function(done) {
      mzml.retrieve(options, function() {
        //mzml.isFinished.should.equal(true);
        //mzml.spectra['1'].msLevel.should.equal('1');
        //mzml.spectra['1'].mass[0].should.equal(200.248971113102);
        done();
        //return;            
      });
    });
  });