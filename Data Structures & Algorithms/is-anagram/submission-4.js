class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        let mappedS = new Map()
        let mappedT = new Map()

        this.mapping(s, mappedS)
        this.mapping(t, mappedT)

        for(let i = 0; i < s.length; i++){
            if(mappedS.get(s[i]) === mappedT.get(s[i])){
                continue
            } else {
                return false
            }
        }
        return true
    }

    mapping(char, mapped){
        for(let i = 0; i < char.length; i++){
            mapped.set(char[i], (mapped.get(char[i]) || 0) + 1)
        }
    }
}
