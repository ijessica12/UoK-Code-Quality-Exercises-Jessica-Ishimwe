function fibonacciUpTo(limit) {
    const sequence = [];
    let a = 0, b = 1;
    while (a <= limit) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }
    return sequence;
}