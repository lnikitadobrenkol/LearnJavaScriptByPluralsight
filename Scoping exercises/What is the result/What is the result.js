var a = 1;

function someFunction(number) {
    function otherFunction(number) {
        return a;
    }

    a = number;

    return otherFunction; // 1
}

var firstResult = someFunction(9);//9
var result = firstResult(2); // 5
alert(result);
