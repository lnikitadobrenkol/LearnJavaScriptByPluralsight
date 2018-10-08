function test() {
    alert (a);
    alert (foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();
// done
