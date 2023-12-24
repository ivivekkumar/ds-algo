// Triplet Sum

const tripletSum = (arr) => {
    const result = [];

    // Sort the array to use two-pointer approach
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {
        if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
            let first = arr[i];
            let left = i + 1;
            let right = arr.length - 1;

            while (left < right) {
                let second = arr[left];
                let third = arr[right];
                let sum = first + second + third;

                if (sum === 0) {
                    result.push([first, second, third]);

                    // Skip duplicates for second and third elements
                    while (left < right && arr[left] === arr[left + 1]) left++;
                    while (left < right && arr[right] === arr[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

// Test case
const nums = [-1, 0, 1, 2, -1, -4];
console.log(tripletSum(nums));
