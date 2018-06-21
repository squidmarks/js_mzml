var test = require('tape');
var jsmzml = require('../index');

test('choosing MS level', function(t) {
  var mzml = new jsmzml('./test/spectra/small_64bit_zlib.mzML');
  var options1 = {
    'level': '1',
    'rtBegin': 0,
    'rtEnd': 0.005
  };
  var options2 = {
    'level': '2',
    'rtBegin': 0,
    'rtEnd': 0.005
  };

  var spectra = mzml.retrieve(options1, function() {
    t.equal(Object.keys(mzml.spectra).length, 1, 'Gets MS level 1');      
  });

  t.end();
});
