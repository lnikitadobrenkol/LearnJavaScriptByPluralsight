function filterRange(arr, a, b) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }

    return result;
}

let arr = [5, 4, 3, 8, 0];

let filtered = filterRange(arr, 3, 5);
alert( filtered );
