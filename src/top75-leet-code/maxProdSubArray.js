const maxProdArr = (arr) => {
    let maxProd = arr[0];
    let minProd = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            // Swap maxProd and minProd when encountering a negative number
            [maxProd, minProd] = [minProd, maxProd];
        }

        // Update maxProd and minProd
        maxProd = Math.max(arr[i], maxProd * arr[i]);
        minProd = Math.min(arr[i], minProd * arr[i]);

        // Update the overall result
        result = Math.max(result, maxProd);
    }

    return result;
}

// Test cases
// const nums1 = [1, -2, -3, 4, 8];
// console.log(maxProdArr(nums1)); // Expected: 192

// const nums2 = [-1, -2, -3, -4];
// console.log(maxProdArr(nums2)); // Expected: 24

// const nums = [2, 0, -3, 4, -5, 6];
// // Expected output: 6 (Product of [-5, 6] is the maximum)
// console.log(maxProdArr(nums));

const nums = [-2, -3, -4, -5, -12];
// Expected output: 720 (Product of all elements is the maximum)
console.log(maxProdArr(nums));