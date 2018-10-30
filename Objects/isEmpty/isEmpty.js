let testObject = {};

alert ( isEmpty(testObject) );

testObject.name = "Carl";

alert ( isEmpty(testObject) );

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

