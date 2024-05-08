 function factorial(n) {
    if (Number.isInteger(n) && n >= 0) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    } else {
        console.log("Only integer and positive numbers.")
    }
 }
 
 module.exports = { factorial };