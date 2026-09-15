class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mapped = new Map()
        for(let str of strs){
            let parsedStr = str.split('').sort().join()
            if(!mapped.has(parsedStr)){
                mapped.set(parsedStr, [])
            }
            mapped.get(parsedStr).push(str)
        }
        return Array.from(mapped.values())
    }
}
