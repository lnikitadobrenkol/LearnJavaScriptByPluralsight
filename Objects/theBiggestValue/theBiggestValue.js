let salaries = {
    Carl: 1000,
    Bob: 200,
    Cris: 500
};

if ( isEmpty(salaries) ) {
    alert ( findTheBiggestValue(salaries) );
} else {
    alert ("Object is empty");
}

function findTheBiggestValue(obj) {
    let result = 0;

    for (let key in obj) {
        if (result < obj[key]) {
            result = obj[key];
        }
    } return +result;
}

function isEmpty(obj) {
    for (let key in obj) {
        return true;
    } return false;
}
