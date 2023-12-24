// Maximum Subarray
// Given an integer array nums, find the subarray with the largest
// sum, and return its sum.

const maxSubArr = (arr) => {
    let maxSum = arr[0],
        actualSum = arr[0];

    for(let i=1; i<arr.length; i++){
        actualSum = Math.max(arr[i], actualSum + arr[i]);
        maxSum = Math.max(maxSum, actualSum);
    }
    return maxSum;
}

// Test case
const nums = [1, -2, -3, -4, 8];
// Expected output: [24, 12, 8, 6]
console.log(maxSubArr(nums));