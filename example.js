var jsmzml = require('./index');

filename = 'C:/Users/Mike/code/js_mzml/test/spectra/small_64bit.mzML';
var thing = new jsmzml(filename);

var options = {
    'level': 'Both',
    'rtBegin': 0,
    'rtEnd': 0.005
};

var spectra = thing.retrieve(options);
console.log(thing.isFinished);
console.log(spectra);


