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
