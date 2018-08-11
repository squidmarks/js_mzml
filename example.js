var jsmzml = require('./index');

var filename = './test/spectra/3.mzML';
var thing = new jsmzml(filename);

var sumSpectra = function(spectra){
    var summedPosSpectra={};
    var summedNegSpectra={};
    for (let index = spectra[1].scanLowerLimit; index <= spectra[1].scanUpperLimit; index++) {
        summedPosSpectra[index]=0;
        summedNegSpectra[index]=0;        
    }

    Object.keys(spectra).forEach(function (key) {
        for (let j = 0; j < spectra[key].mass.length; j++) {
            if (spectra[key].ESIpolarity==0) summedPosSpectra[Math.round(spectra[key].mass[j])]+=spectra[key].intensity[j];
            if (spectra[key].ESIpolarity==1) summedNegSpectra[Math.round(spectra[key].mass[j])]+=spectra[key].intensity[j];
        }
    });
    console.log(summedPosSpectra);
    return {pos: summedPosSpectra, neg: summedNegSpectra}
}

function itFinished() {
    sumSpectra(thing.spectra);
    //console.log(thing.spectra);
}

thing.retrieve({}, itFinished);


