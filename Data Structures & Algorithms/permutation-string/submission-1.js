class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map1 = new Map()
        let map2 = new Map()

        for(let i = 0; i < s1.length; i++){
            map1.set(s1[i], (map1.get(s1[i]) || 0) + 1)
            map2.set(s2[i], (map2.get(s2[i]) || 0) + 1)
        }

        if(this.isEqualMap(map1, map2)){
            return true
        }

        let left = 0
        for(let right = s1.length; right < s2.length; right++){
            map2.set(s2[right], (map2.get(s2[right]) || 0) + 1)

            map2.set(s2[left], map2.get(s2[left]) - 1)
            if(map2.get(s2[left]) === 0){
                map2.delete(s2[left])
            }
            left++

            if(this.isEqualMap(map1, map2)){
                return true
            }
        }
        return false
    }

    isEqualMap(map1, map2){
        if(map1.size !== map2.size){
            return false
        }

        for(let [key, val] of map1){
            let testVal = map2.get(key)
            if(testVal !== val){
                return false
            }
        }
        return true
    }
}
