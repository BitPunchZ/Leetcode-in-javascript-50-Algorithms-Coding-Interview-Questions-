function maxSum(arr, windowSize) {
    let arraySize = arr.length;
    // n must be greater than k
    if (arraySize <= windowSize) {
        console.log("Invalid operation");
        return -1;
    }

    // Compute sum of first window of size k
    let window_sum = 0;
    for (let i = 0; i < windowSize; i++) {
        window_sum += arr[i];
    }
    
    let max_sum = window_sum;

    // Compute sums of remaining windows by
    // removing first element of previous
    // window and adding last element of
    // current window.
    for (let i = 0; i < arraySize - windowSize; i++) {
        window_sum = window_sum - arr[i] + arr[i + windowSize];
        max_sum = Math.max(window_sum, max_sum);
    }

    return max_sum;
}

let arr = [1, 2, 100, -1, 5];
// maximum sum should be 104 => 100 + -1 + 5
let answer = maxSum(arr, 3);
console.log(answer);  // Prints: 104
