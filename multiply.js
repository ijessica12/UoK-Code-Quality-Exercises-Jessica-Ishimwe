const multiply = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('multiply expects two numbers as arguments');
    }
    return x * y;
}