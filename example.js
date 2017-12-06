var jsmzml = require('./index');

//filename = 'C:/Users/Mike/msdata/porter_testing01_171128120533.mzML';
filename = './test/spectra/small_64bit.mzML';
var thing = new jsmzml(filename);


var options = {
    'level': 'Both',
    'rtBegin': 0,
    'rtEnd': 0.005
};

/*
var options = {
    'level': 'Both',
    'rtBegin': 10,
    'rtEnd': 15
};
*/

function itFinished() {
    console.log(thing);
    console.log(thing.isFinished);
    console.log(Object.keys(thing.spectra).length);
}

thing.retrieve(options, itFinished);
console.log(thing.isFinished);


