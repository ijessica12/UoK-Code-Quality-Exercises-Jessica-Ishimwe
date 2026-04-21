function formatNumber(n) {
    const sign = n < 0 ? "-" : "";
    const numStr = Math.abs(n).toString();
    let result = "";
    let count = 0;
    for (let i = numStr.length - 1; i >= 0; i--) {
        result = numStr[i] + result;
        count++;
        if (count % 3 === 0 && i !== 0) {
            result = "," + result;
        }
    }
    return sign + result;
    // return n.toLocaleString("en-US");
}