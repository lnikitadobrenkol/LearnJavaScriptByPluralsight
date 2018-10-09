let str = prompt("number: ", "");
let result;

exctractCurrencyValue(str);

alert (result);

function exctractCurrencyValue(str) {
    result = +str.slice(1);
}



