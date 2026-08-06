class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let count = 0
        let mapped = new Map()

        for(let right = 0; right < s.length; right++){
            if(mapped.has(s[right])){
                left = Math.max(left, mapped.get(s[right]) + 1)
            }

            mapped.set(s[right], right)

            count = Math.max(count, right - left + 1)
        }
        return count
    }
}
