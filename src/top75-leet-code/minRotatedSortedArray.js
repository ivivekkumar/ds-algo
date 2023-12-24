// Find Minimum in Rotated Sorted Array

const minRotatedSortedArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left];
}

// Test case
const nums = [3, 4, 5, 1, 2];
// Expected output: 1 (Array is rotated multiple times, minimum is at index 3)
console.log(minRotatedSortedArray(nums));

