// Given a string s and a dictionary of strings wordDict, 
// return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

function wordBreak(s, wordDict) {
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true; // Empty string is always segmentable

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}


const s1 = "leetcode";
const wordDict1 = ["leet", "code"];
console.log(wordBreak(s1, wordDict1));  // Output: true

const s3 = "catsandog";
const wordDict3 = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s3, wordDict3));  // Output: false
