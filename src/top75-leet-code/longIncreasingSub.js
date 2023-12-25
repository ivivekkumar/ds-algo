// Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest
// strictly increasing subsequence.

// Below solution returns the length of lis in linear time.
const longIncSub = (arr) => {
    let dp = new Array(arr.length).fill(1);
  
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && typeof arr[i - 1] === 'number') {
        if (arr[i] > arr[i - 1]) {
          dp[i] = dp[i - 1] + 1;
        } else {  // Corrected logic: reset for non-increasing numerical pairs
          dp[i] = 1;
        }
      } else {
        dp[i] = 1;  // Reset for non-numerical elements
      }
    }
  
    let max = dp[0];
    for (elem of dp) {
      if (elem > max) {
        max = elem;
      }
    }
  
    return max;
  };
  
  const sequence = [2,12,4,5,5,108,12];
  console.log(longIncSub(sequence)); // Output: 2
  
// Below solution returns the length in case of mixed array aswell. Time Complexity: O(n^2).

const longIncSubGenralised = (arr) => {
    if (arr.length === 0) {
        return 0;
    }

    let maxLength = 1;
    let dp = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                maxLength = Math.max(maxLength, dp[i]);
            }
        }
    }

    return maxLength;
};

const sequenceArr = ['a', 1, 'b', 2];
console.log(longIncSubGenralised(sequenceArr));
