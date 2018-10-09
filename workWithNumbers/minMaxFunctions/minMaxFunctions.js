// I know that it could be better to write these functions in different fies -->
// but it is just the lesson.

// *******************************************************************
let randValZeroMax;
let maxZeroToMax;

let randValMinMax;
let maxMinToMax;
let minMinToMax;

let randValInt;
let maxInt;
let minInt;
// *******************************************************************

// *******************************************************************
zeroToMax();
alert (randValZeroMax);

function zeroToMax () {
    maxZeroToMax = +prompt("I will generate random value form 0 to: ", "");

    randValZeroMax = Math.random() * maxZeroToMax;
}
// *******************************************************************

// *******************************************************************
minToMax();
alert (randValMinMax);

function minToMax () {
    minMinToMax = +prompt("I will generate random value form: ", "");
    maxMinToMax = +prompt("I will generate random value to: ", "");

    randValMinMax = ( minMinToMax + Math.random() * (maxMinToMax - minMinToMax) );
}
// *******************************************************************

// *******************************************************************
randomInteger();
alert (randValInt);

function randomInteger() {
    minInt = +prompt("I will generate random integer form: ", "");
    maxInt = +prompt("I will generate random integer to: ", "");

    randValInt = minInt + Math.random() * (maxInt + 1 - minInt);
    randValInt = Math.floor(randValInt);
}
// *******************************************************************
