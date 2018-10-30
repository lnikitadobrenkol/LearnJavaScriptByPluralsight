let n = prompt("To witch number do you want to figure prime numbers: ", "");

// Key - is the minimum value in each refreshed array
let key;

let ourArray = [];

setArr(ourArray);

do {
    findKey(ourArray);
    filterPrimeNumber(ourArray);
} while (key * key < n);

alert( sum(ourArray) );

function findKey(arr) {
   key =  Math.min.apply(null, arr)
}

function filterPrimeNumber(arr) {
    for (let i = 0; i < arr.length; i ++) {
        if ( !(arr[i] % key) ) {
            arr.splice((i), 1);
        }
    }
}

function setArr(arr) {
    for (let i = 2; i <= n; i++) {
        arr[i -2] = i;
    }
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum;
}

