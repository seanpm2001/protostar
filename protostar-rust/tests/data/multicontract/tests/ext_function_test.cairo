use multicontract::fib;

#[test]
fn test_my_test() {
    assert(fib(0, 1, 10) == 55, fib(0, 1, 10));
    assert(2 == 2, 'simple check');
}

#[test]
fn test_simple() {
    assert(1 == 1, 'simple check');
}
