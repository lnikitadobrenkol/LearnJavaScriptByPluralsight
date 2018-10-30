let arr = [5, 2, 1, -10, 8];

function compare(a, b) {
    return b - a;
}

arr.sort(compare);

alert( arr );

// *********************************************************************************************************************

let arr1 = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

arr1.sort(compareRandom);

alert( arr );
