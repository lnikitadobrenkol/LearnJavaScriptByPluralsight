let str = "Write your string: ";
let maxlength = 5;
let result;

truncate(str, maxlength);

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        result = str.substring(0, (maxlength + 1) );
    } else {
        result = str;
    }
}

alert(result);

