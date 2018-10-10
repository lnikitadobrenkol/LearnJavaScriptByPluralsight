let salaries = {
    Carl: 1000,
    Bob: 200,
    Cris: "wewe"
};

if ( isEmpty(salaries) ) {
    multiplyNumeric(salaries);

    for (let key in salaries) {
        alert ( salaries[key] );
    }
} else {
    alert ("Object is empty");
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if ( isNumeric(obj[key]) ) {
            obj[key] *= 2;
        }
    } return obj;
}

function isEmpty(obj) {
    for (let key in obj) {
        return true;
    } return false;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
