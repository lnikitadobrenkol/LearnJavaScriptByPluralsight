var a = 1;

function someFunction(number) {
    function otherFunction(input) {
        return a;
    }

    a = 5;

    return otherFunction; // 1
}

var firstResult = someFunction(9);
var result = firstResult(2); // 5
// ??
