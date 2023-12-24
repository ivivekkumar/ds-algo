// Product of Array Except Self
// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums
// except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a
// 32-bit integer.

// You must write an algorithm that runs in O(n) time and without
// using the division operation.

function productExceptSelf(nums) {
    const n = nums.length;

    // Initialize arrays to store the products of prefixes and suffixes
    const prefixProducts = Array(n).fill(1);
    const suffixProducts = Array(n).fill(1);

    // Calculate the products of prefixes
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        prefixProducts[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    // Calculate the products of suffixes
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        suffixProducts[i] = suffixProduct;
        suffixProduct *= nums[i];
    }

    // Calculate the final result by multiplying prefixes and suffixes
    const result = Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = prefixProducts[i] * suffixProducts[i];
    }

    return result;
}

// Test case
const nums = [1, 2, 3, 4];
// Expected output: [24, 12, 8, 6]
console.log(productExceptSelf(nums));