class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordSet = new Set(wordDict);
        let n = s.length;
        
        // dp[i] represents whether the substring s[0...i-1] can be segmented
        let dp = new Array(n + 1).fill(false);
        dp[0] = true; // Base case: empty string is always valid

        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                // If the prefix up to j is valid, and the substring from j to i is in the dictionary
                if (dp[j] && wordSet.has(s.substring(j, i))) {
                    dp[i] = true;
                    break; // No need to check other split points for this i
                }
            }
        }

        return dp[n];
    }
}