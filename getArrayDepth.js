// Get max depth of array
function getArrayDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let maxDepth = 1;
    for (const item of arr) {
        if (Array.isArray(item)) {
            maxDepth = Math.max(maxDepth, 1 + getArrayDepth(item));
        }
    }
    return maxDepth;
}
// Flatten array
function flattenArray(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}