class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let maxFreq = 0
        let length = 0
        let mapped = new Map()

        for(let right=0; right < s.length; right++){
            let count = mapped.get(s[right]) || 0;
            mapped.set(s[right], count+1)
            maxFreq = Math.max(maxFreq, count+1)

            if((right - left + 1) - maxFreq > k) {
                mapped.set(s[left], mapped.get(s[left]) - 1)
                left++
            }

            length = Math.max(length, right - left + 1)
        }

        return length
    }
}
