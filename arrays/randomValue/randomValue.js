let arrLength = +prompt("Length of array: ", "");

let randomValue;
let min;
let max = arrLength;

let goods = [];

setMinValue();

function output() {
    if (min <= arrLength) {
        alert("to: " + max);

        for (let i = 0; i < arrLength; i++) {
            goods[i] = i;
        }

        generateRandomValue();
        alert(goods[randomValue]);
    } else {
        alert("Minimum value has to be less or equal the araay\`s length");
        setMinValue();
    }
}
function generateRandomValue() {
    randomValue = min + Math.floor(Math.random() * (max + 1 - min));
    randomValue = Math.floor(randomValue);
}

function setMinValue() {
    min = +prompt("I\`m going to generate random value from: ", "");
    output();
}
