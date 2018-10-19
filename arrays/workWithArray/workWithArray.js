let styles = ["Rock", "Jazz"];

showMessage (styles);

styles.push("Rock-n-Roll");

showMessage(styles);

styles[styles.length - 2] = "Classic";

showMessage(styles);

showMessage( styles.shift() );

styles.unshift("Rap", "Reggae");

showMessage(styles);

function showMessage(arr) {
    alert (arr);
}
