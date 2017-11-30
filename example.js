var jsmzml = require('./index');

filename = 'C:/Users/Mike/code/js_mzml/test/spectra/small_64bit.mzML';
var thing = new jsmzml(filename);

var options = {
    'level': 'Both',
    'rtBegin': 0,
    'rtEnd': 0.005
};

thing.retrieve(options);
console.log(thing.isFinished);

function wait () {
    if (thing.isFinished === false){
        setTimeout(wait, 200);
        console.log(thing);
    }
    else {
        console.log(thing);
        console.log(thing.spectra['1'].mass[0]);

    }
};
console.log(thing);
wait();


