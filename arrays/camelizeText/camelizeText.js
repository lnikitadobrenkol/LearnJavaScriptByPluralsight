let myStr = "hello-world";
let myStr1 = "eello-world";

alert(camelize(myStr));
alert(camelize(myStr1));

function camelize (str) {
    let result = str.split('');
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "-") {
            result[i + 1] = result[i + 1].toUpperCase();
            result.splice(i, 1);
        }
    }
    return result.join('');
}
