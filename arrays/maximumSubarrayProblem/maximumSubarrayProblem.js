function getMaxSubSum(arr) {
    let maxSum = 0,
        partialSum = 0;
    for (let i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([-1, -2, -3]) );
