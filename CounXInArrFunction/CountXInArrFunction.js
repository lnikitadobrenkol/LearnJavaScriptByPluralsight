const key = 5;
var arr  = [5, 10, 12, 12, 5, 3, 2, 5];
var sum = 0;

function countX (arr) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === key) {
            sum ++;
        }
    } return sum;
}

countX(arr);
alert (sum);
