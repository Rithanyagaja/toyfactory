function moveEmptyBoxesToEnd(arr) {
    let nonZero = [];
    let emptyBoxCount = 0;

    // Separate non-zero elements and count zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            emptyBoxCount++;
        } else {
            nonZero.push(arr[i]);
        }
    }

    // Append empty boxes (0's) to the end
    for (let i = 0; i < emptyBoxCount; i++) {
        nonZero.push(0);
    }

    console.log("Number of empty boxes:", emptyBoxCount);
    return nonZero;
}

// Example usage:
let boxes = [1, 0, 2, 0, 3, 4, 0, 5];
console.log(moveEmptyBoxesToEnd(boxes));  
// Output: [1, 2, 3, 4, 5, 0, 0, 0] and "Number of empty boxes: 3"
