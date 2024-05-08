// Cadenas ('C', 'T', 'A', 'G')

function validDNA(dnaString) {
    if (dnaString === 0 || dnaString != string) {
        return console.log(false);
    }

    for (i = 0; i <dnaString.length; i++) {
        if (dnaString[i] != dnaString.toUpperCase() || dnaString.RegExp('^[^CTAG]+$')) {
            return console.log(false);
        } else {
            return console.log("is Valid");
        }
    }
}

module.exports = { validDNA };




