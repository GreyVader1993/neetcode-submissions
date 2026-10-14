class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s){
        let res = "";
        let len = 0;

        for (let i = 0; i < s.length; i++) {
            // Odd length palindromes (center is i)
            let left = i;
            let right = i;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                len++
                left--;
                right++;
            }

            // Even length palindromes (center is between i and i + 1)
            left = i;
            right = i + 1;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                len++
                left--;
                right++;
            }
        }

        return len;
    }
}
