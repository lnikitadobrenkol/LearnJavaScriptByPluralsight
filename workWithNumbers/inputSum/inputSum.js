let total;

let number1;
let number2;

enterTheNumber();

function sum () {
    if (isNumeric(number1)) {
        if (isNumeric(number2)) {
            total = number1 + number2;

            alert(total); // Not in this function, but now it`s ok.
        } else {
            error();
            enterTheNumber();
        }
    } else {
        error();
        enterTheNumber();
    }
}

 function enterTheNumber() {
    number1 = +prompt("Enter the first number, please: ", "");
    number2 = +prompt("Enter the second number, please: ", "");
    sum();
 }

function error() {
    alert("Only NUMBER, please");
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
