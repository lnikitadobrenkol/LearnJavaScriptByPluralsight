// I need to rewrite this code:
// let ladder = {
//     step: 0,
//     up: function() { // вверх по лестнице
//         this.step++;
//     },
//     down: function() { // вниз по лестнице
//         this.step--;
//     },
//     showStep: function() { // вывести текущую ступеньку
//         alert( this.step );
//     }
// };
// So that it work the way like this one:
// ladder.up().up().down().up().down().showStep(); // 1
let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this; // (*)
    },
    down: function() {
        this.step--;
        return this; // (*)
    },
    showStep: function() {
        alert( this.step );
        return this; // (*)
    }
};

ladder.up().up().down().up().down().showStep(); // 1
