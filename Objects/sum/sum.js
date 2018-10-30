let salaries = {
  Carl: 100,
  Bob: 200,
  Cris: 10
};

if ( isEmpty(salaries) ) {
    alert ( sum(salaries) );
} else {
    alert ("Object is empty");
}

function sum(obj) {
    let result = 0;

    for (let key in obj) {
        result += obj[key];
    } return +result;
}

function isEmpty(obj) {
    for (let key in obj) {
        return true;
    } return false;
}
