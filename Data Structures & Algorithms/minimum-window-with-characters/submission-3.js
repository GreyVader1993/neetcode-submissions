class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let map1 = new Map()
        let map2 = new Map()

        for(let i = 0; i < t.length; i++){
            map1.set(t[i], (map1.get(t[i]) || 0) + 1)
        }

        let left = 0
        let minLen = Infinity
        let start = 0

        for(let right = 0; right < s.length; right++){
            map2.set(s[right], (map2.get(s[right]) || 0) + 1)

            while(this.containsMap(map1, map2)){
                if(right - left + 1 < minLen){
                    minLen = Math.min(minLen, right - left + 1)
                    start = left
                }
                map2.set(s[left], map2.get(s[left]) - 1)
                left++
            }
        }

        return minLen === Infinity ? "" : s.substring(start, start + minLen)
    }

    containsMap(map1, map2){
        for(let [key, val] of map1){
            if(map2.get(key) >= map1.get(key)){
                continue
            }
            return false
        }
        return true
    }
}
