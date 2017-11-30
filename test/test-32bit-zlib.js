var should = require('chai').should();
var jsmzml = require('../index');

// describe('parsing 32-bit w/ zlib', function() {
//   var mzml = new jsmzml('./test/spectra/small_32bit_zlib.mzML');
//   var options = {
//     'level': 'Both',
//     'rtBegin': 0,
//     'rtEnd': 0.005
//   };
//   it('parses correctly', function(done) {
//     mzml.retrieve(options, function(self) {
//       self.isFinished.should.equal(true);
//       self.spectra['1'].msLevel.should.equal('1');
//       self.spectra['1'].mass[0].should.equal(204.76007080078125);
//       done();                      
//     }); 
//   });
// });