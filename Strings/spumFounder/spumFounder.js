let str = prompt("Say me something, naughty boy: ", "");

checkSpam(str);

if ( checkSpam(str) ) {
    alert ("Jerk at home..");
} else {
    alert ("There is no spum" + "\u03DB");
}

function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}


