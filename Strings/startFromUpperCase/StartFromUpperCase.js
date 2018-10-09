let inputString = prompt("Введите строку с маленькой буквы, а я вам верну уже с большой", "");
let firstChar;

riseFirstChr();

function riseFirstChr () {
    firstChar = inputString.charAt(0);
    alert ( firstChar.toUpperCase() + inputString.substring(1) );
}
