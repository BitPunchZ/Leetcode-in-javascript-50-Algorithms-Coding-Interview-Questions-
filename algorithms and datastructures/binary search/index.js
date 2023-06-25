function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if target is present at mid
        if (arr[mid] === target) {
            return mid;
        }

        // If target is greater, ignore left half
        else if (arr[mid] < target) {
            left = mid + 1;
        }

        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // If we reach here, then the element was not present
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6];
let target = 6;

let result = binarySearch(arr, target);

if (result != -1) {
    console.log("Element is present at index " + result);
} else {
    console.log("Element is not present in array");
}
