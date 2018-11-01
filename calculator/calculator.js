let calculator = {
    read: function () {
        this.number1 = +prompt("number 1: ", "");
        this.number2 = +prompt("number 2: ", "");
    },

    sum: function () {
        return this.number1 + this.number2;
    },

    mul: function () {
        return this.number1 * this.number2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Throw the constructor

function Calculator2() {

    this.read = function() {
        this.a = +prompt('a?', "");
        this.b = +prompt('b?', "");
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator2 = new Calculator2();
calculator2.read();

alert( "Сумма=" + calculator2.sum() );
alert( "Произведение=" + calculator2.mul() );
