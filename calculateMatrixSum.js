const calculateMatrixSum = (matrix) => {
    if (!Array.isArray(matrix)) {
        throw new TypeError('Input must be a 2D array');
    }
    return matrix.reduce((total, row) => {
        if (!Array.isArray(row)) return total;
        return total + row.reduce((rowSum, value) => {
            const num = Number(value);
            return isNaN(num) ? rowSum : rowSum + num;
        }, 0);
    }, 0);
}