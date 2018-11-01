function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('I`m gonna to sum up it: ', "");
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert( accumulator.value );
