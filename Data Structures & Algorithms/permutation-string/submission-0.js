class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map1 = new Map()

        for(let i = 0; i < s1.length; i++){
            let count = map1.get(s1[i]) || 0
            map1.set(s1[i], count + 1)
        }

        let left = 0
        let right = s1.length - 1

        while(right < s2.length){
            let map2 = new Map()
            for(let i = left; i <=right; i++){
                let count = map2.get(s2[i]) || 0
                map2.set(s2[i], count + 1)
            }
            left++
            right++
            if(this.isEqualMap(map1, map2)){
                return true
            } else {
                continue
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
