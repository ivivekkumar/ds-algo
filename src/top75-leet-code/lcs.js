// Longest Common Subsequence
// Given two strings text1 and text2, return the length of their
// longest common subsequence. If there is no common
// subsequence, return 0.

// A subsequence of a string is a new string generated from the
// original string with some characters (can be none) deleted without
// changing the relative order of the remaining charactersZ
// f For example, "ace" is a subsequence of "abcde".

// A common subsequence of two strings is a subsequence that is
// common to both strings.

const lcs = (string1, string2) => {
    let m = string1.length,
        n = string2.length;

    //let dp = Array.from({ length: m }, () => Array(n).fill(0));
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(string1[i-1] === string2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}

// Example usage:
const text1 = "abcde";
const text2 = "ace";
console.log(lcs(text1, text2)); // Output: 3