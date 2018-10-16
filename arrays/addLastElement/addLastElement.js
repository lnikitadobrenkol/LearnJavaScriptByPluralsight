let goods = [1, 2, 3, 4];
let lastElement = 5;

alert (goods);

alert ( addLastElement(goods, lastElement) );

function addLastElement(arr, n) {
    arr.push(n);
    return arr;
}
