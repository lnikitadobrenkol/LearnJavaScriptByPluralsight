const Key = ( 1 + Math.sqrt(5) ) / 2;
let numberFibonacchi;
let n = prompt("Pick the number of the Fibonacci figure: ", "");

fibonacchi(n);

alert ( Math.round(numberFibonacchi) );

function fibonacchi(n) {
    if (isNumeric(n)) {
        numberFibonacchi = ( Math.pow(Key, n) ) / Math.sqrt(5);
    } else {
        alert ("Please, the enter the NUMBER");
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
