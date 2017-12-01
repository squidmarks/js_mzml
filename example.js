var jsmzml = require('./index');

filename = 'C:/Users/Mike/msdata/porter_testing01_171128120533.mzML';
var thing = new jsmzml(filename);

var options = {
    'level': 'Both',
    'rtBegin': 10,
    'rtEnd': 15
};

var spectra = thing.retrieve(options);
console.log(thing.isFinished);
console.log(Object.keys(spectra).length);


